import type { Question } from '../types';

export const peopleQuestions: Question[] = [
  {
    id: 'ppl-01',
    dimension: 'ppl',
    text: 'Does the pilot cohort know they are in a pilot, and did they opt in rather than get assigned?',
    why: 'Assigned participants generate compliance rather than usage. It also changes what the telemetry means, because low usage from a conscripted cohort tells you nothing about Copilot.',
    pilotCritical: false,
    anchors: {
      0: 'The cohort has not been told they are in a pilot, or was assigned to it without being asked.',
      1: 'The cohort was told, but participation was framed as an instruction rather than a choice.',
      2: 'The cohort knows they are in a pilot, knows what is expected of them, and had a genuine opportunity to decline.',
      3: 'There is more demand to join than there are places, and a waiting list exists.',
    },
    conditions: {
      0: {
        action: 'Tell the cohort they are in a pilot and what is expected of them before licences arrive. Conscripted participants produce compliance data, not adoption data.',
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'cohort-consent',
      },
      1: {
        action: 'Offer a genuine opt-out and confirm who remains, so that low usage can be read as a signal rather than as resistance.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'cohort-consent',
      },
    },
  },
  {
    id: 'ppl-02',
    dimension: 'ppl',
    text: 'Do you have a read on how the cohort currently feels about AI at work, captured rather than assumed?',
    why: 'This is the people-side baseline and, like the value baseline, it is unrecoverable once licences land. A short pre-survey now is what lets you show a sentiment shift later. Pairs with meas-10.',
    pilotCritical: false,
    anchors: {
      0: 'Nobody has asked the cohort how they feel about AI at work, and the plan assumes enthusiasm.',
      1: 'Sentiment is known anecdotally from a few conversations, not captured in any repeatable form.',
      2: 'A short pre-pilot survey has been run with the cohort and the results are recorded.',
      3: 'The survey uses questions that will be repeated at the end, and comparable data exists from previous change efforts.',
    },
    conditions: {
      0: {
        action: 'Run a short sentiment and confidence survey with the cohort before launch. This baseline cannot be recovered once licences land.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'sentiment-baseline',
      },
      1: {
        action: 'Convert the anecdotal read into a recorded short survey that can be repeated at the end.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'sentiment-baseline',
      },
    },
  },
  {
    id: 'ppl-03',
    dimension: 'ppl',
    text: 'Have works council, employee representatives or unions been engaged where consultation is required?',
    why: 'In much of Europe this is a legal gate rather than a courtesy. Discovering it in week two stops the pilot dead, and unwinding it takes weeks.',
    pilotCritical: true,
    anchors: {
      0: 'Consultation is required and has not started, or nobody has checked whether it is required at all.',
      1: 'Consultation has started but is not concluded, and the start date assumes it will conclude in time.',
      2: 'Required consultation is concluded and the outcome is recorded.',
      3: 'Employee representatives are engaged as partners in the design, not merely consulted on the decision.',
    },
    conditions: {
      0: {
        action: 'Establish whether works council or employee representative consultation is legally required, and complete it before launch.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'employee-consultation',
      },
      1: {
        action: 'Conclude the open consultation and record the outcome before committing to a start date.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'employee-consultation',
      },
    },
  },
  {
    id: 'ppl-04',
    dimension: 'ppl',
    text: 'Is there a clear, communicated position on how Copilot usage data will and will not be used, particularly at individual level?',
    why: 'You are about to instrument people\'s work. If nobody has said "this will not appear in your performance review", a portion of the cohort will rationally minimise their footprint. Pairs with meas-08, which is the decision behind this communication.',
    pilotCritical: true,
    anchors: {
      0: 'Nothing has been said, and the cohort has not asked because they assume the worst.',
      1: 'An internal intention exists about individual-level data but has not been communicated to the cohort.',
      2: 'A clear statement has been communicated covering what is measured, at what granularity, and explicitly what it will not be used for.',
      3: 'The statement is backed by the actual reporting configuration, so the commitment is enforced rather than promised.',
    },
    conditions: {
      0: {
        action: 'State publicly, before launch, how Copilot usage data will and will not be used, and specifically whether it reaches individual performance conversations.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'usage-data-position',
      },
      1: {
        action: 'Communicate the existing internal position to the cohort rather than leaving them to infer it.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'usage-data-position',
      },
    },
  },
  {
    id: 'ppl-05',
    dimension: 'ppl',
    text: 'Does the cohort have the slack to learn during the pilot, or are they running at full utilisation?',
    why: 'Learning a new tool costs time before it saves any. A cohort with no headroom reverts under the first deadline, and you will misread that as the tool failing.',
    pilotCritical: true,
    anchors: {
      0: 'The cohort is at or above full utilisation, with no time allocated for learning.',
      1: 'Learning is expected to happen alongside an unchanged workload, in effect in people\'s own time.',
      2: 'Explicit time is allocated for learning and experimentation, and managers have agreed to protect it.',
      3: 'Learning time is a standing feature of how these teams work, not a pilot-period concession.',
    },
    conditions: {
      0: {
        action: 'Allocate protected learning time and get managers to agree to it, or reselect a cohort that has headroom.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'learning-capacity',
      },
      1: {
        action: 'Convert the expectation into named protected hours per person per week for the pilot period.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'learning-capacity',
      },
    },
  },
  {
    id: 'ppl-06',
    dimension: 'ppl',
    text: 'Is the cohort representative enough that the results will generalise, or is it all volunteers and enthusiasts?',
    why: 'Enthusiast-only pilots always succeed and predict nothing. This determines whether the pilot can answer the rollout question at all.',
    pilotCritical: true,
    anchors: {
      0: 'The cohort is entirely self-selected enthusiasts, or a single unrepresentative team.',
      1: 'The cohort skews strongly towards volunteers and early adopters, with no deliberate spread.',
      2: 'The cohort deliberately spans roles, seniority and attitude, and includes some sceptics.',
      3: 'The cohort is a designed sample whose results the organisation has agreed in advance to treat as representative.',
    },
    conditions: {
      0: {
        action: 'Broaden the cohort to include people who did not volunteer, or the pilot cannot carry a rollout decision.',
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'cohort-composition',
      },
      1: {
        action: 'Deliberately add sceptics and mid-tenure staff so the results can carry a rollout decision.',
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'cohort-composition',
      },
    },
  },
  {
    id: 'ppl-07',
    dimension: 'ppl',
    text: 'Do people see Copilot as relevant to their actual role, or as something for knowledge workers elsewhere in the building?',
    why: 'Perceived irrelevance is a harder blocker than scepticism, because sceptics at least engage while the unconvinced simply do not show up.',
    pilotCritical: false,
    anchors: {
      0: 'The cohort sees Copilot as something for other roles and cannot name a task of their own that it would touch.',
      1: 'People accept it might be useful in principle but cannot connect it to their own week.',
      2: 'Most of the cohort can name a specific task of their own they expect Copilot to help with.',
      3: 'People are already proposing uses the project team had not thought of.',
    },
    conditions: {
      0: {
        action: "Run role-specific demonstrations using the cohort's own work before launch.",
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'role-relevance',
      },
      1: {
        action: 'Have each person name one task of their own before launch, so their first use is already chosen.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'role-relevance',
      },
    },
  },
];
