import { describe, expect, it } from 'vitest';
import { dimensions, questions } from '../../data/assessment';
import { LEVELS } from '../../data/types';
import { nlDimensions, nlQuestions } from '../nl';
import { microsoftStack } from '../../data/microsoftStack';
import { nlStack } from '../nl/stack';

/*
 * The overlay design means an untranslated string silently falls back to
 * English. That is the right runtime behaviour, but it also means a gap is
 * invisible unless something checks for it. This is that check.
 */
describe('Dutch coverage', () => {
  it('translates every question, hint, anchor and launch condition', () => {
    const missing: string[] = [];

    for (const q of questions) {
      const nl = nlQuestions[q.id];
      if (!nl) {
        missing.push(`${q.id}: no Dutch at all`);
        continue;
      }
      if (!nl.text?.trim()) missing.push(`${q.id}: text`);
      if (!nl.why?.trim()) missing.push(`${q.id}: why`);
      for (const level of LEVELS) {
        if (!nl.anchors?.[level]?.trim()) missing.push(`${q.id}: anchor ${level}`);
      }
      for (const level of [0, 1] as const) {
        if (!nl.conditions?.[level]?.trim()) missing.push(`${q.id}: condition ${level}`);
      }
    }

    expect(missing, `Untranslated:\n${missing.join('\n')}`).toEqual([]);
  });

  it('translates every dimension name and premise', () => {
    for (const d of dimensions) {
      expect(nlDimensions[d.id]?.name?.trim(), `${d.id} name`).toBeTruthy();
      expect(nlDimensions[d.id]?.premise?.trim(), `${d.id} premise`).toBeTruthy();
    }
  });

  it('translates every stage question in the Microsoft panel', () => {
    for (const stage of microsoftStack) {
      expect(nlStack[stage.number]?.question?.trim(), `stage ${stage.number}`).toBeTruthy();
    }
  });

  it('keeps Dutch free of em-dashes, same house style as English', () => {
    const offenders = Object.entries(nlQuestions)
      .filter(([, v]) =>
        JSON.stringify(v).includes('—'),
      )
      .map(([id]) => id);

    expect(offenders).toEqual([]);
  });

  it('does not leave English text sitting in a Dutch field', () => {
    // A cheap tell: these are common English function words that should not
    // survive a real Dutch rewrite of a whole sentence.
    const tells = /\b(the|whether|should|before|which)\b/i;
    const suspects = Object.entries(nlQuestions)
      .filter(([, v]) => tells.test(v.text ?? '') || tells.test(v.why ?? ''))
      .map(([id]) => id);

    expect(suspects).toEqual([]);
  });
});
