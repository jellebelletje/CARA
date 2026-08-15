import type { Answer, Question } from '../data/types';
import { questions as allQuestions } from '../data/assessment';

/** Question id to the level chosen for it. Absent means unanswered. */
export type Answers = Record<string, Answer>;

/**
 * Full form asks every question. Short form asks only the pilot-critical ones.
 *
 * The short form can never miss a no-go, because every question capable of
 * forcing one is in it. It can however miss launch conditions arising from
 * non-critical questions, so a short-form GO is a weaker statement than a
 * full-form GO. It is a triage tool, not a substitute.
 */
export type FormLength = 'full' | 'short';

export const questionsInForm = (form: FormLength): Question[] =>
  form === 'short' ? allQuestions.filter((q) => q.pilotCritical) : allQuestions;
