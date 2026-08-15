import type { FormLength } from '../lib/forms';
import { questionsInForm } from '../lib/forms';
import type { Locale } from '../i18n/strings';
import { t } from '../i18n/strings';

interface Props {
  form: FormLength;
  onFormChange: (form: FormLength) => void;
  onStart: () => void;
  hasSaved: boolean;
  locale: Locale;
}

const LEVEL_SUMMARY: { level: 0 | 1 | 2 | 3; text: string }[] = [
  { level: 0, text: 'This will break the pilot. Fix it before starting.' },
  { level: 1, text: 'The pilot can start, carrying a named condition.' },
  { level: 2, text: 'The pilot will produce a trustworthy answer.' },
  { level: 3, text: 'This would survive a full rollout, not just a pilot.' },
];

export default function Intro({ form, onFormChange, onStart, hasSaved, locale }: Props) {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold sm:text-4xl" style={{ color: 'var(--ink)' }}>
        {t('appFull', locale)}
      </h1>
      <p className="mt-3 text-lg leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
        {t('tagline', locale)}
      </p>

      <p className="mt-5 leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
        {t('introBody', locale)}
      </p>

      <div
        className="mt-6 rounded-xl border p-5"
        style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
      >
        <ul className="grid gap-3">
          {LEVEL_SUMMARY.map(({ level, text }) => (
            <li key={level} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-1.5 h-3 w-3 shrink-0 rounded-full"
                style={{ background: `var(--level-${level})` }}
              />
              <span className="text-sm leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                <strong style={{ color: 'var(--ink)' }}>
                  {['Not ready', 'Emerging', 'Ready', 'Scalable'][level]}.
                </strong>{' '}
                {text}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
          {t('introPilotPoint', locale)}
        </p>
      </div>

      <fieldset className="mt-8">
        <legend className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
          {t('chooseForm', locale)}
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {(['full', 'short'] as FormLength[]).map((option) => {
            const selected = form === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => onFormChange(option)}
                aria-pressed={selected}
                className="rounded-xl border p-4 text-left"
                style={{
                  borderColor: selected ? 'var(--level-3)' : 'var(--border)',
                  background: selected ? 'var(--level-3-wash)' : 'var(--surface)',
                  boxShadow: selected ? 'inset 0 0 0 1px var(--level-3)' : undefined,
                }}
              >
                <span className="block text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                  {t(option === 'full' ? 'fullForm' : 'shortForm', locale)}
                </span>
                <span className="mt-1 block text-xs" style={{ color: 'var(--ink-muted)' }}>
                  {questionsInForm(option).length} questions
                </span>
                <span
                  className="mt-2 block text-sm leading-relaxed"
                  style={{ color: 'var(--ink-secondary)' }}
                >
                  {t(option === 'full' ? 'fullFormDetail' : 'shortFormDetail', locale)}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <button
        type="button"
        onClick={onStart}
        className="mt-6 w-full rounded-lg px-5 py-3 text-base font-semibold text-white"
        style={{ background: 'var(--level-3)' }}
      >
        {hasSaved ? t('resume', locale) : t('start', locale)}
      </button>

      <div className="mt-8 grid gap-4 text-sm leading-relaxed">
        <p
          className="rounded-lg border p-4"
          style={{ borderColor: 'var(--border)', color: 'var(--ink-secondary)' }}
        >
          {t('introPrivacy', locale)}
        </p>
        <p style={{ color: 'var(--ink-muted)' }}>{t('introNotTechnical', locale)}</p>
      </div>
    </div>
  );
}
