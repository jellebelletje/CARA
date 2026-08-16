import type { AssessmentResult } from '../lib/scoring';
import { dimensionPercent } from '../lib/scoring';
import { blockers } from '../lib/conditions';
import type { Locale } from './strings';
import { levelName, ownerName, t, verdictBlurb, verdictName } from './strings';
import { conditionAction, dimensionName } from './questionText';

/**
 * Outlook is the strictest target at roughly 2000 characters for a whole mailto
 * URL, and anything over it is silently truncated or refused.
 *
 * The budget is measured on the ENCODED url, not the readable text:
 * percent-encoding turns every space into %20 and every newline into %0A, so a
 * 1600 character body easily becomes a 2100 character link.
 */
const MAX_URL = 1900;

/** The report as lines, most important first, so trimming takes from the end. */
function reportLines(result: AssessmentResult, locale: Locale): string[] {
  const lines: string[] = [
    t('appFull', locale).toUpperCase(),
    '',
    `${t('yourVerdict', locale)}: ${verdictName(result.verdict, locale)}`,
    verdictBlurb(result.verdict, locale),
    '',
  ];

  if (result.readiness.percent !== null) {
    lines.push(`${t('readinessScore', locale)}: ${result.readiness.percent}%`, '');
  }

  lines.push(`${t('dimensionScores', locale)}:`);
  for (const d of result.dimensions) {
    const pct = dimensionPercent(d);
    const level = d.level !== null ? levelName(d.level, locale) : '-';
    lines.push(
      `  ${d.dimension.number}. ${dimensionName(d.dimension, locale)}: ${level}${
        pct === null ? '' : ` (${pct}%)`
      }`,
    );
  }

  const mustClose = blockers(result.conditions);
  if (mustClose.length > 0) {
    lines.push('', `${t('launchConditions', locale)} (${mustClose.length}):`);
    for (const c of mustClose) {
      lines.push(`  - ${conditionAction(c, locale)} [${ownerName(c.owner, locale)}]`);
    }
  }

  return lines;
}

/** The whole report, untrimmed. Used for copying, where no limit applies. */
export const buildReportText = (
  result: AssessmentResult,
  shareLink: string,
  locale: Locale,
): string => [...reportLines(result, locale), '', shareLink].join('\n');

/**
 * Trimmed to fit a URL. Launch conditions are dropped from the end until it
 * fits; the verdict, the dimension scores and the link are never sacrificed,
 * because those are what make the mail worth opening on a phone.
 */
function fittedBody(result: AssessmentResult, shareLink: string, locale: Locale, budget: number) {
  const body = reportLines(result, locale);
  const assemble = () => [...body, '', shareLink].join('\n');

  while (encodeURIComponent(assemble()).length > budget) {
    const lastCondition = body.map((l) => l.startsWith('  - ')).lastIndexOf(true);
    if (lastCondition === -1) break;
    body.splice(lastCondition, 1);
  }

  return assemble();
}

export function buildMailto(
  result: AssessmentResult,
  shareLink: string,
  locale: Locale,
): string {
  const subject = encodeURIComponent(t('emailSubject', locale));
  const budget = MAX_URL - `mailto:?subject=${subject}&body=`.length;
  return `mailto:?subject=${subject}&body=${encodeURIComponent(
    fittedBody(result, shareLink, locale, budget),
  )}`;
}

/**
 * Webmail compose links, which work in any browser without the operating system
 * having a mail handler registered. That is the common case for anyone who
 * reads their mail in a browser tab, and it is why a bare mailto silently does
 * nothing for them.
 */
export function buildGmailUrl(
  result: AssessmentResult,
  shareLink: string,
  locale: Locale,
): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent(
    t('emailSubject', locale),
  )}&body=${encodeURIComponent(fittedBody(result, shareLink, locale, 4000))}`;
}

export function buildOutlookUrl(
  result: AssessmentResult,
  shareLink: string,
  locale: Locale,
): string {
  return `https://outlook.office.com/mail/deeplink/compose?subject=${encodeURIComponent(
    t('emailSubject', locale),
  )}&body=${encodeURIComponent(fittedBody(result, shareLink, locale, 4000))}`;
}
