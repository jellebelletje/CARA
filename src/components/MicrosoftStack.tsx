import { microsoftStack } from '../data/microsoftStack';
import type { Locale } from '../i18n/strings';
import { t } from '../i18n/strings';

/**
 * Shown on the intro screen, not tucked away in the README. Someone about to
 * run a readiness conversation needs to see, before they start, that CARA is
 * one stage of four and which instruments cover the other three.
 */
export default function MicrosoftStack({ locale }: { locale: Locale }) {
  return (
    <section
      className="rounded-xl border p-5"
      style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
    >
      <h2 className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
        {t('runAlongside', locale)}
      </h2>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
        {t('runAlongsideBody', locale)}
      </p>

      <ol className="mt-5 grid gap-4">
        {microsoftStack.map((stage) => (
          <li
            key={stage.number}
            className="rounded-lg border p-4"
            style={{
              borderColor: stage.isCara ? 'var(--level-3)' : 'var(--hairline)',
              background: stage.isCara ? 'var(--level-3-wash)' : 'transparent',
            }}
          >
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-xs font-semibold" style={{ color: 'var(--ink-muted)' }}>
                {t('stage', locale)} {stage.number}
              </span>
              <h3 className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                {stage.question}
              </h3>
              {stage.isCara && (
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-bold"
                  style={{ background: 'var(--level-3)', color: '#ffffff' }}
                >
                  {t('appName', locale)}
                </span>
              )}
            </div>

            <ul className="mt-3 grid gap-2.5">
              {stage.links.map((link) => (
                <li key={link.url} className="text-sm leading-relaxed">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline underline-offset-2"
                    style={{ color: 'var(--level-3-ink)' }}
                  >
                    {link.label}
                  </a>
                  {link.detail && (
                    <span style={{ color: 'var(--ink-secondary)' }}> {link.detail}</span>
                  )}
                  {link.where && (
                    <span className="block text-xs" style={{ color: 'var(--ink-muted)' }}>
                      {link.where}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
