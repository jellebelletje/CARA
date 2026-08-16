import type { Question } from '../types';

const ADOPTION_REPORT = {
  label: 'Microsoft 365 Copilot adoption report, usage level definitions',
  url: 'https://learn.microsoft.com/en-us/viva/insights/advanced/analyst/templates/microsoft-365-copilot-adoption',
};

const ADOPTION_SCORE = {
  label: 'AI Adoption Score, habit threshold',
  url: 'https://learn.microsoft.com/en-us/microsoft-365/admin/adoption/ai-adoption-score',
};

const IMPACT_REPORT = {
  label: 'Microsoft 365 Copilot impact report',
  url: 'https://learn.microsoft.com/en-us/viva/insights/advanced/analyst/templates/microsoft-365-copilot-impact',
};

export const measurementQuestions: Question[] = [
  {
    id: 'meas-01',
    dimension: 'meas',
    text: 'Have you agreed what "adopted" means numerically, before the pilot starts?',
    why: "Microsoft gives you defensible definitions off the shelf: a habitual user is active in at least 9 of 12 weeks, a power user adds 15 or more actions a week, and the AI Adoption Score habit target is 12 active days in 28. Picking one in advance stops the goalposts moving once results arrive.",
    pilotCritical: true,
    anchors: {
      0: 'No definition of adopted exists, so success will be argued rather than measured.',
      1: 'There is a vague intent such as "people using it regularly", with no threshold attached to it.',
      2: "A specific threshold has been agreed in advance, for example Microsoft's habitual user definition of active in at least 9 of 12 weeks.",
      3: 'The chosen definition is applied consistently across all reporting, and the organisation has agreed not to move it once results arrive.',
    },
    conditions: {
      0: {
        action: 'Agree a numeric definition of adopted before launch, using one of the published Microsoft thresholds rather than inventing one.',
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'adoption-definition',
      },
      1: {
        action: 'Attach a specific threshold to the existing intent and write it down before any results arrive.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'adoption-definition',
      },
    },
    source: ADOPTION_SCORE,
  },
  {
    id: 'meas-02',
    dimension: 'meas',
    text: 'Can someone actually access and read the Copilot reporting, with the licences and roles that requires?',
    why: 'The Viva Insights adoption report needs an Insights Analyst role and Power BI Desktop. Discovering that in week six means your pilot ran blind.',
    pilotCritical: true,
    anchors: {
      0: 'Nobody has checked who can see Copilot reporting, and no role or licence has been arranged.',
      1: 'The reporting exists in principle but nobody has opened it, and the required roles are unconfirmed.',
      2: 'A named person holds the roles and licences required, and has already produced a report from live data.',
      3: 'Reporting is routine, and more than one person can produce and interpret it.',
    },
    conditions: {
      0: {
        action: 'Confirm who will read the reporting and arrange their roles and licences before launch.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'reporting-access',
      },
      1: {
        action: 'Have the named person produce one report from live data before launch, to prove the access actually works.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'reporting-access',
      },
    },
    source: ADOPTION_REPORT,
  },
  {
    id: 'meas-03',
    dimension: 'meas',
    text: 'Is there a review cadence with a decision attached to each review, rather than a report nobody acts on?',
    why: 'Data without a decision point is theatre. This is also how mid-pilot course corrections happen while there is still pilot left to correct.',
    pilotCritical: false,
    anchors: {
      0: 'There is no plan to review pilot data during the pilot.',
      1: 'Reviews are planned but with no decision attached, so they inform nobody.',
      2: 'A review cadence is set, and each review has a named decision it feeds.',
      3: 'Reviews have visibly changed the course of previous initiatives, so the cadence has teeth.',
    },
    conditions: {
      0: {
        action: 'Set a review cadence with a decision attached to each review, so course correction happens while there is still pilot left to correct.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'review-cadence',
      },
      1: {
        action: 'Attach a specific decision to each scheduled review.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'review-cadence',
      },
    },
  },
  {
    id: 'meas-04',
    dimension: 'meas',
    text: 'Is there a route for qualitative feedback, including "this is not working for me", that reaches someone who can act on it?',
    why: 'Drop-off is your most valuable signal, and telemetry only shows you that it happened, never why.',
    pilotCritical: false,
    anchors: {
      0: 'There is no route for qualitative feedback. Telemetry is the only signal.',
      1: 'Feedback is welcomed in principle but has no channel and no owner, so it reaches nobody.',
      2: 'There is a named channel for qualitative feedback, negative included, with someone accountable for responding.',
      3: 'Feedback visibly changes the programme, and the cohort can point to something that changed because they said so.',
    },
    conditions: {
      0: {
        action: 'Create a route for qualitative feedback that reaches someone who can act on it.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'feedback-channel',
      },
      1: {
        action: 'Give the feedback channel a name, a location and an owner.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'feedback-channel',
      },
    },
  },
  {
    id: 'meas-05',
    dimension: 'meas',
    text: 'Have you decided how you will capture value that telemetry cannot see, such as output quality, confidence or reduced drudgery?',
    why: "Usage counts prove habit, not worth. Copilot's most reported benefits are frequently invisible to action counts.",
    pilotCritical: false,
    anchors: {
      0: 'The only planned measure is usage counts.',
      1: 'There is an intent to capture qualitative value but no method and no instrument.',
      2: 'A method exists for capturing value telemetry cannot see, such as quality, confidence or reduced drudgery.',
      3: 'Qualitative and quantitative measures are reported together, and neither is treated as the whole story.',
    },
    conditions: {
      0: {
        action: 'Decide how you will capture value that telemetry cannot see.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'qualitative-value',
      },
      1: {
        action: 'Choose the instrument, whether survey, interview or diary, and schedule it.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'qualitative-value',
      },
    },
    source: IMPACT_REPORT,
  },
  {
    id: 'meas-06',
    dimension: 'meas',
    text: 'Is there a plan to collect success stories while they are fresh, rather than reconstructing them at the end?',
    why: 'Specific stories are what carry a go decision to a steering committee. Reconstructed ones are vague and unconvincing at exactly the moment you need them to be sharp.',
    pilotCritical: false,
    anchors: {
      0: 'There is no plan to collect stories. Anything useful will be reconstructed from memory at the end.',
      1: 'Stories will be gathered at the end of the pilot rather than as they happen.',
      2: "There is a running route for capturing specific examples as they occur, in the person's own words.",
      3: 'Stories are actively used during the pilot to recruit and reassure the rest of the organisation.',
    },
    conditions: {
      0: {
        action: 'Set up a way to capture examples while they are fresh.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'story-capture',
      },
      1: {
        action: 'Move story capture from the end of the pilot to a running collection during it.',
        owner: 'coach',
        timing: 'during-pilot',
        mergeKey: 'story-capture',
      },
    },
  },
  {
    id: 'meas-07',
    dimension: 'meas',
    text: 'Is it agreed what would count as a failed pilot, not only what would count as success?',
    why: 'Pilots without a defined failure condition never fail, they get extended. Writing the condition down in advance is what makes the eventual decision credible.',
    pilotCritical: true,
    anchors: {
      0: 'Only success has been described. There is no condition under which this pilot would be judged to have failed.',
      1: 'Failure is discussed informally but has not been written down or agreed.',
      2: 'A written failure condition has been agreed in advance, alongside the success condition.',
      3: 'The organisation has previously stopped something on this basis, so the condition is credible rather than decorative.',
    },
    conditions: {
      0: {
        action: 'Agree in writing what would count as a failed pilot, before it starts.',
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'failure-condition',
      },
      1: {
        action: 'Write down and get agreement on the failure condition that is currently only discussed.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'failure-condition',
      },
    },
  },
  {
    id: 'meas-08',
    dimension: 'meas',
    text: 'Have you decided the reporting granularity and the privacy line, for example group level rather than individual level?',
    why: 'This is the decision behind the promise you make to people about their usage data. Both are needed and they fail separately, because many organisations communicate a reassurance they have not actually designed the reporting to honour.',
    pilotCritical: false,
    anchors: {
      0: 'Reporting granularity has not been decided, so individual-level reporting is the default.',
      1: 'There is a preference for group-level reporting but it has been neither decided nor configured.',
      2: 'Granularity is decided and documented, including a minimum group size for aggregated views.',
      3: 'The decision is enforced in the reporting configuration itself, so it cannot be quietly bypassed.',
    },
    conditions: {
      0: {
        action: 'Decide the reporting granularity and privacy line before configuring anything, including a minimum group size for aggregated views.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'reporting-granularity',
      },
      1: {
        action: 'Turn the preference into a documented decision and configure the reports to match it.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'reporting-granularity',
      },
    },
    source: ADOPTION_REPORT,
  },
  {
    id: 'meas-09',
    dimension: 'meas',
    text: 'Is the pilot long enough for a habit to form before you judge it?',
    why: "Microsoft's consistency thresholds are measured over 12 weeks. A four-week pilot cannot produce a habitual user by Microsoft's own definition, so it structurally cannot answer the question you are asking it.",
    pilotCritical: true,
    anchors: {
      0: 'The pilot is scheduled to be judged after a few weeks, which is too short for a usage habit to form.',
      1: 'The duration is undecided, or has been set by an external deadline rather than by what the measurement requires.',
      2: "The pilot runs long enough for consistency to be measurable, in line with the 12-week window Microsoft's usage levels use.",
      3: 'Duration is set by the measurement requirement, and the decision point is protected against being pulled forward.',
    },
    conditions: {
      0: {
        action: 'Extend the pilot to a length at which a habit can form, or accept that it cannot answer the question you are asking it.',
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'pilot-duration',
      },
      1: {
        action: 'Set the duration from the measurement requirement rather than from an external deadline.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'pilot-duration',
      },
    },
    source: ADOPTION_REPORT,
  },
  {
    id: 'meas-10',
    dimension: 'meas',
    text: 'Will you re-measure the people-side baseline at the end, using the same instrument you used at the start?',
    why: 'A sentiment shift is often the clearest result a pilot produces, but only if the closing measurement repeats the questions you opened with.',
    pilotCritical: false,
    anchors: {
      0: 'There is no plan to re-measure anything on the people side at the end.',
      1: 'A closing measurement is intended but will use different questions from the opening one.',
      2: 'The closing measurement repeats the opening instrument, so the comparison is valid.',
      3: 'The comparison is planned to be repeated at rollout, giving a trend rather than two isolated points.',
    },
    conditions: {
      0: {
        action: 'Plan to repeat the opening people-side measurement at the end, using the same questions.',
        owner: 'coach',
        timing: 'during-pilot',
        mergeKey: 'closing-measurement',
      },
      1: {
        action: 'Align the closing instrument with the opening one so the two are actually comparable.',
        owner: 'coach',
        timing: 'during-pilot',
        mergeKey: 'closing-measurement',
      },
    },
  },
];
