// CARA domain types.
// House style: no em-dashes anywhere in content or comments.

/** The four readiness levels. These are three thresholds, not one scale of "more". */
export type Level = 0 | 1 | 2 | 3;

export const LEVELS: Level[] = [0, 1, 2, 3];

export const LEVEL_NAMES: Record<Level, string> = {
  0: 'Not ready',
  1: 'Emerging',
  2: 'Ready',
  3: 'Scalable',
};

/** An unanswered question is distinct from a question answered "unknown". */
export type Answer = Level | 'unknown';

export type DimensionId = 'lead' | 'case' | 'ppl' | 'skill' | 'enab' | 'meas';

/**
 * Who walks away owning the action. The coach/organisation split is the whole
 * point of the report: the session ends with two lists, not one.
 */
export type Owner = 'coach' | 'organisation' | 'joint';

/**
 * When the action has to be closed. `before-pilot` items are the blockers that
 * gate a start; the other two never block.
 */
export type Timing = 'before-pilot' | 'during-pilot' | 'before-rollout';

export interface LaunchCondition {
  /** Imperative, concrete, and naming an artefact you could point at afterwards. */
  action: string;
  owner: Owner;
  timing: Timing;
  /**
   * Conditions from different questions that imply the same piece of work share
   * a mergeKey and collapse into one line in the report, citing every question
   * that triggered them.
   */
  mergeKey: string;
}

export interface Question {
  id: string;
  dimension: DimensionId;
  text: string;
  /** One line on why this predicts pilot success. Shown as a hint in the app. */
  why: string;
  /**
   * True when a Not ready score should force the whole dimension to Not ready,
   * and therefore produce a no-go. Kept to 3 or 4 per dimension so that no one
   * dimension monopolises the verdict.
   */
  pilotCritical: boolean;
  /** How you know it is this level. Observable evidence, never adjectives. */
  anchors: Record<Level, string>;
  /** Fires only on the two failing levels. Ready and Scalable need no action. */
  conditions: Record<0 | 1, LaunchCondition>;
  source?: { label: string; url: string };
}

export interface Dimension {
  id: DimensionId;
  number: number;
  name: string;
  /** What this dimension is actually testing, in one sentence. */
  premise: string;
}
