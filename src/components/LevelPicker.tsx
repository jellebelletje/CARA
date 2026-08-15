import type { Answer, Level, Question } from '../data/types';
import { LEVELS } from '../data/types';
import type { Locale } from '../i18n/strings';
import { levelName, t } from '../i18n/strings';

interface Props {
  question: Question;
  answer: Answer | undefined;
  onChange: (answer: Answer) => void;
  locale: Locale;
}

/*
 * The four anchors are always visible, never behind a tooltip. In a live
 * facilitated conversation nobody hovers, and the anchors are the conversation:
 * they turn "how ready do you feel" into "which of these four is true of you".
 *
 * Every option carries its level name in ink-coloured text. Colour reinforces
 * the choice and never carries it alone, which is what makes the set legible
 * under colour vision deficiency, on a projector and in print.
 */
export default function LevelPicker({ question, answer, onChange, locale }: Props) {
  return (
    <div role="radiogroup" aria-label={question.text} className="mt-4 grid gap-2">
      {LEVELS.map((level: Level) => {
        const selected = answer === level;
        return (
          <button
            key={level}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(level)}
            className="group flex w-full items-start gap-3 rounded-lg border p-3 text-left transition-colors"
            style={{
              borderColor: selected ? `var(--level-${level})` : 'var(--border)',
              background: selected ? `var(--level-${level}-wash)` : 'var(--surface-raised)',
              boxShadow: selected ? `inset 0 0 0 1px var(--level-${level})` : undefined,
            }}
          >
            <span
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 rounded-full border-2"
              style={{
                borderColor: `var(--level-${level})`,
                background: selected ? `var(--level-${level})` : 'transparent',
              }}
            />
            <span className="min-w-0">
              <span
                className="block text-sm font-semibold"
                style={{ color: selected ? `var(--level-${level}-ink)` : 'var(--ink-secondary)' }}
              >
                {levelName(level, locale)}
              </span>
              <span
                className="mt-0.5 block text-sm leading-relaxed"
                style={{ color: 'var(--ink-secondary)' }}
              >
                {question.anchors[level]}
              </span>
            </span>
          </button>
        );
      })}

      <button
        type="button"
        role="radio"
        aria-checked={answer === 'unknown'}
        onClick={() => onChange('unknown')}
        className="mt-1 flex w-full items-center gap-3 rounded-lg border border-dashed p-3 text-left"
        style={{
          borderColor: answer === 'unknown' ? 'var(--ink-secondary)' : 'var(--border)',
          background: answer === 'unknown' ? 'var(--surface)' : 'transparent',
        }}
      >
        <span
          aria-hidden="true"
          className="h-4 w-4 shrink-0 rounded-full border-2 border-dashed"
          style={{
            borderColor: 'var(--ink-muted)',
            background: answer === 'unknown' ? 'var(--ink-muted)' : 'transparent',
          }}
        />
        <span>
          <span className="block text-sm font-semibold" style={{ color: 'var(--ink-secondary)' }}>
            {t('unknown', locale)}
          </span>
          <span className="block text-xs" style={{ color: 'var(--ink-muted)' }}>
            {t('unknownHint', locale)}
          </span>
        </span>
      </button>
    </div>
  );
}
