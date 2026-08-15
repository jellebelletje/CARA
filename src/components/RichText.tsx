import { Fragment } from 'react';

/**
 * Renders **double-asterisk** spans as bold.
 *
 * Emphasis lives inside the translated string rather than being hardcoded
 * around it, because Dutch will not put the same words in the same places as
 * English. A translator marks what needs weight in their own sentence, and the
 * component does not need to know which language it is rendering.
 */
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        const key = `${index}-${part}`;
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={key} style={{ color: 'var(--ink)' }}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <Fragment key={key}>{part}</Fragment>;
      })}
    </>
  );
}
