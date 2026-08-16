import { useState } from 'react';
import type { AssessmentResult } from '../lib/scoring';
import type { Locale } from '../i18n/strings';
import { t } from '../i18n/strings';
import {
  buildGmailUrl,
  buildMailto,
  buildOutlookUrl,
  buildReportText,
} from '../i18n/emailReport';

/*
 * A plain mailto link does nothing at all for anyone who reads their mail in a
 * browser tab, because their machine has no handler registered for the
 * protocol. There is no way to detect that from script: the click succeeds and
 * simply nothing happens, which looks like a broken button.
 *
 * So instead of guessing, this offers the routes side by side. Gmail and
 * Outlook on the web need no handler at all, the mail app route is there for
 * people who do have one, and copying the text works even with no mail account
 * on the machine.
 */
export default function EmailActions({
  result,
  shareLink,
  locale,
}: {
  result: AssessmentResult;
  shareLink: string;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(buildReportText(result, shareLink, locale));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard access can be refused. The textarea below is still selectable.
    }
  };

  const linkStyle = {
    borderColor: 'var(--border)',
    color: 'var(--ink)',
  };

  return (
    <div className="no-print">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="rounded-lg border px-4 py-2 text-sm font-medium"
        style={linkStyle}
      >
        {t('emailToMe', locale)}
      </button>

      {open && (
        <div
          className="mt-3 rounded-xl border p-4"
          style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
        >
          <p className="text-sm" style={{ color: 'var(--ink-secondary)' }}>
            {t('emailHint', locale)}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={buildGmailUrl(result, shareLink, locale)}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border px-3 py-1.5 text-sm font-medium"
              style={linkStyle}
            >
              {t('emailGmail', locale)}
            </a>
            <a
              href={buildOutlookUrl(result, shareLink, locale)}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border px-3 py-1.5 text-sm font-medium"
              style={linkStyle}
            >
              {t('emailOutlook', locale)}
            </a>
            <a
              href={buildMailto(result, shareLink, locale)}
              className="rounded-lg border px-3 py-1.5 text-sm font-medium"
              style={linkStyle}
            >
              {t('emailApp', locale)}
            </a>
            <button
              type="button"
              onClick={copy}
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-white"
              style={{ background: 'var(--level-3)' }}
            >
              {copied ? t('emailCopied', locale) : t('emailCopy', locale)}
            </button>
          </div>

          <textarea
            readOnly
            value={buildReportText(result, shareLink, locale)}
            onFocus={(e) => e.currentTarget.select()}
            rows={8}
            className="mt-3 w-full rounded-lg border p-3 font-mono text-xs"
            style={{
              borderColor: 'var(--border)',
              background: 'var(--page)',
              color: 'var(--ink-secondary)',
            }}
          />
        </div>
      )}
    </div>
  );
}
