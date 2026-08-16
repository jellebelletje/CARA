import { describe, expect, it } from 'vitest';
import { buildMailto } from '../emailReport';
import { assess } from '../../lib/scoring';
import type { Answers } from '../../lib/forms';
import { questions } from '../../data/assessment';
import { LOCALES } from '../strings';

const answerAll = (level: 0 | 1 | 2 | 3): Answers =>
  Object.fromEntries(questions.map((q) => [q.id, level]));

const LINK = 'https://jellebelletje.github.io/CARA/#v1.fe.0000000000000000000000000000000000000000000000';

describe('buildMailto', () => {
  it('stays inside the mailto length every client accepts, in both languages', () => {
    // The worst case is every question Not ready, which raises every condition.
    for (const locale of LOCALES) {
      const url = buildMailto(assess(answerAll(0)), LINK, locale);
      expect(url.length, `${locale} mailto is ${url.length} chars`).toBeLessThanOrEqual(1900);
    }
  });

  it('never sacrifices the verdict, the scores or the link when trimming', () => {
    const url = buildMailto(assess(answerAll(0)), LINK, 'en');
    const body = decodeURIComponent(url.split('&body=')[1]);

    expect(body).toContain('Verdict:');
    expect(body).toContain('Dimensions:');
    expect(body).toContain('1. Leadership');
    expect(body.trimEnd().endsWith(LINK)).toBe(true);
  });

  it('carries the launch conditions when they fit', () => {
    // One red question produces one condition, which comfortably fits.
    const answers = answerAll(3);
    answers[questions[0].id] = 0;
    const body = decodeURIComponent(buildMailto(assess(answers), LINK, 'en').split('&body=')[1]);

    expect(body).toContain('Launch conditions');
    expect(body).toMatch(/ {2}- .+\[/);
  });

  it('produces a Dutch email for a Dutch session', () => {
    const body = decodeURIComponent(buildMailto(assess(answerAll(2)), LINK, 'nl').split('&body=')[1]);
    expect(body).toContain('Oordeel:');
    expect(body).toContain('Dimensies:');
  });
});
