import type { Answer, Question } from '../data/types';
import type { Locale } from '../i18n/strings';
import { t } from '../i18n/strings';
import LevelPicker from './LevelPicker';
import { imageSrcSet, imageUrl, questionImages } from '../data/questionImages';
import { questionText, questionWhy } from '../i18n/questionText';

interface Props {
  question: Question;
  index: number;
  total: number;
  answer: Answer | undefined;
  onChange: (answer: Answer) => void;
  locale: Locale;
}

export default function QuestionCard({
  question,
  index,
  total,
  answer,
  onChange,
  locale,
}: Props) {
  const image = questionImages[question.id];

  return (
    <article
      id={question.id}
      className="overflow-hidden rounded-xl border"
      style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
    >
      {image && (
        /* Decorative. It comments on the question and gives the page rhythm,
           but carries nothing the text does not, so it is hidden from screen
           readers rather than described. */
        <img
          src={imageUrl(image)}
          srcSet={imageSrcSet(image)}
          sizes="(min-width: 768px) 720px, 100vw"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="no-print h-28 w-full object-cover sm:h-32"
          style={{ background: 'var(--hairline)' }}
        />
      )}

      <div className="p-5 sm:p-6">
        <header>
          <div className="flex flex-wrap items-center gap-2 text-xs">
          <span style={{ color: 'var(--ink-muted)' }}>
            {t('question', locale)} {index + 1} {t('of', locale)} {total}
          </span>
          {question.pilotCritical && (
            <span
              className="rounded-full px-2 py-0.5 font-semibold"
              style={{ background: 'var(--level-0-wash)', color: 'var(--level-0-ink)' }}
              title={t('pilotCriticalHint', locale)}
            >
              {t('pilotCritical', locale)}
            </span>
          )}
        </div>

        <h3 className="mt-2 text-base font-semibold sm:text-lg" style={{ color: 'var(--ink)' }}>
          {questionText(question, locale)}
        </h3>

        <p
          className="mt-2 border-l-2 pl-3 text-sm leading-relaxed"
          style={{ borderColor: 'var(--hairline)', color: 'var(--ink-secondary)' }}
        >
          <span className="font-medium">{t('whyItMatters', locale)}. </span>
          {questionWhy(question, locale)}
        </p>
        </header>

        <LevelPicker question={question} answer={answer} onChange={onChange} locale={locale} />

        {question.source && (
          <p className="mt-3 text-xs" style={{ color: 'var(--ink-muted)' }}>
            {t('source', locale)}:{' '}
            <a
              href={question.source.url}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
              style={{ color: 'var(--level-3-ink)' }}
            >
              {question.source.label}
            </a>
          </p>
        )}
      </div>
    </article>
  );
}
