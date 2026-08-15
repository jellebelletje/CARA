import { useState } from 'react';
import type { Level } from '../data/types';
import type { AssessmentResult } from '../lib/scoring';
import type { ResolvedCondition } from '../lib/conditions';
import { groupByOwner, groupByTiming, OWNERS, TIMINGS } from '../lib/conditions';
import type { Locale } from '../i18n/strings';
import { levelName, ownerName, t, timingName, verdictBlurb, verdictName } from '../i18n/strings';

interface Props {
  result: AssessmentResult;
  shareLink: string;
  onEdit: () => void;
  onStartOver: () => void;
  locale: Locale;
}

const VERDICT_LEVEL: Record<string, Level> = {
  incomplete: 1,
  'no-go': 0,
  'go-with-conditions': 1,
  go: 2,
  'scale-ready': 3,
};

/*
 * Six ordinal states are a status encoding, not a magnitude one, so this is
 * deliberately not a radar chart: radar distorts area and its axis order is
 * arbitrary. Each dimension gets a four-step track with the level named in
 * text beside it, so the reading survives colour vision deficiency, a
 * projector and a black and white printout.
 */
function DimensionRow({ name, level, locale }: { name: string; level: Level | null; locale: Locale }) {
  return (
    <div className="print-block flex flex-wrap items-center gap-x-3 gap-y-2 py-3">
      {/* Full width on narrow screens: inline, the long dimension names collide
          with the track and wrap into an unreadable column. */}
      <span
        className="w-full min-w-0 text-sm font-medium sm:w-auto sm:flex-1"
        style={{ color: 'var(--ink)' }}
      >
        {name}
      </span>

      <span aria-hidden="true" className="flex gap-1">
        {([0, 1, 2, 3] as Level[]).map((step) => (
          <span
            key={step}
            className="h-2 w-8 rounded-full"
            style={{
              background:
                level !== null && step <= level ? `var(--level-${level})` : 'var(--hairline)',
            }}
          />
        ))}
      </span>

      <span
        className="w-28 shrink-0 rounded-full px-2.5 py-1 text-center text-xs font-semibold"
        style={{
          background: level !== null ? `var(--level-${level}-wash)` : 'transparent',
          color: level !== null ? `var(--level-${level})` : 'var(--ink-muted)',
        }}
      >
        {level !== null ? levelName(level, locale) : '—'}
      </span>
    </div>
  );
}

function ConditionItem({ condition, locale }: { condition: ResolvedCondition; locale: Locale }) {
  return (
    <li
      className="print-block rounded-lg border p-4"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--surface)',
        borderLeftWidth: 3,
        borderLeftColor: `var(--level-${condition.severity})`,
      }}
    >
      <p className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
        {condition.action}
      </p>
      <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs" style={{ color: 'var(--ink-muted)' }}>
        <span className="font-medium">{ownerName(condition.owner, locale)}</span>
        <span>{timingName(condition.timing, locale)}</span>
        <span>
          {t('triggeredBy', locale)} {condition.triggeredBy.join(', ')}
        </span>
      </p>
    </li>
  );
}

