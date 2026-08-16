import type { AssessmentResult } from '../lib/scoring';
import { dimensionPercent } from '../lib/scoring';
import { blockers } from '../lib/conditions';
import type { Locale } from './strings';
import { levelName, ownerName, t, verdictBlurb, verdictName } from './strings';
import { conditionAction, dimensionName } from './questionText';

/**
 * Outlook is the strictest mail client at roughly 2000 characters for the whole
 * mailto URL, and anything over it is silently truncated or refused outright.
 *
 * The budget has to be measured on the ENCODED url, not the readable text:
 * percent-encoding turns every space into %20 and every newline into %0A, so a
 * 1600 character body can easily become a 2100 character link.
 */
const MAX_URL = 1900;

/** The report as lines, most important first, so trimming takes from the end. */
function reportLines(result: AssessmentResult, locale: Locale): string[] {
  const head: string[] = [
    t('appFull', locale).toUpperCase(),
    '',
    `${t('yourVerdict', locale)}: ${verdictName(result.verdict, locale)}`,
    verdictBlurb(result.verdict, locale),
    '',
  ];

  if (result.readiness.percent !== null) {
    head.push(`${t('readinessScore', locale)}: ${result.readiness.percent}%`, '');
  }

  head.push(`${t('dimensionScores', locale)}:`);
  for (const d of result.dimensions) {
    const pct = dimensionPercent(d);
    const level = d.level !== null ? levelName(d.level, locale) : '-';
    head.push(
      `  ${d.dimension.number}. ${dimensionName(d.dimension, locale)}: ${level}${
        pct === null ? '' : ` (${pct}%)`
      }`,
    );
  }

  const mustClose = blockers(result.conditions);
  if (mustClose.length > 0) {
    head.push('', `${t('launchConditions', locale)} (${mustClose.length}):`);
    for (const c of mustClose) {
      head.push(`  - ${conditionAction(c, locale)} [${ownerName(c.owner, locale)}]`);
    }
  }

  return head;
}

export function buildMailto(
  result: AssessmentResult,
  shareLink: string,
  locale: Locale,
): string {
  const subject = encodeURIComponent(t('emailSubject', locale));
  const lines = reportLines(result, locale);

  const urlFor = (body: string[]) =>
    `mailto:?subject=${subject}&body=${encodeURIComponent([...body, '', shareLink].join('\n'))}`;

  // Drop launch conditions from the end until it fits. The verdict, the
  // dimension scores and the link are never sacrificed, because those are what
  // make the email worth opening on a phone.
  const body = [...lines];
  while (urlFor(body).length > MAX_URL) {
    const lastCondition = body.map((l) => l.startsWith('  - ')).lastIndexOf(true);
    if (lastCondition === -1) break;
    body.splice(lastCondition, 1);
  }

  return urlFor(body);
}
