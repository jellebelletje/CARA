import { describe, expect, it } from 'vitest';
import { assess, computeVerdict, questionsInForm, scoreDimension } from '../scoring';
import type { Answers, DimensionResult } from '../scoring';
import { blockers, collectConditions } from '../conditions';
import { dimensions, questions, questionsFor } from '../../data/assessment';
import type { Dimension, Level, Question } from '../../data/types';

const dim = (id: string): Dimension => dimensions.find((d) => d.id === id)!;

/** Answer every question in scope with one level. */
const answerAll = (level: Level, qs: Question[] = questions): Answers =>
  Object.fromEntries(qs.map((q) => [q.id, level]));

const answerAllUnknown = (qs: Question[]): Answers =>
  Object.fromEntries(qs.map((q) => [q.id, 'unknown' as const]));

/** A stub good enough for computeVerdict, which only reads `level`. */
const results = (...levels: (Level | null)[]): DimensionResult[] =>
  levels.map((level) => ({ level }) as DimensionResult);

describe('scoreDimension', () => {
  const leadership = dim('lead');
  const qs = questionsFor('lead');
  const critical = qs.find((q) => q.pilotCritical)!;
  const nonCritical = qs.find((q) => !q.pilotCritical)!;

  it('floors the mean of the answered levels', () => {
    // Two Ready and one Scalable is a mean of 2.33, which floors to Ready.
    const answers: Answers = { [qs[0].id]: 2, [qs[1].id]: 2, [qs[2].id]: 3 };
    const r = scoreDimension(leadership, qs.slice(0, 3), answers);
    expect(r.mean).toBeCloseTo(2.33, 2);
    expect(r.level).toBe(2);
  });

  it('caps the dimension at Emerging when a non-critical question is Not ready', () => {
    const answers = answerAll(3, qs);
    answers[nonCritical.id] = 0;

    const r = scoreDimension(leadership, qs, answers);

    // The mean is still well above Ready, but one red must not be buried.
    expect(r.mean).toBeGreaterThan(2);
    expect(r.level).toBe(1);
    expect(r.cappingIds).toEqual([nonCritical.id]);
    expect(r.criticalFailureIds).toEqual([]);
  });

  it('forces the dimension to Not ready when a pilot-critical question is Not ready', () => {
    const answers = answerAll(3, qs);
    answers[critical.id] = 0;

    const r = scoreDimension(leadership, qs, answers);

    expect(r.level).toBe(0);
    expect(r.criticalFailureIds).toEqual([critical.id]);
  });

  it('excludes unknown answers from the mean but records them', () => {
    const answers: Answers = { [qs[0].id]: 2, [qs[1].id]: 'unknown', [qs[2].id]: 2 };
    const r = scoreDimension(leadership, qs.slice(0, 3), answers);

    expect(r.answeredCount).toBe(2);
    expect(r.mean).toBe(2);
    expect(r.level).toBe(2);
    expect(r.unknownIds).toEqual([qs[1].id]);
  });

  it('flags an unknown on a pilot-critical question as a finding in its own right', () => {
    const r = scoreDimension(leadership, qs, { [critical.id]: 'unknown' });
    expect(r.unknownCriticalIds).toEqual([critical.id]);
  });

  it('returns a null level when nothing in the dimension has been answered', () => {
    const r = scoreDimension(leadership, qs, {});
    expect(r.level).toBeNull();
    expect(r.mean).toBeNull();
    expect(r.unansweredIds).toHaveLength(qs.length);
  });

  it('returns a null level when every answer is unknown', () => {
    expect(scoreDimension(leadership, qs, answerAllUnknown(qs)).level).toBeNull();
  });
});

describe('computeVerdict', () => {
  it('is incomplete while any dimension is unscored', () => {
    expect(computeVerdict(results(2, 2, 2, 2, 2, null))).toBe('incomplete');
  });

  it('is a no-go when any single dimension is Not ready', () => {
    // Five Scalable and one Not ready averages to 2.5, which would read as Ready.
    // Averaging is exactly what CARA must not do.
    expect(computeVerdict(results(3, 3, 3, 3, 3, 0))).toBe('no-go');
  });

  it('is go-with-conditions when nothing is red but something is amber', () => {
    expect(computeVerdict(results(3, 3, 3, 3, 3, 1))).toBe('go-with-conditions');
  });

  it('is go when every dimension is Ready or better', () => {
    expect(computeVerdict(results(2, 2, 2, 2, 2, 2))).toBe('go');
  });

  it('needs four Scalable dimensions to reach scale-ready', () => {
    expect(computeVerdict(results(3, 3, 3, 2, 2, 2))).toBe('go');
    expect(computeVerdict(results(3, 3, 3, 3, 2, 2))).toBe('scale-ready');
  });

  it('will not say GO while a blocker is outstanding, whatever the levels say', () => {
    // One amber answer among strong ones does not move its dimension off Ready,
    // but it does produce a condition. A GO handed over with work still to close
    // before the pilot would be incoherent.
    const blocker = {
      timing: 'before-pilot' as const,
      mergeKey: 'x',
      action: 'a',
      owner: 'coach' as const,
      triggeredBy: [],
      severity: 1 as const,
      sourceQuestionId: 'lead-01',
    };
    expect(computeVerdict(results(3, 3, 3, 3, 3, 3), [blocker])).toBe('go-with-conditions');
  });

  it('reserves scale-ready for a run with nothing outstanding at all', () => {
    const rolloutItem = {
      timing: 'before-rollout' as const,
      mergeKey: 'x',
      action: 'a',
      owner: 'coach' as const,
      triggeredBy: [],
      severity: 1 as const,
      sourceQuestionId: 'lead-01',
    };
    expect(computeVerdict(results(3, 3, 3, 3, 3, 3), [])).toBe('scale-ready');
    expect(computeVerdict(results(3, 3, 3, 3, 3, 3), [rolloutItem])).toBe('go');
  });
});

