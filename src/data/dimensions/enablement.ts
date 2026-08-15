import type { Question } from '../types';

const PLANNING_CHECKLIST = {
  label: 'Microsoft 365 Copilot adoption planning checklist',
  url: 'https://adoption.microsoft.com/en-us/copilot/essential-guide/plan/',
};

export const enablementQuestions: Question[] = [
  {
    id: 'enab-01',
    dimension: 'enab',
    text: 'Are champions identified by name, and have their managers agreed to the time it will take?',
    why: "Microsoft's planning checklist makes champion selection a core task. The second half is where it usually fails: champions volunteer, their day job does not shrink, and the role quietly evaporates by week three.",
    pilotCritical: true,
    anchors: {
      0: 'No champions have been identified.',
      1: 'Champions are named but their managers have not agreed to the time, so the role depends on goodwill.',
      2: 'Champions are named, have accepted, and their managers have agreed to specific hours.',
      3: 'The champion role is recognised in how their contribution is assessed, not only in their calendar.',
    },
    conditions: {
      0: {
        action: "Identify champions by name before launch and secure their managers' agreement to the hours.",
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'champion-capacity',
      },
      1: {
        action: 'Get manager agreement to specific champion hours. A champion role funded from goodwill evaporates by week three.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'champion-capacity',
      },
    },
    source: PLANNING_CHECKLIST,
  },
  {
    id: 'enab-02',
    dimension: 'enab',
    text: 'Is champion coverage adequate for the cohort, with at least one reachable champion inside each team?',
    why: 'Champions work through proximity. A champion two floors away in a different function is an org chart entry, not a support network.',
    pilotCritical: false,
    anchors: {
      0: 'There is one champion for the whole cohort, or none within reach of most teams.',
      1: 'Champion coverage is uneven, and some teams have nobody nearby.',
      2: 'Every team in the cohort has at least one champion they can reach easily.',
      3: 'Coverage is planned against the rollout population, not only the pilot cohort.',
    },
    conditions: {
      0: {
        action: 'Recruit champions until every team in the cohort has one within reach.',
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'champion-coverage',
      },
      1: {
        action: 'Fill the coverage gaps for the teams currently without a nearby champion.',
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'champion-coverage',
      },
    },
  },
  {
    id: 'enab-03',
    dimension: 'enab',
    text: 'Is there a communications plan with an actual launch moment, rather than a single announcement email?',
    why: 'A launch moment creates a shared starting line, which is what makes peer learning possible. Staggered silent enablement produces isolated individuals.',
    pilotCritical: false,
    anchors: {
      0: 'The plan is a single announcement email, or nothing at all.',
      1: 'There is a communications plan but no shared starting moment, so the cohort begins in isolation from one another.',
      2: 'There is a communications plan with a launch moment the whole cohort attends, and a follow-up rhythm after it.',
      3: 'Communications are planned across the pilot and into rollout, with the sponsor visible at each milestone.',
    },
    conditions: {
      0: {
        action: 'Build a communications plan with an actual launch moment.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'comms-plan',
      },
      1: {
        action: 'Add a launch moment the whole cohort attends together.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'comms-plan',
      },
    },
  },
  {
    id: 'enab-04',
    dimension: 'enab',
    text: 'Is there one obvious place people go for help, prompts and resources?',
    why: "Scattered resources mean people ask nobody. Microsoft's guidance is explicit about having one place to share resources, host training and highlight what is working.",
    pilotCritical: false,
    anchors: {
      0: 'Resources are scattered across email, chat threads and personal drives, so people ask nobody.',
      1: 'A hub exists but is incomplete or hard to find, and people do not use it.',
      2: 'There is one obvious place holding help, prompts, training and contacts, and the cohort knows where it is.',
      3: 'The hub is maintained, and its content reflects what the cohort actually asks for.',
    },
    conditions: {
      0: {
        action: 'Create one findable place for help, prompts and resources before launch.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'enablement-hub',
      },
      1: {
        action: 'Complete the hub and point every communication at it so it becomes the default.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'enablement-hub',
      },
    },
    source: PLANNING_CHECKLIST,
  },
  {
    id: 'enab-05',
    dimension: 'enab',
    text: 'Is training actually scheduled with people enrolled, rather than "available on demand"?',
    why: 'On-demand training is completed by the people who least need it. A booked session with a date is the only version that reaches the median user.',
    pilotCritical: true,
    anchors: {
      0: 'Training is on demand only, or has not been arranged at all.',
      1: 'Sessions exist but are optional and unscheduled, so attendance is unknown.',
      2: 'Training is scheduled with named people enrolled and dates in calendars before launch.',
      3: 'Enrolment is tracked and followed up, and non-attendance is noticed and addressed.',
    },
    conditions: {
      0: {
        action: 'Schedule training with named enrolment before launch.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'training-scheduled',
      },
      1: {
        action: 'Convert the optional sessions into scheduled slots with named enrolment.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'training-scheduled',
      },
    },
  },
  {
    id: 'enab-06',
    dimension: 'enab',
    text: 'Is there an onboarding route for people who join the cohort after launch?',
    why: 'Every pilot gains people. Without a route in, latecomers get licences and no context, and they are the ones who show up as non-users in your data.',
    pilotCritical: false,
    anchors: {
      0: 'There is no route in for anyone joining after launch. Latecomers get a licence and nothing else.',
      1: 'Onboarding for latecomers is improvised by whoever happens to be available.',
      2: 'There is a defined onboarding route for people joining after launch, with an owner.',
      3: 'The route is self-service and works at rollout scale without the project team.',
    },
    conditions: {
      0: {
        action: 'Define an onboarding route for latecomers.',
        owner: 'coach',
        timing: 'during-pilot',
        mergeKey: 'late-joiner-onboarding',
      },
      1: {
        action: 'Give the improvised onboarding an owner and a written route.',
        owner: 'coach',
        timing: 'during-pilot',
        mergeKey: 'late-joiner-onboarding',
      },
    },
  },
  {
    id: 'enab-07',
    dimension: 'enab',
    text: 'Is there a named person accountable for enablement day to day, distinct from the executive sponsor?',
    why: 'Sponsors open doors, they do not run programmes. Pilots with a sponsor but no operational owner drift, because nobody\'s calendar owns the work. The Ready anchor also carries service desk readiness and champion readiness, since this owner is precisely who would have arranged both.',
    pilotCritical: true,
    anchors: {
      0: 'Nobody owns enablement day to day. The sponsor is expected to run it, or it falls between roles.',
      1: 'Someone is doing the work informally alongside their job, with the role neither recognised nor resourced.',
      2: 'A named person owns enablement day to day with allocated time, and has already briefed the service desk on handling Copilot tickets and trained the champions ahead of the cohort.',
      3: 'The role is permanent rather than pilot-scoped, and continues into rollout with a defined remit.',
    },
    conditions: {
      0: {
        action: 'Name a person accountable for enablement day to day, distinct from the sponsor, and give them allocated time.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'enablement-owner',
      },
      1: {
        action: 'Recognise and resource the role formally, and have that owner brief the service desk and train the champions before the cohort starts.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'enablement-owner',
      },
    },
  },
];
