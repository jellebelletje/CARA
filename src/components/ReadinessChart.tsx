import type { Level } from '../data/types';
import { LEVELS } from '../data/types';
import type { AssessmentResult } from '../lib/scoring';
import { dimensionPercent } from '../lib/scoring';
import type { Locale } from '../i18n/strings';
import { levelName, t } from '../i18n/strings';
import { dimensionName } from '../i18n/questionText';

/*
 * Three views of the same answers, each doing a different job.
 *
 * The hero figure is a single headline number, which is what a stat tile is
 * for. It is deliberately subordinate to the verdict: an average is very good
 * at hiding the one fatal gap, so the percentage tracks movement between
 * assessments and never makes the decision.
 *
 * The profile bar is part-to-whole across an ordered scale, so it is a single
 * horizontal stacked bar with a 2px surface gap between segments, not a pie.
 *
 * The per-dimension bars compare magnitude across six long-named categories,
 * which is a horizontal bar chart. Each bar takes its own level's colour, and
 * the level is named in text so colour is never the only carrier.
 */

interface Props {
  result: AssessmentResult;
  locale: Locale;
}

export default function ReadinessChart({ result, locale }: Props) {
  const { readiness } = result;
  const percent = readiness.percent;

  return (
    <section className="print-block">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p
            className="text-xs font-semibold tracking-wide uppercase"
            style={{ color: 'var(--ink-muted)' }}
          >
            {t('readinessScore', locale)}
          </p>
          <p className="mt-1 flex items-baseline gap-2">
            <span
              className="text-6xl leading-none font-bold"
              style={{ color: 'var(--ink)' }}
            >
              {percent === null ? '—' : percent}
            </span>
            <span className="text-2xl font-semibold" style={{ color: 'var(--ink-muted)' }}>
              %
            </span>
          </p>
        </div>
        <p className="max-w-xs text-xs leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
          {t('readinessCaveat', locale)}
        </p>
      </div>

      {/* Distribution of answers across the four levels. */}
      {readiness.answered > 0 && (
        <div className="mt-6">
          <div className="flex h-4 w-full gap-0.5 overflow-hidden rounded-full">
            {LEVELS.map((level: Level) => {
              const count = readiness.distribution[level];
              if (count === 0) return null;
              return (
                <div
                  key={level}
                  className="h-full first:rounded-l-full last:rounded-r-full"
                  style={{
                    width: `${(count / readiness.answered) * 100}%`,
                    background: `var(--level-${level})`,
                  }}
                  title={`${levelName(level, locale)}: ${count}`}
                />
              );
            })}
          </div>

          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {LEVELS.map((level: Level) => (
              <li key={level} className="flex items-center gap-2 text-xs">
                <span
                  aria-hidden="true"
                  className="h-3 w-3 shrink-0 rounded-sm"
                  style={{ background: `var(--level-${level})` }}
                />
                <span style={{ color: 'var(--ink-secondary)' }}>
                  {levelName(level, locale)}
                </span>
                <span className="font-semibold tabular-nums" style={{ color: 'var(--ink)' }}>
                  {readiness.distribution[level]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Per-dimension magnitude. */}
      <div className="mt-8 grid gap-3">
        {result.dimensions.map((d) => {
          const pct = dimensionPercent(d);
          return (
            <div key={d.dimension.id} className="print-block">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-medium" style={{ color: 'var(--ink)' }}>
                  {d.dimension.number}. {dimensionName(d.dimension, locale)}
                </span>
                <span className="flex shrink-0 items-baseline gap-2 text-xs">
                  <span
                    className="font-semibold"
                    style={{
                      color: d.level !== null ? `var(--level-${d.level}-ink)` : 'var(--ink-muted)',
                    }}
                  >
                    {d.level !== null ? levelName(d.level, locale) : '—'}
                  </span>
                  <span className="tabular-nums" style={{ color: 'var(--ink-muted)' }}>
                    {pct === null ? '' : `${pct}%`}
                  </span>
                </span>
              </div>
              <div
                className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full"
                style={{ background: 'var(--hairline)' }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${pct ?? 0}%`,
                    background: d.level !== null ? `var(--level-${d.level})` : 'transparent',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