describe('assess, end to end over the real question bank', () => {
  it('an all-Emerging run is a go with conditions, never a block', () => {
    // The property that makes CARA usable rather than a gate everyone fails.
    expect(assess(answerAll(1)).verdict).toBe('go-with-conditions');
    expect(blockers(collectConditions(answerAll(1))).length).toBeGreaterThan(0);
  });

  it('an all-Ready run is a go', () => {
    expect(assess(answerAll(2)).verdict).toBe('go');
  });

  it('an all-Scalable run is scale-ready', () => {
    expect(assess(answerAll(3)).verdict).toBe('scale-ready');
  });

  it('one pilot-critical red anywhere flips a perfect run to no-go', () => {
    for (const critical of questions.filter((q) => q.pilotCritical)) {
      const answers = answerAll(3);
      answers[critical.id] = 0;
      expect(assess(answers).verdict, `${critical.id} should force a no-go`).toBe('no-go');
    }
  });

  it('one non-critical red never produces a no-go on its own', () => {
    for (const q of questions.filter((x) => !x.pilotCritical)) {
      const answers = answerAll(3);
      answers[q.id] = 0;
      expect(assess(answers).verdict, `${q.id} must not force a no-go`).toBe('go-with-conditions');
    }
  });
});

describe('short form', () => {
  it('contains exactly the pilot-critical questions', () => {
    const short = questionsInForm('short');
    expect(short).toHaveLength(questions.filter((q) => q.pilotCritical).length);
    expect(short.every((q) => q.pilotCritical)).toBe(true);
  });

  it('covers every dimension, so none can go unassessed', () => {
    for (const d of dimensions) {
      expect(
        questionsInForm('short').filter((q) => q.dimension === d.id).length,
        `${d.name} has no pilot-critical question`,
      ).toBeGreaterThan(0);
    }
  });

  it('never misses a no-go that the full form would have found', () => {
    for (const critical of questions.filter((q) => q.pilotCritical)) {
      const answers = answerAll(3);
      answers[critical.id] = 0;
      expect(assess(answers, 'short').verdict).toBe('no-go');
      expect(assess(answers, 'full').verdict).toBe('no-go');
    }
  });

  it('can miss conditions the full form would raise, which is its known limit', () => {
    const nonCritical = questions.find((q) => !q.pilotCritical)!;
    const answers = answerAll(3);
    answers[nonCritical.id] = 1;

    expect(assess(answers, 'full').verdict).toBe('go-with-conditions');
    expect(assess(answers, 'short').verdict).toBe('scale-ready');
  });
});

describe('collectConditions', () => {
  it('raises no conditions when everything is Ready or better', () => {
    expect(collectConditions(answerAll(2))).toEqual([]);
    expect(collectConditions(answerAll(3))).toEqual([]);
  });

  it('merges conditions that imply the same work and cites every trigger', () => {
    const merged = collectConditions(answerAll(0)).filter((c) => c.triggeredBy.length > 1);

    expect(merged.length).toBeGreaterThan(0);
    for (const c of merged) {
      expect(new Set(c.triggeredBy).size).toBe(c.triggeredBy.length);
      expect([...c.triggeredBy].sort()).toEqual(c.triggeredBy);
    }
  });

  it('takes the Not ready action when a merge group mixes severities', () => {
    // core-skilling is shared by the prompting and verification questions.
    const prompting = questions.find((q) => q.id === 'skill-01')!;
    const verification = questions.find((q) => q.id === 'skill-02')!;

    const answers: Answers = { [prompting.id]: 0, [verification.id]: 1 };
    const [condition] = collectConditions(answers);

    expect(condition.severity).toBe(0);
    expect(condition.action).toBe(prompting.conditions[0].action);
    expect(condition.triggeredBy).toEqual([prompting.id, verification.id]);
  });

  it('sorts blockers ahead of later work', () => {
    const all = collectConditions(answerAll(0));
    const firstNonBlocker = all.findIndex((c) => c.timing !== 'before-pilot');

    if (firstNonBlocker !== -1) {
      expect(all.slice(firstNonBlocker).every((c) => c.timing !== 'before-pilot')).toBe(true);
    }
  });
});
