import type { Dimension, Level, Question } from '../data/types';
import type { ResolvedCondition } from '../lib/conditions';
import type { Locale } from './strings';
import { nlDimensions, nlQuestions } from './nl';

/**
 * A per-locale overlay of question content, keyed by question id.
 *
 * English stays the source of truth in `src/data/dimensions/`. Other languages
 * arrive as overlays so a new language can land file by file, and so an
 * untranslated string falls back to English visibly rather than rendering
 * blank. Every accessor here is total: it always returns something readable.
 */
export interface QuestionOverlay {
  text?: string;
  why?: string;
  anchors?: Partial<Record<Level, string>>;
  /** Only the action text. Owner and timing are structural, not translated here. */
  conditions?: Partial<Record<0 | 1, string>>;
}

export interface DimensionOverlay {
  name?: string;
  premise?: string;
}

const questionOverlays: Record<Locale, Record<string, QuestionOverlay>> = {
  en: {},
  nl: nlQuestions,
};

const dimensionOverlays: Record<Locale, Record<string, DimensionOverlay>> = {
  en: {},
  nl: nlDimensions,
};

export const questionText = (q: Question, locale: Locale): string =>
  questionOverlays[locale]?.[q.id]?.text ?? q.text;

export const questionWhy = (q: Question, locale: Locale): string =>
  questionOverlays[locale]?.[q.id]?.why ?? q.why;

export const questionAnchor = (q: Question, level: Level, locale: Locale): string =>
  questionOverlays[locale]?.[q.id]?.anchors?.[level] ?? q.anchors[level];

export const dimensionName = (d: Dimension, locale: Locale): string =>
  dimensionOverlays[locale]?.[d.id]?.name ?? d.name;

export const dimensionPremise = (d: Dimension, locale: Locale): string =>
  dimensionOverlays[locale]?.[d.id]?.premise ?? d.premise;

/**
 * Merging a condition keeps one question's wording and discards the rest, so
 * the translation is looked up against the question that wording came from.
 */
export const conditionAction = (condition: ResolvedCondition, locale: Locale): string =>
  questionOverlays[locale]?.[condition.sourceQuestionId]?.conditions?.[condition.severity] ??
  condition.action;
