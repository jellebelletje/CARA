import type { Dimension, DimensionId, Question } from './types';
import { leadershipQuestions } from './dimensions/leadership';
import { useCaseQuestions } from './dimensions/useCases';
import { peopleQuestions } from './dimensions/people';
import { skillsQuestions } from './dimensions/skills';
import { enablementQuestions } from './dimensions/enablement';
import { measurementQuestions } from './dimensions/measurement';

export const dimensions: Dimension[] = [
  {
    id: 'lead',
    number: 1,
    name: 'Leadership and sponsorship',
    premise:
      'Whether anyone with authority is visibly behind this, and whether managers model the behaviour they are asking for.',
  },
  {
    id: 'case',
    number: 2,
    name: 'Use cases and value',
    premise:
      'Whether you know what the cohort will actually do with Copilot, and how you will tell afterwards whether it helped.',
  },
  {
    id: 'ppl',
    number: 3,
    name: 'People readiness',
    premise:
      'Whether the cohort can and will engage, and whether the conditions exist for their behaviour to mean anything.',
  },
  {
    id: 'skill',
    number: 4,
    name: 'Skills',
    premise:
      'Whether people can get a good result safely, and whether the environment lets Copilot see the work in the first place.',
  },
  {
    id: 'enab',
    number: 5,
    name: 'Enablement ecosystem',
    premise:
      'Whether the support around the cohort exists in practice rather than on a slide.',
  },
  {
    id: 'meas',
    number: 6,
    name: 'Measurement',
    premise:
      'Whether the pilot is set up to produce an answer that a decision can be based on.',
  },
];

export const questions: Question[] = [
  ...leadershipQuestions,
  ...useCaseQuestions,
  ...peopleQuestions,
  ...skillsQuestions,
  ...enablementQuestions,
  ...measurementQuestions,
];

export const dimensionById = (id: DimensionId): Dimension => {
  const found = dimensions.find((d) => d.id === id);
  if (!found) throw new Error(`Unknown dimension: ${id}`);
  return found;
};

export const questionsFor = (id: DimensionId): Question[] =>
  questions.filter((q) => q.dimension === id);

/** The short form: exactly the questions that can produce a no-go. */
export const shortFormQuestions = (): Question[] =>
  questions.filter((q) => q.pilotCritical);
