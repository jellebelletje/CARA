/**
 * Every user-facing string lives here, keyed by locale. No component may
 * hardcode copy, because the Dutch version (issue #2) has to be an overlay
 * rather than a rewrite. A missing Dutch string falls back to English
 * visibly, which is better than a blank or a crash.
 */
import type { Level, Owner, Timing } from '../data/types';
import type { Verdict } from '../lib/scoring';

export type Locale = 'en' | 'nl';
export const LOCALES: Locale[] = ['en', 'nl'];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, { flag: string; name: string }> = {
  en: { flag: '🇬🇧', name: 'English' },
  nl: { flag: '🇳🇱', name: 'Nederlands' },
};

const en = {
  appName: 'CARA',
  appFull: 'Copilot Adoption Readiness Assessment',
  tagline: 'What has to be in place before a Microsoft 365 Copilot pilot can start?',

  introBody: 'It is worked through as a conversation, scoring six dimensions.',
  introAfterDimensions:
    'Each dimension is scored on four levels. The result is a go or no-go, and every gap becomes a launch condition: what to do about it, which side owns it, and whether it has to be closed before the pilot starts, alongside it, or before broad rollout.',
  introPrivacy:
    'Your answers never leave this browser. There is no server and nothing is stored anywhere else. The link you share is the assessment itself, encoded in the address bar.',
  introPilotPoint:
    'A pilot exists to answer questions, so CARA never asks for something only the pilot can tell you. Only Not ready blocks a start. Emerging always proceeds, carrying a condition. Scalable is what you re-score against afterwards.',
  introNotTechnical:
    'CARA assesses whether the organisation can absorb the change. It is not a security or data-governance assessment and does not replace one.',

  chooseForm: 'Choose the length',
  fullForm: 'Full assessment',
  shortForm: 'Short form',
  fullFormDetail: 'All 47 questions. For a proper engagement.',
  shortFormDetail:
    'The 21 questions that can produce a no-go. For a first conversation. It can never miss a blocker, but it will miss some launch conditions.',
  start: 'Start the assessment',
  resume: 'Resume where you left off',

  question: 'Question',
  of: 'of',
  dimension: 'Dimension',
  pilotCritical: 'Pilot-critical',
  pilotCriticalHint: 'Not ready on this question alone produces a no-go.',
  whyItMatters: 'Why this matters',
  source: 'Source',
  unknown: "Don't know yet",
  unknownHint: 'Recorded as something to establish before launch.',

  back: 'Back',
  next: 'Next',
  seeResults: 'See results',
  startOver: 'Start over',
  editAnswers: 'Edit answers',

  results: 'Results',
  yourVerdict: 'Verdict',
  dimensionScores: 'Dimensions',
  readinessScore: 'Readiness',
  readinessCaveat:
    'A progress figure for tracking movement between assessments. It is not the decision: an average is very good at hiding a single fatal gap, so the verdict above governs.',
  launchConditions: 'Launch conditions',
  noConditions: 'Nothing outstanding. Every dimension came back Ready or better.',
  groupByTiming: 'By timing',
  groupByOwner: 'By owner',
  triggeredBy: 'From',
  answered: 'answered',
  unansweredWarning: 'Some questions are still unanswered, so this verdict is provisional.',
  unknownCriticalWarning:
    'Pilot-critical questions answered "don\'t know yet". An unknown here is a finding in its own right.',

  downloadPdf: 'Download PDF',
  emailToMe: 'Email this to me',
  copyLink: 'Copy share link',
  linkCopied: 'Link copied',
  emailSubject: 'Copilot Adoption Readiness Assessment results',

  runAlongside: 'Run these alongside CARA',
  runAlongsideBody:
    'A complete Copilot decision needs four stages, and CARA is one of them. Microsoft provides real, runnable instruments for the other three: the Optimization Assessment and Readiness Report for technical eligibility, Purview DSPM for AI and SharePoint Advanced Management for oversharing and data governance, and the adoption and impact reports for what happens once people start using it.',
  runAlongsideLink: 'More detail on all of these in the README',
  stage: 'Stage',

  creditPrefix: 'CARA by',
  creditAuthor: 'Jelmar Groot',
  creditLicence: 'CC BY 4.0',
  viewSource: 'Source on GitHub',
} as const;

export type StringKey = keyof typeof en;

/** Dutch overlay. Filled in under issue #2, deliberately empty for now. */
const nl: Partial<Record<StringKey, string>> = {};

const tables: Record<Locale, Partial<Record<StringKey, string>>> = { en, nl };

export function t(key: StringKey, locale: Locale = DEFAULT_LOCALE): string {
  return tables[locale][key] ?? en[key];
}

const levelNames: Record<Locale, Partial<Record<Level, string>>> = {
  en: { 0: 'Not ready', 1: 'Emerging', 2: 'Ready', 3: 'Scalable' },
  nl: {},
};

export const levelName = (level: Level, locale: Locale = DEFAULT_LOCALE): string =>
  levelNames[locale][level] ?? levelNames.en[level]!;

const verdictNames: Record<Locale, Partial<Record<Verdict, string>>> = {
  en: {
    incomplete: 'Incomplete',
    'no-go': 'Not yet',
    'go-with-conditions': 'Go, with conditions',
    go: 'Go',
    'scale-ready': 'Ready to scale',
  },
  nl: {},
};

export const verdictName = (v: Verdict, locale: Locale = DEFAULT_LOCALE): string =>
  verdictNames[locale][v] ?? verdictNames.en[v]!;

const verdictBlurbs: Record<Locale, Partial<Record<Verdict, string>>> = {
  en: {
    incomplete: 'At least one dimension has no answers yet, so there is no verdict to give.',
    'no-go':
      'At least one dimension is Not ready. Starting now would either break the pilot or make its results impossible to interpret. Close the blockers below first.',
    'go-with-conditions':
      'Nothing blocks a start, but there is work to close. Attach the conditions below to the pilot plan with the owners named against them.',
    go: 'Every dimension is Ready or better and nothing is outstanding before the pilot. This pilot should produce an answer you can trust.',
    'scale-ready':
      'Strong across the board, with nothing outstanding. This is beyond pilot readiness and into rollout readiness.',
  },
  nl: {},
};

export const verdictBlurb = (v: Verdict, locale: Locale = DEFAULT_LOCALE): string =>
  verdictBlurbs[locale][v] ?? verdictBlurbs.en[v]!;

const ownerNames: Record<Locale, Partial<Record<Owner, string>>> = {
  en: { coach: 'Adoption coach', organisation: 'Organisation', joint: 'Joint' },
  nl: {},
};

export const ownerName = (o: Owner, locale: Locale = DEFAULT_LOCALE): string =>
  ownerNames[locale][o] ?? ownerNames.en[o]!;

const timingNames: Record<Locale, Partial<Record<Timing, string>>> = {
  en: {
    'before-pilot': 'Before the pilot can start',
    'during-pilot': 'Alongside the pilot',
    'before-rollout': 'Before broad rollout',
  },
  nl: {},
};

export const timingName = (ti: Timing, locale: Locale = DEFAULT_LOCALE): string =>
  timingNames[locale][ti] ?? timingNames.en[ti]!;
