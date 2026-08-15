import type { Owner, Timing } from '../data/types';
import type { Answers, FormLength } from './forms';
import { questionsInForm } from './forms';

/**
 * A launch condition after merging. Several questions can imply the same piece
 * of work, so conditions sharing a mergeKey collapse into one line that cites
 * every question behind it.
 */
export interface ResolvedCondition {
  mergeKey: string;
  action: string;
  owner: Owner;
  timing: Timing;
  /** Question ids that produced this condition, sorted. */
  triggeredBy: string[];
  /** The worst level that triggered it. 0 (Not ready) is worse than 1 (Emerging). */
  severity: 0 | 1;
  /**
   * The question whose wording the action text came from. Merging discards the
   * other candidates, so this is what a translation layer needs in order to
   * look the action up again in another language.
   */
  sourceQuestionId: string;
}

export const TIMINGS: Timing[] = ['before-pilot', 'during-pilot', 'before-rollout'];
export const OWNERS: Owner[] = ['coach', 'organisation', 'joint'];

const TIMING_ORDER: Record<Timing, number> = {
  'before-pilot': 0,
  'during-pilot': 1,
  'before-rollout': 2,
};

/**
 * Collects every condition triggered by a Not ready or Emerging score.
 *
 * Merge rules, when two questions share a mergeKey:
 *  - severity takes the worse of the two, and the action text comes from that
 *    one, because the Not ready remedy is always the more thorough of the pair
 *  - timing takes the earlier, since the work has to be done by the sooner date
 *  - owner takes the agreed owner, or "joint" when two questions disagree,
 *    which is the honest answer rather than picking a side
 */
export function collectConditions(answers: Answers, form: FormLength = 'full'): ResolvedCondition[] {
  const byKey = new Map<string, ResolvedCondition>();

  for (const q of questionsInForm(form)) {
    const answer = answers[q.id];
    if (answer !== 0 && answer !== 1) continue;

    const condition = q.conditions[answer];
    const existing = byKey.get(condition.mergeKey);

    if (!existing) {
      byKey.set(condition.mergeKey, {
        mergeKey: condition.mergeKey,
        action: condition.action,
        owner: condition.owner,
        timing: condition.timing,
        triggeredBy: [q.id],
        severity: answer,
        sourceQuestionId: q.id,
      });
      continue;
    }

    existing.triggeredBy.push(q.id);

    if (answer < existing.severity) {
      existing.severity = answer;
      existing.action = condition.action;
      existing.sourceQuestionId = q.id;
    }
    if (TIMING_ORDER[condition.timing] < TIMING_ORDER[existing.timing]) {
      existing.timing = condition.timing;
    }
    if (existing.owner !== condition.owner) {
      existing.owner = 'joint';
    }
  }

  return [...byKey.values()]
    .map((c) => ({ ...c, triggeredBy: [...c.triggeredBy].sort() }))
    .sort(
      (a, b) =>
        TIMING_ORDER[a.timing] - TIMING_ORDER[b.timing] ||
        a.severity - b.severity ||
        a.mergeKey.localeCompare(b.mergeKey),
    );
}

/** Blockers only. These are the conditions that gate a start. */
export const blockers = (conditions: ResolvedCondition[]): ResolvedCondition[] =>
  conditions.filter((c) => c.timing === 'before-pilot');

export function groupByTiming(
  conditions: ResolvedCondition[],
): Record<Timing, ResolvedCondition[]> {
  return {
    'before-pilot': conditions.filter((c) => c.timing === 'before-pilot'),
    'during-pilot': conditions.filter((c) => c.timing === 'during-pilot'),
    'before-rollout': conditions.filter((c) => c.timing === 'before-rollout'),
  };
}

export function groupByOwner(conditions: ResolvedCondition[]): Record<Owner, ResolvedCondition[]> {
  return {
    coach: conditions.filter((c) => c.owner === 'coach'),
    organisation: conditions.filter((c) => c.owner === 'organisation'),
    joint: conditions.filter((c) => c.owner === 'joint'),
  };
}
