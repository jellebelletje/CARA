import type { Locale } from '../i18n/strings';
import { t } from '../i18n/strings';

const REPO = 'https://github.com/jellebelletje/CARA';

/**
 * The credit is a licence condition, not decoration. Both halves of the
 * project require attribution, so this stays visible in any deployed copy.
 */
export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer
      className="mt-16 border-t pt-6 pb-10 text-xs"
      style={{ borderColor: 'var(--hairline)', color: 'var(--ink-muted)' }}
    >
      <p>
        {t('creditPrefix', locale)}{' '}
        <span style={{ color: 'var(--ink-secondary)' }}>{t('creditAuthor', locale)}</span>. Licensed
        under{' '}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          {t('creditLicence', locale)}
        </a>
        .{' '}
        <a href={REPO} target="_blank" rel="noreferrer" className="underline underline-offset-2">
          {t('viewSource', locale)}
        </a>
        .
      </p>
      <p className="mt-2">
        Not affiliated with or endorsed by Microsoft. Microsoft 365, Copilot, Purview and Viva are
        trademarks of the Microsoft group of companies.
      </p>
    </footer>
  );
}
