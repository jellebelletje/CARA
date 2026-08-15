import type { Dimension, Level, Question } from '../data/types';
import { dimensions } from '../data/assessment';
import type { Answers, FormLength } from './forms';
import { questionsInForm } from './forms';
import type { ResolvedCondition } from './conditions';
import { blockers, collectConditions } from './conditions';

export type { Answers, FormLength } from './forms';
export { questionsInForm } from './forms';

export type Verdict = 'incomplete' | 'no-go' | 'go-with-conditions' | 'go' | 'scale-ready';

export interface DimensionResult {
  dimension: Dimension;
  /** Null when nothing in this dimension has been answered with a level. */
  level: Level | null;
  mean: number | null;
  answeredCount: number;
  totalCount: number;
  unknownIds: string[];
  unansweredIds: string[];
  /** Pilot-critical questions scored Not ready. Any one forces the dimension to Not ready. */
  criticalFailureIds: string[];
  /** Other questions scored Not ready. These cap the dimension at Emerging. */
  cappingIds: string[];
  /** Pilot-critical questions answered "unknown". An unknown here is itself a finding. */
  unknownCriticalIds: string[];
}

export interface AssessmentResult {
  form: FormLength;
  dimensions: DimensionResult[];
  conditions: ResolvedCondition[];
  verdict: Verdict;
  readiness: Readiness;
}

export interface Readiness {
  /**
   * 0 to 100, the share of the maximum level actually reached. Null until
   * something is answered.
   *
   * This is a progress figure for tracking movement between assessments, and
   * it is explicitly NOT the decision. A high percentage alongside one red
   * dimension is still a no-go, because a single fatal gap is exactly what an
   * average is good at hiding. The verdict stays the headline.
   */
  percent: number | null;
  answered: number;
  total: number;
  /** How many answered questions sit at each level. */
  distribution: Record<Level, number>;
}

/** A dimension's own percentage, on the same 0 to 100 scale. */
export const dimensionPercent = (r: DimensionResult): number | null =>
  r.mean === null ? null : Math.round((r.mean / 3) * 100);

function computeReadiness(
  results: DimensionResult[],
  inScope: Question[],
  answers: Answers,
): Readiness {
  const distribution: Record<Level, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
  let answered = 0;

  for (const q of inScope) {
    const answer = answers[q.id];
    if (typeof answer !== 'number') continue;
    distribution[answer] += 1;
    answered += 1;
  }

  // The mean of the dimension means, not of every question, so that a dimension
  // with nine questions does not outweigh one with seven. Dimensions carry equal
  // weight in the verdict, and the headline figure should agree with it.
  const scored = results.filter((r) => r.mean !== null);
  const percent =
    scored.length === 0
      ? null
      : Math.round(
          (scored.reduce<number>((sum, r) => sum + (r.mean as number) / 3, 0) / scored.length) * 100,
        );

  return { percent, answered, total: inScope.length, distribution };
}

const SCALE_READY_MINIMUM = 4;

/**
 * A dimension's level is deliberately not a plain average.
 *
 *   base    = floor(mean of the levels actually chosen)
 *   capped  = min(base, Emerging) when any question scored Not ready
 *   forced  = Not ready when any pilot-critical question scored Not ready
 *
 * The cap is what stops six strong answers from burying one red. The force is
 * what makes a genuine blocker produce a no-go. Answers of "unknown" are left
 * out of the mean entirely, because guessing on the client's behalf is worse
 * than recording that nobody knows.
 */
export function scoreDimension(
  dimension: Dimension,
  dimensionQuestions: Question[],
  answers: Answers,
): DimensionResult {
  const levels: Level[] = [];
  const unknownIds: string[] = [];
  const unansweredIds: string[] = [];
  const criticalFailureIds: string[] = [];
  const cappingIds: string[] = [];
  const unknownCriticalIds: string[] = [];

  for (const q of dimensionQuestions) {
    const answer = answers[q.id];

    if (answer === undefined) {
      unansweredIds.push(q.id);
      continue;
    }
    if (answer === 'unknown') {
      unknownIds.push(q.id);
      if (q.pilotCritical) unknownCriticalIds.push(q.id);
      continue;
    }

    levels.push(answer);
    if (answer === 0) {
      if (q.pilotCritical) criticalFailureIds.push(q.id);
      else cappingIds.push(q.id);
    }
  }

  const base = {
    dimension,
    answeredCount: levels.length,
    totalCount: dimensionQuestions.length,
    unknownIds,
    unansweredIds,
    criticalFailureIds,
    cappingIds,
    unknownCriticalIds,
  };

  if (levels.length === 0) {
    return { ...base, level: null, mean: null };
  }

  const mean = levels.reduce<number>((sum, l) => sum + l, 0) / levels.length;
  const floored = Math.floor(mean) as Level;

  let level: Level;
  if (criticalFailureIds.length > 0) {
    level = 0;
  } else if (cappingIds.length > 0) {
    level = Math.min(floored, 1) as Level;
  } else {
    level = floored;
  }

  return { ...base, level, mean };
}

/**
 * The verdict is not an average of the dimensions. Averaging six dimensions
 * hides the single fatal gap, which is the whole point of a go/no-go.
 *
 * It also reads the conditions, not only the dimension levels. A single amber
 * answer among strong ones does not move its dimension off Ready, but it does
 * produce a launch condition, and handing someone a GO alongside a page of
 * things to fix before starting is incoherent. If there is work to close
 * before the pilot, the verdict says so.
 */
export function computeVerdict(
  results: DimensionResult[],
  conditions: ResolvedCondition[] = [],
): Verdict {
  if (results.some((r) => r.level === null)) return 'incomplete';

  const levels = results.map((r) => r.level as Level);

  if (levels.some((l) => l === 0)) return 'no-go';
  if (levels.some((l) => l === 1)) return 'go-with-conditions';
  if (blockers(conditions).length > 0) return 'go-with-conditions';

  // Anything still outstanding, even if only for rollout, rules out scale-ready.
  const scalable = levels.filter((l) => l === 3).length;
  return scalable >= SCALE_READY_MINIMUM && conditions.length === 0 ? 'scale-ready' : 'go';
}

export function assess(answers: Answers, form: FormLength = 'full'): AssessmentResult {
  const inScope = questionsInForm(form);
  const conditions = collectConditions(answers, form);

  const results = dimensions.map((dimension) =>
    scoreDimension(
      dimension,
      inScope.filter((q) => q.dimension === dimension.id),
      answers,
    ),
  );

  return {
    form,
    dimensions: results,
    conditions,
    verdict: computeVerdict(results, conditions),
    readiness: computeReadiness(results, inScope, answers),
  };
}