export default function Results({ result, shareLink, onEdit, onStartOver, locale }: Props) {
  const [grouping, setGrouping] = useState<'timing' | 'owner'>('timing');
  const [copied, setCopied] = useState(false);

  const verdictLevel = VERDICT_LEVEL[result.verdict];
  const unanswered = result.dimensions.reduce((n, d) => n + d.unansweredIds.length, 0);
  const unknownCritical = result.dimensions.flatMap((d) => d.unknownCriticalIds);

  const byTiming = groupByTiming(result.conditions);
  const byOwner = groupByOwner(result.conditions);

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailto = `mailto:?subject=${encodeURIComponent(t('emailSubject', locale))}&body=${encodeURIComponent(
    `${verdictName(result.verdict, locale)}\n\n${verdictBlurb(result.verdict, locale)}\n\n${shareLink}`,
  )}`;

  return (
    <div>
      <section
        className="print-block rounded-xl border p-6"
        style={{
          borderColor: `var(--level-${verdictLevel})`,
          background: `var(--level-${verdictLevel}-wash)`,
        }}
      >
        <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: 'var(--ink-secondary)' }}>
          {t('yourVerdict', locale)}
        </p>
        <h2 className="mt-1 text-3xl font-bold" style={{ color: `var(--level-${verdictLevel})` }}>
          {verdictName(result.verdict, locale)}
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
          {verdictBlurb(result.verdict, locale)}
        </p>
      </section>

      {unanswered > 0 && (
        <p className="mt-4 text-sm" style={{ color: 'var(--ink-muted)' }}>
          {t('unansweredWarning', locale)}
        </p>
      )}
      {unknownCritical.length > 0 && (
        <p className="mt-2 text-sm" style={{ color: 'var(--ink-muted)' }}>
          {t('unknownCriticalWarning', locale)} {unknownCritical.join(', ')}
        </p>
      )}

      <section className="mt-8">
        <h3 className="text-lg font-semibold" style={{ color: 'var(--ink)' }}>
          {t('dimensionScores', locale)}
        </h3>
        <div className="mt-2 divide-y" style={{ borderColor: 'var(--hairline)' }}>
          {result.dimensions.map((d) => (
            <DimensionRow
              key={d.dimension.id}
              name={`${d.dimension.number}. ${d.dimension.name}`}
              level={d.level}
              locale={locale}
            />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-semibold" style={{ color: 'var(--ink)' }}>
            {t('launchConditions', locale)}{' '}
            <span className="font-normal" style={{ color: 'var(--ink-muted)' }}>
              ({result.conditions.length})
            </span>
          </h3>

          {result.conditions.length > 0 && (
            <div className="no-print flex gap-1 rounded-lg border p-1" style={{ borderColor: 'var(--border)' }}>
              {(['timing', 'owner'] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setGrouping(mode)}
                  className="rounded px-3 py-1 text-xs font-medium"
                  style={{
                    background: grouping === mode ? 'var(--level-3-wash)' : 'transparent',
                    color: grouping === mode ? 'var(--level-3)' : 'var(--ink-secondary)',
                  }}
                >
                  {t(mode === 'timing' ? 'groupByTiming' : 'groupByOwner', locale)}
                </button>
              ))}
            </div>
          )}
        </div>

        {result.conditions.length === 0 ? (
          <p className="mt-3 text-sm" style={{ color: 'var(--ink-secondary)' }}>
            {t('noConditions', locale)}
          </p>
        ) : (
          <div className="mt-4 grid gap-6">
            {grouping === 'timing'
              ? TIMINGS.filter((ti) => byTiming[ti].length > 0).map((ti) => (
                  <div key={ti}>
                    <h4 className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                      {timingName(ti, locale)}{' '}
                      <span className="font-normal" style={{ color: 'var(--ink-muted)' }}>
                        ({byTiming[ti].length})
                      </span>
                    </h4>
                    <ul className="mt-2 grid gap-2">
                      {byTiming[ti].map((c) => (
                        <ConditionItem key={c.mergeKey} condition={c} locale={locale} />
                      ))}
                    </ul>
                  </div>
                ))
              : OWNERS.filter((o) => byOwner[o].length > 0).map((o) => (
                  <div key={o}>
                    <h4 className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                      {ownerName(o, locale)}{' '}
                      <span className="font-normal" style={{ color: 'var(--ink-muted)' }}>
                        ({byOwner[o].length})
                      </span>
                    </h4>
                    <ul className="mt-2 grid gap-2">
                      {byOwner[o].map((c) => (
                        <ConditionItem key={c.mergeKey} condition={c} locale={locale} />
                      ))}
                    </ul>
                  </div>
                ))}
          </div>
        )}
      </section>

      <div className="no-print mt-10 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-lg px-4 py-2 text-sm font-semibold text-white"
          style={{ background: 'var(--level-3)' }}
        >
          {t('downloadPdf', locale)}
        </button>
        <a
          href={mailto}
          className="rounded-lg border px-4 py-2 text-sm font-medium"
          style={{ borderColor: 'var(--border)', color: 'var(--ink)' }}
        >
          {t('emailToMe', locale)}
        </a>
        <button
          type="button"
          onClick={copyLink}
          className="rounded-lg border px-4 py-2 text-sm font-medium"
          style={{ borderColor: 'var(--border)', color: 'var(--ink)' }}
        >
          {copied ? t('linkCopied', locale) : t('copyLink', locale)}
        </button>
        <button
          type="button"
          onClick={onEdit}
          className="rounded-lg border px-4 py-2 text-sm font-medium"
          style={{ borderColor: 'var(--border)', color: 'var(--ink-secondary)' }}
        >
          {t('editAnswers', locale)}
        </button>
        <button
          type="button"
          onClick={onStartOver}
          className="rounded-lg px-4 py-2 text-sm font-medium"
          style={{ color: 'var(--ink-muted)' }}
        >
          {t('startOver', locale)}
        </button>
      </div>
    </div>
  );
}
