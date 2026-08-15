import type { Question } from '../types';

const WTI_2026 = {
  label: 'Microsoft Work Trend Index 2026',
  url: 'https://blogs.microsoft.com/blog/2026/05/05/how-frontier-firms-are-rebuilding-the-operating-model-for-the-age-of-ai/',
};

const PLANNING_CHECKLIST = {
  label: 'Microsoft 365 Copilot adoption planning checklist',
  url: 'https://adoption.microsoft.com/en-us/copilot/essential-guide/plan/',
};

export const leadershipQuestions: Question[] = [
  {
    id: 'lead-01',
    dimension: 'lead',
    text: "Is there a named executive sponsor with authority over the pilot cohort's priorities and budget?",
    why: "Not whether leadership is supportive, but whether you can write a person's name down. Microsoft's planning checklist makes this task one, and an unnamed sponsor is the most common silent failure.",
    pilotCritical: true,
    anchors: {
      0: 'Nobody can name a sponsor, or the person named has no authority over the cohort and has never been asked.',
      1: 'A sponsor is named but has not been briefed, has said nothing publicly, or cannot actually release the cohort\'s time.',
      2: "A named sponsor has agreed the pilot in writing, can release the cohort's time and budget, and has a speaking slot at launch.",
      3: 'The sponsor is accountable for a stated AI outcome that outlives this pilot, and other leaders defer to them on it.',
    },
    conditions: {
      0: {
        action: "Identify a sponsor with real authority over the cohort's time and budget, and secure their agreement in writing before any licence is assigned.",
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'sponsor',
      },
      1: {
        action: 'Brief the named sponsor and secure one visible commitment from them, such as opening the launch session.',
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'sponsor',
      },
    },
    source: PLANNING_CHECKLIST,
  },
  {
    id: 'lead-02',
    dimension: 'lead',
    text: 'Can leadership state why Copilot, why now, in terms of a business goal rather than "AI is important"?',
    why: 'Participants who cannot answer "why are we doing this" default to treating the pilot as an IT experiment they are free to ignore.',
    pilotCritical: false,
    anchors: {
      0: 'The pilot is described in terms of the technology, with no business goal attached to it at all.',
      1: 'A rationale exists but it is generic AI ambition, not specific to what this organisation is trying to achieve this year.',
      2: 'Leaders can state the business goal the pilot serves and connect it to something the cohort already cares about.',
      3: 'The rationale is written down, repeated consistently by more than one leader, and the cohort can play it back unprompted.',
    },
    conditions: {
      0: {
        action: 'Run a one-hour framing session with the sponsor to produce a written why-now statement tied to a current business goal.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'narrative',
      },
      1: {
        action: 'Sharpen the rationale into cohort-specific language and have the sponsor deliver it at launch.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'narrative',
      },
    },
  },
  {
    id: 'lead-03',
    dimension: 'lead',
    text: "Do the pilot cohort's line managers visibly use Copilot themselves, in front of their teams?",
    why: 'Work Trend Index 2026 found organisational factors carry roughly twice the AI impact of individual factors, and Frontier Professionals have a manager who openly uses AI 85% of the time against 64% for their peers. This is the strongest lever available before launch.',
    pilotCritical: true,
    anchors: {
      0: 'No manager in the cohort holds a licence, or managers have delegated Copilot entirely to their teams.',
      1: 'Some managers are licensed and curious, but nothing is visible to their teams. No demos, no shared prompts, no mention in team meetings.',
      2: 'Named cohort managers have committed to a recurring visible ritual using Copilot, and to sharing what worked.',
      3: 'Manager modelling is expected practice beyond the cohort, managers set quality standards for AI-assisted output, and peers can name specific examples.',
    },
    conditions: {
      0: {
        action: "Licence and brief the cohort's line managers before any end-user launch. A pilot whose managers are absent produces adoption data you cannot trust.",
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'manager-enablement',
      },
      1: {
        action: 'Run a 60-minute manager enablement session and agree one visible weekly ritual per manager.',
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'manager-enablement',
      },
    },
    source: WTI_2026,
  },
  {
    id: 'lead-04',
    dimension: 'lead',
    text: 'Have leaders said out loud what happens to time that Copilot frees up?',
    why: 'The unspoken headcount question. Left unanswered, people quietly under-report time saved, which corrupts the value measurement you are running the pilot to produce.',
    pilotCritical: false,
    anchors: {
      0: 'Employees have raised the question and leadership has avoided answering it.',
      1: 'Leaders hold an intention but have not stated it publicly, so the cohort is left to infer the answer.',
      2: 'Leaders have stated publicly what freed time is for, in terms the cohort finds credible.',
      3: 'The statement is backed by a visible example, such as work leadership has explicitly stopped asking for.',
    },
    conditions: {
      0: {
        action: 'Agree a leadership position on what freed-up time is for and state it before launch. Silence is read as a headcount answer and suppresses reported time savings.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'time-freed',
      },
      1: {
        action: 'Have the sponsor state the position publicly at launch rather than leaving it implicit.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'time-freed',
      },
    },
  },
  {
    id: 'lead-05',
    dimension: 'lead',
    text: 'Have leaders set an accountability standard for AI-assisted output, covering who owns it and what must be checked before it leaves the building?',
    why: 'One embarrassing unverified output can kill a pilot politically. Work Trend Index 2026 flags setting quality standards for AI as a Frontier-manager marker, 83% against 57%.',
    pilotCritical: true,
    anchors: {
      0: 'Nobody has said who is answerable for AI-assisted output, and there is no rule about checking it before use.',
      1: 'There is an informal understanding that people should check their work, but nothing written and nothing specific to AI output.',
      2: 'A written standard states that the human sender owns the output, and names which categories of work require verification before release.',
      3: 'The standard is embedded in existing quality and review processes rather than living as a separate AI policy, and managers actually apply it.',
    },
    conditions: {
      0: {
        action: 'Publish a one-page accountability standard covering who owns AI-assisted output and which work requires verification before it leaves the organisation.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'accountability-standard',
      },
      1: {
        action: 'Convert the informal understanding into a written standard and have managers reference it at launch.',
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'accountability-standard',
      },
    },
    source: WTI_2026,
  },
  {
    id: 'lead-06',
    dimension: 'lead',
    text: 'Is there budget for enablement, meaning training, champion time and comms, separate from the licence spend?',
    why: 'Licences get funded and the change work often does not, after which champions are asked to do it in their spare time.',
    pilotCritical: false,
    anchors: {
      0: 'Only licences are funded. Training, champion time and comms have no budget and no allocated hours.',
      1: 'Some enablement is funded informally, typically by asking people to absorb it inside existing roles.',
      2: 'Enablement has its own budget line or explicitly allocated hours, separate from licence spend.',
      3: 'Enablement funding is planned across the rollout horizon, not only the pilot window.',
    },
    conditions: {
      0: {
        action: 'Secure a distinct enablement budget or allocated hours before launch. Champion effort funded from goodwill stops the moment delivery pressure arrives.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'enablement-budget',
      },
      1: {
        action: 'Formalise the informal enablement effort into named hours per person for the pilot period.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'enablement-budget',
      },
    },
  },
  {
    id: 'lead-07',
    dimension: 'lead',
    text: 'Are IT, security, HR/People and the business function aligned behind this, or is it an IT-initiated project?',
    why: 'An IT-only pilot can deploy but cannot change behaviour. The absence of HR/People in particular shows up later as no skilling and no manager engagement.',
    pilotCritical: false,
    anchors: {
      0: 'The pilot is IT-initiated, and neither the business function nor HR/People has been engaged.',
      1: 'Other functions have been informed but hold no stake, no tasks and no representation in the pilot team.',
      2: 'IT, security, HR/People and the business function each have a named representative with tasks in the pilot plan.',
      3: 'Those functions share a standing forum for AI adoption that outlives this pilot.',
    },
    conditions: {
      0: {
        action: 'Bring the business function and HR/People into the pilot team with named representatives, or accept that the pilot tests deployment rather than adoption.',
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'cross-function',
      },
      1: {
        action: 'Give each function a specific task in the pilot plan so involvement is real rather than nominal.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'cross-function',
      },
    },
    source: PLANNING_CHECKLIST,
  },
];
