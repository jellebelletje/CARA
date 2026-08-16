import type { AssessmentResult } from '../lib/scoring';
import { dimensionPercent } from '../lib/scoring';
import { blockers } from '../lib/conditions';
import type { Locale } from './strings';
import { levelName, ownerName, t, verdictBlurb, verdictName } from './strings';
import { conditionAction, dimensionName } from './questionText';

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
