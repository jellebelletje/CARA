import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Answer } from './data/types';
import { dimensions } from './data/assessment';
import type { Answers, FormLength } from './lib/forms';
import { questionsInForm } from './lib/forms';
import { assess } from './lib/scoring';
import { decodeState, encodeState, shareUrl } from './lib/shareState';
import type { Locale } from './i18n/strings';
import { DEFAULT_LOCALE, t } from './i18n/strings';
import Intro from './components/Intro';
import DimensionScreen from './components/DimensionScreen';
import Results from './components/Results';
import Footer from './components/Footer';

const STORAGE_KEY = 'cara.session.v1';
const THEME_KEY = 'cara.theme.v1';

type Theme = 'light' | 'dark';

function loadTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // Ignore and fall through to the default.
  }
  // Light by default rather than following the operating system. This gets
  // shown on projectors and printed, and light is the safer of the two there.
  return 'light';
}

type Step = 'intro' | number | 'results';

interface Persisted {
  answers: Answers;
  form: FormLength;
  locale: Locale;
}

function loadInitial(): Persisted & { fromLink: boolean } {
  const fromHash = window.location.hash ? decodeState(window.location.hash) : null;
  if (fromHash) {
    // A link only jumps straight to the results if it actually carries answers.
    // An empty one is just the address bar keeping itself in step, and landing
    // someone on a verdict of "Incomplete" is a poor way to open.
    const hasAnswers = Object.keys(fromHash.answers).length > 0;
    return { ...fromHash, fromLink: hasAnswers };
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Persisted;
      return { ...parsed, fromLink: false };
    }
  } catch {
    // A corrupt saved session is not worth crashing over. Start clean.
  }

  return { answers: {}, form: 'full', locale: DEFAULT_LOCALE, fromLink: false };
}

export default function App() {
  const initial = useMemo(loadInitial, []);

  const [answers, setAnswers] = useState<Answers>(initial.answers);
  const [form, setForm] = useState<FormLength>(initial.form);
  const [locale] = useState<Locale>(initial.locale);
  const [step, setStep] = useState<Step>(initial.fromLink ? 'results' : 'intro');
  const [theme, setTheme] = useState<Theme>(loadTheme);

  const session = useMemo(() => ({ answers, form, locale }), [answers, form, locale]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Not worth failing over. The theme still applies for this session.
    }
  }, [theme]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    } catch {
      // Private browsing and full quotas both land here. The session still
      // works in memory and through the share link, so this is not fatal.
    }
    // Keep the address bar in step, so the link is always shareable as-is.
    window.history.replaceState(null, '', `#${encodeState(session)}`);
  }, [session]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [step]);

  const onAnswer = useCallback((questionId: string, answer: Answer) => {
    setAnswers((current) => ({ ...current, [questionId]: answer }));
  }, []);

  const startOver = useCallback(() => {
    setAnswers({});
    setStep('intro');
  }, []);

  const inScope = questionsInForm(form);
  const answeredCount = inScope.filter((q) => answers[q.id] !== undefined).length;
  const progress = inScope.length === 0 ? 0 : (answeredCount / inScope.length) * 100;

  return (
    <div className="min-h-screen">
      <header
        className="no-print sticky top-0 z-10 border-b backdrop-blur"
        style={{ borderColor: 'var(--hairline)', background: 'color-mix(in srgb, var(--page) 88%, transparent)' }}
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3">
          <button
            type="button"
            onClick={() => setStep('intro')}
            className="text-2xl leading-none font-extrabold tracking-tight sm:text-3xl"
            style={{ color: 'var(--ink)' }}
          >
            {t('appName', locale)}
          </button>
          <div className="flex items-center gap-4">
            {step !== 'intro' && (
              <span className="flex items-center gap-2 text-xs" style={{ color: 'var(--ink-secondary)' }}>
                {answeredCount}/{inScope.length}
                <span
                  aria-hidden="true"
                  className="h-1.5 w-24 overflow-hidden rounded-full"
                  style={{ background: 'var(--hairline)' }}
                >
                  <span
                    className="block h-full rounded-full transition-[width]"
                    style={{ width: `${progress}%`, background: 'var(--level-3)' }}
                  />
                </span>
              </span>
            )}

            <button
              type="button"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className="rounded-lg border px-2.5 py-1.5 text-xs font-medium"
              style={{ borderColor: 'var(--border)', color: 'var(--ink-secondary)' }}
            >
              {theme === 'light' ? '◑ Dark' : '◐ Light'}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
        {step === 'intro' && (
          <Intro
            form={form}
            onFormChange={setForm}
            onStart={() => setStep(0)}
            hasSaved={answeredCount > 0}
            locale={locale}
          />
        )}

        {typeof step === 'number' && (
          <DimensionScreen
            dimension={dimensions[step]}
            questions={inScope.filter((q) => q.dimension === dimensions[step].id)}
            answers={answers}
            onAnswer={onAnswer}
            onBack={() => setStep(step === 0 ? 'intro' : step - 1)}
            onNext={() => setStep(step === dimensions.length - 1 ? 'results' : step + 1)}
            isLast={step === dimensions.length - 1}
            locale={locale}
          />
        )}

        {step === 'results' && (
          <Results
            result={assess(answers, form)}
            shareLink={shareUrl(session)}
            onEdit={() => setStep(0)}
            onStartOver={startOver}
            locale={locale}
          />
        )}

        <Footer locale={locale} />
      </main>
    </div>
  );
}
