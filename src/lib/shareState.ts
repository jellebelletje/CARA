import type { Answer } from '../data/types';
import { questions } from '../data/assessment';
import type { Answers, FormLength } from './forms';
import type { Locale } from '../i18n/strings';

/**
 * Session state travels in the URL hash so a filled-in assessment can be sent
 * to a colleague with no server involved. Nothing is uploaded, and the link is
 * the data.
 *
 * Encoding is positional against the question bank rather than a map of ids,
 * which keeps a 47 question session down to about 60 characters:
 *
 *   v1.<form><locale>.<one character per question, in bank order>
 *
 * where each character is 0-3 for a level, u for "don't know yet", and - for
 * unanswered. The version prefix and a length check mean that a link made
 * before the bank changed is rejected rather than silently misread, which
 * would otherwise attribute someone's answers to the wrong questions.
 */
const VERSION = 'v1';
const UNKNOWN = 'u';
const UNANSWERED = '-';

const FORM_CODES: Record<FormLength, string> = { full: 'f', short: 's' };
const LOCALE_CODES: Record<Locale, string> = { en: 'e', nl: 'n' };

export interface SessionState {
  answers: Answers;
  form: FormLength;
  locale: Locale;
}

export function encodeState({ answers, form, locale }: SessionState): string {
  const body = questions
    .map((q) => {
      const answer = answers[q.id];
      if (answer === undefined) return UNANSWERED;
      if (answer === 'unknown') return UNKNOWN;
      return String(answer);
    })
    .join('');

  return `${VERSION}.${FORM_CODES[form]}${LOCALE_CODES[locale]}.${body}`;
}

export function decodeState(raw: string): SessionState | null {
  const hash = raw.replace(/^#/, '');
  const parts = hash.split('.');
  if (parts.length !== 3) return null;

  const [version, flags, body] = parts;
  if (version !== VERSION) return null;
  if (flags.length !== 2) return null;

  // A stale link against a changed bank would misalign every answer.
  if (body.length !== questions.length) return null;

  const form: FormLength = flags[0] === 's' ? 'short' : 'full';
  const locale: Locale = flags[1] === 'n' ? 'nl' : 'en';

  const answers: Answers = {};
  for (const [index, question] of questions.entries()) {
    const char = body[index];
    if (char === UNANSWERED) continue;
    if (char === UNKNOWN) {
      answers[question.id] = 'unknown';
      continue;
    }
    const level = Number(char);
    if (!Number.isInteger(level) || level < 0 || level > 3) return null;
    answers[question.id] = level as Answer;
  }

  return { answers, form, locale };
}

export const shareUrl = (state: SessionState): string =>
  `${window.location.origin}${window.location.pathname}#${encodeState(state)}`;
