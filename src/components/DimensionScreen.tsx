import type { Answer, Dimension, Question } from '../data/types';
import type { Answers } from '../lib/forms';
import type { Locale } from '../i18n/strings';
import { t } from '../i18n/strings';
import { dimensionName, dimensionPremise } from '../i18n/questionText';
import QuestionCard from './QuestionCard';

interface Props {
  dimension: Dimension;
  questions: Question[];
  answers: Answers;
  onAnswer: (questionId: string, answer: Answer) => void;
  onBack: () => void;
  onNext: () => void;
  isLast: boolean;
  locale: Locale;
}

export default function DimensionScreen({
  dimension,
  questions,
  answers,
  onAnswer,
  onBack,
  onNext,
  isLast,
  locale,
}: Props) {
  const answered = questions.filter((q) => answers[q.id] !== undefined).length;

  return (
    <div>
      <header className="mb-6">
        <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: 'var(--ink-muted)' }}>
          {t('dimension', locale)} {dimension.number} {t('of', locale)} 6
        </p>
        <h2 className="mt-1 text-2xl font-bold sm:text-3xl" style={{ color: 'var(--ink)' }}>
          {dimensionName(dimension, locale)}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
          {dimensionPremise(dimension, locale)}
        </p>
        <p className="mt-2 text-xs" style={{ color: 'var(--ink-muted)' }}>
          {answered} {t('of', locale)} {questions.length} {t('answered', locale)}
        </p>
      </header>

      <div className="grid gap-4">
        {questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
            total={questions.length}
            answer={answers[question.id]}
            onChange={(answer) => onAnswer(question.id, answer)}
            locale={locale}
          />
        ))}
      </div>

      <nav className="mt-8 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="rounded-lg border px-4 py-2 text-sm font-medium"
          style={{ borderColor: 'var(--border)', color: 'var(--ink-secondary)' }}
        >
          {t('back', locale)}
        </button>
        <button
          type="button"
          onClick={onNext}
          className="rounded-lg px-5 py-2 text-sm font-semibold text-white"
          style={{ background: 'var(--level-3)' }}
        >
          {isLast ? t('seeResults', locale) : t('next', locale)}
        </button>
      </nav>
    </div>
  );
}
