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

  introBody:
    'It is worked through as a conversation with an adoption consultant, scoring six dimensions.',
  introAfterDimensions:
    'Each dimension is scored on four levels. The result is a go or no-go, and every gap becomes a launch condition: what to do about it, which side owns it, and whether it has to be closed before the pilot starts, alongside it, or before broad rollout.',
  introPrivacy:
    'Your answers never leave this browser. There is no account and no backend, and nothing you answer is stored anywhere but on this device. The page counts anonymous visits so I know whether anyone is using it. That count can never contain your answers.',
  // Emphasis is marked in the string so a translation can place it where its
  // own sentence structure needs it. See RichText.
  introPilotPoint:
    'A pilot exists to answer questions, so CARA never asks for something only the pilot can tell you. Only **Not ready** blocks a start. **Emerging** always proceeds, carrying a condition. **Scalable** is what you re-score against afterwards.',
  introNotTechnical:
    'CARA assesses whether the organisation can absorb the change. It is not a security or data-governance assessment and does not replace one.',

  levelBlurb0: 'This will break the pilot. Fix it before starting.',
  levelBlurb1: 'The pilot can start, carrying a named condition.',
  levelBlurb2: 'The pilot will produce a trustworthy answer.',
  levelBlurb3: 'This would survive a full rollout, not just a pilot.',
  questionsWord: 'questions',

  chooseForm: 'Choose the length',
  fullForm: 'Full assessment',
  shortForm: 'Short form',
  fullFormDetail: 'Every question. For a proper engagement.',
  shortFormDetail:
    'Only the questions that can produce a no-go. For a first conversation. It can never miss a blocker, but it will miss some launch conditions.',
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
  noConditionsYet:
    'Nothing scored yet, so there is nothing to act on. Answer the questions to see what a pilot would need.',
  groupByTiming: 'By timing',
  groupByOwner: 'By owner',
  triggeredBy: 'From question',
  answered: 'answered',
  unansweredWarning: 'Some questions are still unanswered, so this verdict is provisional.',
  unknownCriticalWarning:
    'Pilot-critical questions answered "don\'t know yet". An unknown here is a finding in its own right.',

  downloadPdf: 'Download PDF',
  emailSubject: 'Copilot Adoption Readiness Assessment results',
  emailCopy: 'Copy the report',
  emailCopied: 'Copied',

  runAlongside: 'Run these alongside CARA',
  runAlongsideBody:
    'A complete Copilot decision needs four stages, and CARA is one of them. Microsoft provides real, runnable instruments for the other three: the Optimization Assessment and Readiness Report for technical eligibility, Purview DSPM for AI and SharePoint Advanced Management for oversharing and data governance, and the adoption and impact reports for what happens once people start using it.',
  runAlongsideLink: 'Read the README',
  stage: 'Stage',

  creditPrefix: 'CARA by',
  creditAuthor: 'Jelmar Groot',
  creditLicence: 'CC BY 4.0',
  viewSource: 'Source on GitHub',
} as const;

export type StringKey = keyof typeof en;

/**
 * Dutch. Written as Dutch rather than translated, so it reads the way an
 * adoption consultant would actually say it out loud in a client room.
 *
 * Vocabulary decisions that the whole instrument then follows:
 *   pilot cohort   -> pilotgroep   (cohort is stiff and academic in Dutch)
 *   launch condition -> startvoorwaarde
 *   Not ready / Emerging / Ready / Scalable
 *                  -> Niet klaar / In opbouw / Klaar / Schaalbaar
 *   sponsor, champions, pilot     kept, because Dutch organisations keep them
 * Second person is "je" throughout. "U" would put the consultant at a distance
 * from the client, and this is a conversation between two people at a table.
 */
