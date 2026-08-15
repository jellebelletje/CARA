import type { Question } from '../types';

const SCENARIO_LIBRARY = {
  label: 'Microsoft Copilot Scenario Library',
  url: 'https://adoption.microsoft.com/en-us/copilot/success-kit/',
};

const ADOPTION_SCORE = {
  label: 'AI Adoption Score, habit threshold',
  url: 'https://learn.microsoft.com/en-us/microsoft-365/admin/adoption/ai-adoption-score',
};

export const useCaseQuestions: Question[] = [
  {
    id: 'case-01',
    dimension: 'case',
    text: 'Have you identified specific role-based scenarios for the pilot cohort, or is the plan "give them licences and see what happens"?',
    why: "The single strongest predictor in Microsoft's own enablement guidance. See-what-happens pilots produce anecdotes rather than decisions.",
    pilotCritical: true,
    anchors: {
      0: 'The plan is to assign licences and observe. No scenarios are written down.',
      1: 'Scenarios exist but describe generic Copilot capabilities such as summarise or draft, rather than named pieces of this cohort\'s work.',
      2: "Each role in the cohort has at least one written scenario describing a specific recurring task, in the cohort's own language.",
      3: 'Scenarios are maintained as a living set, with new ones added from what the cohort discovers in use.',
    },
    conditions: {
      0: {
        action: 'Run a scenario-mapping workshop with the cohort and produce at least one written scenario per role before launch.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'scenario-mapping',
      },
      1: {
        action: "Rewrite the capability list as named tasks from the cohort's actual work, using the Microsoft Scenario Library as a starting point.",
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'scenario-mapping',
      },
    },
    source: SCENARIO_LIBRARY,
  },
  {
    id: 'case-02',
    dimension: 'case',
    text: 'Is there a baseline for the work those scenarios target, meaning how long it takes, how often it happens, and what it costs today?',
    why: 'Without a before there is no after, and the baseline must be captured before licences land or it is gone permanently.',
    pilotCritical: true,
    anchors: {
      0: 'No baseline exists and none is planned. How long the target work takes today is simply unknown.',
      1: 'There is an estimate from memory or one person\'s opinion, rather than a measurement.',
      2: 'The target tasks have a recorded baseline for time, frequency or volume, captured before licences land.',
      3: 'The baseline comes from a source that will still exist after the pilot, so the comparison can be repeated at any point.',
    },
    conditions: {
      0: {
        action: 'Capture the baseline before any licence is assigned. Once the cohort starts using Copilot the before state is unrecoverable.',
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'value-baseline',
      },
      1: {
        action: 'Upgrade the estimate to a recorded measurement for at least the top two scenarios.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'value-baseline',
      },
    },
  },
  {
    id: 'case-03',
    dimension: 'case',
    text: 'Have the scenarios been validated with the people who would actually do them, rather than designed by the project team on their behalf?',
    why: 'Project-team-invented scenarios routinely describe work that does not exist in that shape, and the cohort quietly ignores them.',
    pilotCritical: false,
    anchors: {
      0: 'Scenarios were written by the project team and have never been shown to anyone who does the work.',
      1: 'Scenarios were shown to the cohort for comment, but nothing changed as a result.',
      2: 'Scenarios were built with people who do the work, and at least one was rejected or rewritten by them.',
      3: 'The cohort proposes and refines scenarios themselves as a matter of course.',
    },
    conditions: {
      0: {
        action: 'Test each scenario with someone who actually does that work before launch.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'scenario-validation',
      },
      1: {
        action: 'Run a working session where the cohort is empowered to reject scenarios, not only to comment on them.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'scenario-validation',
      },
    },
  },
  {
    id: 'case-04',
    dimension: 'case',
    text: 'Do the chosen scenarios rely on data Copilot can actually reach, in M365 rather than a legacy system, a shared drive or a PDF archive?',
    why: 'The most common cause of a disappointing pilot. The scenario is sound but the content is not where Copilot can see it. Cheap to check now, brutal to discover in week three.',
    pilotCritical: true,
    anchors: {
      0: 'The scenarios depend on content Copilot cannot reach, such as a legacy system, a local drive or scanned PDFs.',
      1: 'Reachability has not been checked, so whether the content is indexed and correctly permissioned is unknown.',
      2: "Content for each scenario has been confirmed present in M365 and reachable under the cohort's own permissions.",
      3: 'Content reachability is maintained deliberately, and every new scenario is checked for it before being adopted.',
    },
    conditions: {
      0: {
        action: 'Reselect or rescope the scenarios onto content Copilot can reach, or move the content into M365 first.',
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'data-reachability',
      },
      1: {
        action: 'Test each scenario against real content using a real cohort account before launch.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'data-reachability',
      },
    },
  },
  {
    id: 'case-05',
    dimension: 'case',
    text: 'Is there a stated value hypothesis per scenario, naming what improves, for whom, and roughly by how much?',
    why: 'A hypothesis you can be wrong about. This is the pilot\'s actual question, written down in advance so it cannot be retrofitted to whatever the data shows.',
    pilotCritical: false,
    anchors: {
      0: 'No expectation has been stated, so any result can be declared a success afterwards.',
      1: 'There is a general expectation of time saving, with no figure and no named beneficiary.',
      2: 'Each priority scenario has a written hypothesis naming what improves, for whom, and roughly by how much.',
      3: 'Hypotheses are explicitly falsifiable, and the team has agreed in advance to publish results that disprove them.',
    },
    conditions: {
      0: {
        action: 'Write a value hypothesis per priority scenario before launch, so results cannot be retrofitted afterwards.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'value-hypothesis',
      },
      1: {
        action: 'Attach a figure and a named beneficiary to the existing expectation.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'value-hypothesis',
      },
    },
  },
  {
    id: 'case-06',
    dimension: 'case',
    text: 'Is at least one scenario high-frequency, daily or several times a week, for the pilot cohort?',
    why: "Habit is the mechanism. Microsoft's threshold is around 3 active days a week, or 12 days in 28, and a cohort whose only scenarios are monthly cannot physically reach it inside a pilot window.",
    pilotCritical: true,
    anchors: {
      0: 'Every scenario is monthly or rarer, so the cohort cannot reach a usage habit inside the pilot window.',
      1: 'There is a plausible daily scenario, but nobody has confirmed the cohort actually does it that often.',
      2: 'At least one scenario is confirmed daily or several times weekly for most of the cohort.',
      3: 'Multiple high-frequency scenarios exist across several roles, so habit does not depend on a single task.',
    },
    conditions: {
      0: {
        action: "Add at least one genuinely high-frequency scenario. Microsoft's habit threshold of roughly 3 active days a week cannot be reached on monthly tasks.",
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'habit-frequency',
      },
      1: {
        action: 'Confirm the frequency assumption with the cohort before relying on it.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'habit-frequency',
      },
    },
    source: ADOPTION_SCORE,
  },
  {
    id: 'case-07',
    dimension: 'case',
    text: 'Does each scenario have a named business owner who cares whether it works?',
    why: 'Scenarios owned by the project get abandoned the moment they are inconvenient. Scenarios owned by a person who benefits get fixed.',
    pilotCritical: false,
    anchors: {
      0: 'Scenarios belong to the project. No business person is accountable for whether any of them works.',
      1: 'A business owner is named per scenario but has not agreed to the role and has no time allocated.',
      2: 'Each priority scenario has a named business owner who has accepted the role and will review the result.',
      3: 'Scenario owners drive their own scenarios and come to the project team for help, rather than the reverse.',
    },
    conditions: {
      0: {
        action: 'Assign a named business owner to each priority scenario before launch and secure their acceptance.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'scenario-ownership',
      },
      1: {
        action: 'Confirm the named owners have accepted and hold time to review results.',
        owner: 'organisation',
        timing: 'during-pilot',
        mergeKey: 'scenario-ownership',
      },
    },
  },
];
