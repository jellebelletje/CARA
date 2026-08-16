import type { Question } from '../types';

export const skillsQuestions: Question[] = [
  {
    id: 'skill-01',
    dimension: 'skill',
    text: 'Can the cohort write a prompt that supplies context, and do they understand why a bare one-line request underperforms?',
    why: 'The floor skill. Nearly all "Copilot gave me rubbish" reports in early pilots trace back to context-free prompting, and it is cheap to fix before launch rather than after people have formed a verdict.',
    pilotCritical: false,
    anchors: {
      0: 'The cohort has had no prompting guidance, and the plan assumes that typing a question is enough.',
      1: 'People have seen example prompts but have not practised, and cannot explain why context changes the result.',
      2: 'The cohort has practised prompting on their own work and can iterate on a poor result rather than abandoning it.',
      3: 'People routinely refine and reuse prompts, and can teach the practice to someone else.',
    },
    conditions: {
      0: {
        action: "Run prompting practice on the cohort's own scenarios before launch, rather than a generic demonstration.",
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'core-skilling',
      },
      1: {
        action: 'Convert the example prompts into a hands-on practice session using real work.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'core-skilling',
      },
    },
  },
  {
    id: 'skill-02',
    dimension: 'skill',
    text: 'Does the cohort know how to verify Copilot output, and can they say which of their tasks demand verification before the output is used?',
    why: 'Verification is the skill that makes the accountability standard operable. Note the second half: knowing how to check matters less than knowing when you must.',
    pilotCritical: true,
    anchors: {
      0: 'Nobody has been told to check Copilot output, and people cannot say which of their tasks would be harmed by an error.',
      1: 'People know they should check output in general, but cannot distinguish work that requires verification from work that does not.',
      2: 'The cohort can name which of their tasks require verification before the output is used, and knows how to carry that check out.',
      3: 'Verification is a visible norm, and people routinely flag AI-assisted work for review where the accountability standard requires it.',
    },
    conditions: {
      0: {
        action: 'Train verification alongside prompting before launch, tied explicitly to the accountability standard leadership has set for AI-assisted work.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'core-skilling',
      },
      1: {
        action: 'Have each role classify its own tasks by whether output requires verification before use.',
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'core-skilling',
      },
    },
  },
  {
    id: 'skill-03',
    dimension: 'skill',
    text: "Do people know what they may and may not put into Copilot, in terms of their own organisation's data classification?",
    why: 'Sits at the intersection of skill and risk. A cohort that is guessing produces either a data incident or paralysed under-use, and both are avoidable with one short briefing.',
    pilotCritical: true,
    anchors: {
      0: 'People do not know what they may put into Copilot, and no guidance has been issued.',
      1: 'A general data policy exists but has not been translated into what it means for Copilot specifically.',
      2: 'The cohort has clear, Copilot-specific guidance on what data may be used, expressed in their own classification terms.',
      3: 'The guidance is reinforced by technical controls such as sensitivity labels, so the rule is enforced rather than remembered.',
    },
    conditions: {
      0: {
        action: 'Issue Copilot-specific data handling guidance before launch.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'data-handling-guidance',
      },
      1: {
        action: "Translate the general policy into Copilot-specific rules in the cohort's own classification language.",
        owner: 'joint',
        timing: 'before-pilot',
        mergeKey: 'data-handling-guidance',
      },
    },
  },
  {
    id: 'skill-04',
    dimension: 'skill',
    text: 'Is there capability in the specific applications the scenarios need, or only general Copilot Chat literacy?',
    why: 'Copilot in Excel and Copilot in Word behave very differently. Chat-only skilling strands scenario owners the moment a scenario touches a document or a spreadsheet.',
    pilotCritical: false,
    anchors: {
      0: 'Skilling covers Copilot Chat only, while the scenarios depend on Copilot inside Word, Excel or Teams.',
      1: 'Application-specific capability is assumed but has neither been taught nor checked.',
      2: 'The cohort has been skilled in the specific applications their scenarios require.',
      3: 'Application capability is maintained per role, and new applications are added as scenarios expand.',
    },
    conditions: {
      0: {
        action: 'Extend skilling to cover the specific applications the scenarios need.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'app-specific-skilling',
      },
      1: {
        action: 'Confirm application capability with a short practical check rather than assuming it.',
        owner: 'coach',
        timing: 'during-pilot',
        mergeKey: 'app-specific-skilling',
      },
    },
  },
  {
    id: 'skill-05',
    dimension: 'skill',
    text: 'Do people have a sense of when not to reach for Copilot at all?',
    why: 'Over-application produces worse results than non-use and burns credibility faster. Distinct from verification, because this is about task selection rather than output checking.',
    pilotCritical: false,
    anchors: {
      0: 'The message has been to use it for everything, with no guidance on where it is a poor fit.',
      1: 'People sense there are limits but hold no shared view of where those limits lie.',
      2: 'The cohort can name task types where they would not use Copilot, and say why.',
      3: 'Judgement about fit is discussed openly, and people share where it did not work as readily as where it did.',
    },
    conditions: {
      0: {
        action: 'Include where not to use Copilot in the launch briefing.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'fit-judgement',
      },
      1: {
        action: "Collect and publish the cohort's own list of poor-fit tasks during the pilot.",
        owner: 'coach',
        timing: 'during-pilot',
        mergeKey: 'fit-judgement',
      },
    },
  },
  {
    id: 'skill-06',
    dimension: 'skill',
    text: 'Is the underlying M365 hygiene in place that Copilot depends on, such as files in SharePoint or OneDrive rather than local drives, and meetings actually transcribed?',
    why: 'Copilot can only reason over what it can see. A cohort that emails attachments around and never records meetings has capped Copilot before anyone types a prompt.',
    pilotCritical: true,
    anchors: {
      0: 'Work lives on local drives or in email attachments, and meetings are neither recorded nor transcribed.',
      1: 'Practice is mixed. Some teams work in SharePoint or OneDrive and others do not, so results will vary unpredictably across the cohort.',
      2: "The cohort's working content is in SharePoint or OneDrive, and relevant meetings are transcribed as a matter of course.",
      3: 'Content hygiene is managed deliberately, and the organisation treats it as a precondition for AI rather than a filing preference.',
    },
    conditions: {
      0: {
        action: 'Fix content hygiene for the cohort before launch, or accept that Copilot has been capped before anyone types a prompt.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'm365-hygiene',
      },
      1: {
        action: 'Bring the lagging teams up to the same content practice, so results are comparable across the cohort.',
        owner: 'organisation',
        timing: 'before-pilot',
        mergeKey: 'm365-hygiene',
      },
    },
  },
  {
    id: 'skill-07',
    dimension: 'skill',
    text: 'Is there a way for the cohort to find and reuse prompts that worked for their colleagues?',
    why: 'Peer prompt reuse is the fastest observed route from novice to habitual use, and it costs almost nothing to set up.',
    pilotCritical: false,
    anchors: {
      0: 'There is no way to see what has worked for anyone else. Everyone starts from zero.',
      1: 'Prompts are shared ad hoc in chat threads, where they are lost within days.',
      2: "There is a shared, findable place where working prompts are collected against the cohort's scenarios.",
      3: 'The prompt collection is curated and actively used, and the best prompts are promoted into the scenario definitions.',
    },
    conditions: {
      0: {
        action: 'Set up a shared prompt collection before launch.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'prompt-sharing',
      },
      1: {
        action: 'Move ad hoc prompt sharing into a findable, persistent place.',
        owner: 'coach',
        timing: 'during-pilot',
        mergeKey: 'prompt-sharing',
      },
    },
  },
  {
    id: 'skill-08',
    dimension: 'skill',
    text: 'Is there a plan to refresh skills as Copilot capabilities change?',
    why: 'The product moves faster than most training cycles. Skilling delivered once decays into folklore within a couple of quarters.',
    pilotCritical: false,
    anchors: {
      0: 'Skilling is a one-off event with no plan beyond it.',
      1: 'Refreshers are intended but unscheduled and unowned.',
      2: 'There is a scheduled route for keeping skills current as capabilities change, with a named owner.',
      3: 'Skill refresh is business as usual and tracks the Microsoft release cadence.',
    },
    conditions: {
      0: {
        action: 'Plan how skills stay current past launch, with dates and an owner.',
        owner: 'coach',
        timing: 'before-rollout',
        mergeKey: 'skill-currency',
      },
      1: {
        action: 'Put dates and an owner against the intended refreshers.',
        owner: 'organisation',
        timing: 'before-rollout',
        mergeKey: 'skill-currency',
      },
    },
  },
  {
    id: 'skill-09',
    dimension: 'skill',
    text: "Has anyone actually measured the cohort's starting skill level, rather than assuming it?",
    why: 'Skilling designed against an assumed baseline usually pitches too high. This is also the cheapest way to evidence a skills gain later.',
    pilotCritical: false,
    anchors: {
      0: 'Nobody has checked what the cohort can already do, and skilling has been designed on assumption.',
      1: 'Starting level is known impressionistically for a few individuals, not for the cohort.',
      2: "The cohort's starting skill level has been checked, and skilling is pitched against what was found.",
      3: 'The same check will be repeated at the end, so skill gain is evidenced rather than claimed.',
    },
    conditions: {
      0: {
        action: 'Run a short skills check before designing the skilling.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'skills-baseline',
      },
      1: {
        action: 'Extend the impressionistic read into a quick check across the whole cohort.',
        owner: 'coach',
        timing: 'before-pilot',
        mergeKey: 'skills-baseline',
      },
    },
  },
];