const nl: Partial<Record<StringKey, string>> = {
  appFull: 'Gereedheidsscan voor Copilot-adoptie',
  tagline: 'Wat moet er staan voordat een pilot met Microsoft 365 Copilot kan beginnen?',

  introBody: 'Je loopt hem door in gesprek met een adoptieconsultant, en scoort zes dimensies.',
  introAfterDimensions:
    'Elke dimensie krijgt een score op vier niveaus. Daaruit volgt een go of een nog-niet, en alles wat ontbreekt wordt een startvoorwaarde: wat eraan te doen is, wie het oppakt, en of het rond moet zijn voordat de pilot begint, tijdens de pilot, of pas voor de brede uitrol.',
  introPrivacy:
    'Je antwoorden verlaten deze browser niet. Er is geen account en geen backend, en wat je invult wordt nergens anders bewaard dan op dit apparaat. De pagina telt anonieme bezoeken, zodat ik weet of er iemand gebruik van maakt. In die telling kunnen je antwoorden nooit terechtkomen.',
  introPilotPoint:
    'Een pilot bestaat om vragen te beantwoorden. Daarom vraagt CARA nooit naar iets wat alleen de pilot je kan vertellen. Alleen **Niet klaar** houdt een start tegen. **In opbouw** gaat altijd door, met een voorwaarde eraan vast. **Schaalbaar** is waar je na afloop opnieuw tegen scoort.',
  introNotTechnical:
    'CARA meet of de organisatie de verandering aankan. Het is geen security- of datagovernance-assessment en vervangt er ook geen.',

  levelBlurb0: 'Dit breekt de pilot. Los het op voordat je begint.',
  levelBlurb1: 'De pilot kan starten, met een benoemde voorwaarde eraan.',
  levelBlurb2: 'De pilot levert een antwoord op waar je op kunt bouwen.',
  levelBlurb3: 'Dit houdt stand bij een volledige uitrol, niet alleen in een pilot.',
  questionsWord: 'vragen',

  chooseForm: 'Kies de lengte',
  fullForm: 'Volledige scan',
  shortForm: 'Korte versie',
  fullFormDetail: 'Alle vragen. Voor een volwaardig traject.',
  shortFormDetail:
    'Alleen de vragen die tot een nog-niet kunnen leiden. Voor een eerste gesprek. Hij mist nooit een blokkade, maar wel een deel van de startvoorwaarden.',
  start: 'Start de scan',
  resume: 'Ga verder waar je gebleven was',

  question: 'Vraag',
  of: 'van',
  dimension: 'Dimensie',
  pilotCritical: 'Kritiek voor de pilot',
  pilotCriticalHint: 'Niet klaar op alleen deze vraag levert al een nog-niet op.',
  whyItMatters: 'Waarom dit telt',
  source: 'Bron',
  unknown: 'Weet ik nog niet',
  unknownHint: 'Wordt genoteerd als iets om voor de start uit te zoeken.',

  back: 'Terug',
  next: 'Volgende',
  seeResults: 'Bekijk het resultaat',
  startOver: 'Opnieuw beginnen',
  editAnswers: 'Antwoorden aanpassen',

  results: 'Resultaat',
  yourVerdict: 'Oordeel',
  dimensionScores: 'Dimensies',
  readinessScore: 'Gereedheid',
  readinessCaveat:
    'Een voortgangscijfer om beweging tussen twee metingen te volgen. Het is niet de beslissing: een gemiddelde is uitstekend in het wegmoffelen van die ene fatale leemte, dus het oordeel hierboven gaat voor.',

  launchConditions: 'Startvoorwaarden',
  noConditions: 'Niets staat open. Elke dimensie kwam uit op Klaar of beter.',
  noConditionsYet:
    'Er is nog niets gescoord, dus er valt nog niets op te pakken. Beantwoord de vragen om te zien wat een pilot nodig heeft.',
  groupByTiming: 'Op moment',
  groupByOwner: 'Op eigenaar',
  triggeredBy: 'Uit vraag',
  answered: 'beantwoord',
  unansweredWarning: 'Een deel van de vragen is nog onbeantwoord, dus dit oordeel is voorlopig.',
  unknownCriticalWarning:
    'Vragen die kritiek zijn voor de pilot en beantwoord zijn met "weet ik nog niet". Zo\'n onbekende is op zichzelf al een bevinding.',

  downloadPdf: 'Download pdf',
  emailSubject: 'Resultaat gereedheidsscan Copilot-adoptie',
  emailCopy: 'Kopieer het rapport',
  emailCopied: 'Gekopieerd',

  runAlongside: 'Draai deze naast CARA',
  runAlongsideBody:
    'Een volledige beslissing over Copilot kent vier fasen, en CARA is er daar een van. Voor de andere drie levert Microsoft instrumenten die je echt kunt draaien: de Optimization Assessment en het Readiness Report voor technische geschiktheid, Purview DSPM for AI en SharePoint Advanced Management voor overdeling en datagovernance, en de adoptie- en impactrapporten voor wat er gebeurt zodra mensen ermee aan de slag gaan.',
  runAlongsideLink: 'Lees de README',
  stage: 'Fase',

  creditPrefix: 'CARA van',
  viewSource: 'Broncode op GitHub',
};

const tables: Record<Locale, Partial<Record<StringKey, string>>> = { en, nl };

export function t(key: StringKey, locale: Locale = DEFAULT_LOCALE): string {
  return tables[locale][key] ?? en[key];
}

const levelNames: Record<Locale, Partial<Record<Level, string>>> = {
  en: { 0: 'Not ready', 1: 'Emerging', 2: 'Ready', 3: 'Scalable' },
  nl: { 0: 'Niet klaar', 1: 'In opbouw', 2: 'Klaar', 3: 'Schaalbaar' },
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
  nl: {
    incomplete: 'Onvolledig',
    'no-go': 'Nog niet',
    'go-with-conditions': 'Go, met voorwaarden',
    go: 'Go',
    'scale-ready': 'Klaar om op te schalen',
  },
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
  nl: {
    incomplete: 'Minstens een dimensie heeft nog geen enkel antwoord, dus er valt nog geen oordeel te geven.',
    'no-go':
      'Minstens een dimensie staat op Niet klaar. Nu beginnen breekt de pilot, of maakt de uitkomst onleesbaar. Ruim eerst de blokkades hieronder op.',
    'go-with-conditions':
      'Niets houdt een start tegen, maar er is werk te doen. Hang de voorwaarden hieronder aan het pilotplan, met de eigenaren erbij.',
    go: 'Elke dimensie staat op Klaar of beter en er staat niets meer open voor de start. Deze pilot levert een antwoord op waar je op kunt bouwen.',
    'scale-ready':
      'Over de hele linie sterk, en er staat niets meer open. Dit gaat verder dan klaar voor een pilot: dit is klaar voor uitrol.',
  },
};

export const verdictBlurb = (v: Verdict, locale: Locale = DEFAULT_LOCALE): string =>
  verdictBlurbs[locale][v] ?? verdictBlurbs.en[v]!;

const ownerNames: Record<Locale, Partial<Record<Owner, string>>> = {
  en: { coach: 'Adoption coach', organisation: 'Organisation', joint: 'Joint' },
  nl: { coach: 'Adoptieconsultant', organisation: 'Organisatie', joint: 'Samen' },
};

export const ownerName = (o: Owner, locale: Locale = DEFAULT_LOCALE): string =>
  ownerNames[locale][o] ?? ownerNames.en[o]!;

const timingNames: Record<Locale, Partial<Record<Timing, string>>> = {
  en: {
    'before-pilot': 'Before the pilot can start',
    'during-pilot': 'Alongside the pilot',
    'before-rollout': 'Before broad rollout',
  },
  nl: {
    'before-pilot': 'Voor de pilot kan starten',
    'during-pilot': 'Tijdens de pilot',
    'before-rollout': 'Voor de brede uitrol',
  },
};

export const timingName = (ti: Timing, locale: Locale = DEFAULT_LOCALE): string =>
  timingNames[locale][ti] ?? timingNames.en[ti]!;
