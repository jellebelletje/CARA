/**
 * The instruments a complete Copilot decision needs. CARA is one of four
 * stages, and this is shown on the intro screen rather than only linked from
 * the README, because someone about to run a readiness conversation needs to
 * know what CARA does not cover before they start.
 */
export interface StackLink {
  label: string;
  url: string;
  /** What it assesses, and where it is run. Empty for pure reference reading. */
  detail?: string;
  where?: string;
}

export interface Stage {
  number: number;
  question: string;
  /** True for the stage CARA itself occupies. */
  isCara: boolean;
  links: StackLink[];
}

export const microsoftStack: Stage[] = [
  {
    number: 1,
    question: 'Can we deploy safely?',
    isCara: false,
    links: [
      {
        label: 'Copilot Optimization Assessment',
        url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-enablement-resources',
        detail:
          'Data governance maturity and data security controls. Microsoft recommends completing it before deploying.',
        where: 'M365 admin center, Copilot, Settings, Readiness',
      },
      {
        label: 'Copilot Readiness Report',
        url: 'https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/microsoft-365-copilot-readiness',
        detail:
          'Technical eligibility, prerequisite licences, update channels, and assigned versus available licences.',
        where: 'M365 admin center, Reports',
      },
      {
        label: 'Purview DSPM for AI data risk assessments',
        url: 'https://learn.microsoft.com/en-us/purview/data-security-posture-management-oversharing',
        detail:
          'Oversharing exposure. Which sites and files Copilot could surface, and which sensitive content is unlabelled.',
        where: 'Purview portal, DSPM, Discover, Data risk assessments',
      },
      {
        label: 'SharePoint Advanced Management content assessment',
        url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/get-ready-copilot-sharepoint-advanced-management',
        detail:
          'Sites that are overshared, ownerless or inactive, oversized audiences and broken permission inheritance.',
        where: 'SharePoint admin center',
      },
      {
        label: 'Copilot Control System, security and governance',
        url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/copilot-control-system/security-governance',
      },
      {
        label: 'Configure a secure and governed data foundation',
        url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/configure-secure-governed-data-foundation-microsoft-365-copilot',
      },
    ],
  },
  {
    number: 2,
    question: 'Can the organisation absorb the change?',
    isCara: true,
    links: [
      {
        label: 'Copilot adoption planning checklist',
        url: 'https://adoption.microsoft.com/en-us/copilot/essential-guide/plan/',
      },
      {
        label: 'Copilot Success Kit',
        url: 'https://adoption.microsoft.com/en-us/copilot/success-kit/',
      },
      {
        label: 'The essential guide to Copilot adoption',
        url: 'https://adoption.microsoft.com/en-us/copilot/essential-guide/',
      },
    ],
  },
  {
    number: 3,
    question: 'Are people adopting it?',
    isCara: false,
    links: [
      {
        label: 'AI Adoption Score',
        url: 'https://learn.microsoft.com/en-us/microsoft-365/admin/adoption/ai-adoption-score',
        detail: 'Habit formation against a target of 12 active days in 28.',
        where: 'M365 admin center, Adoption Score',
      },
      {
        label: 'Copilot adoption report',
        url: 'https://learn.microsoft.com/en-us/viva/insights/advanced/analyst/templates/microsoft-365-copilot-adoption',
        detail:
          'Adoption by group, app and feature, with the power, habitual and novice user definitions.',
        where: 'Viva Insights, analyst experience',
      },
    ],
  },
  {
    number: 4,
    question: 'Is it producing value?',
    isCara: false,
    links: [
      {
        label: 'Copilot impact report',
        url: 'https://learn.microsoft.com/en-us/viva/insights/advanced/analyst/templates/microsoft-365-copilot-impact',
        detail: 'Assisted hours and before-and-after collaboration patterns.',
        where: 'Viva Insights, analyst experience',
      },
      {
        label: 'Copilot Business Impact report',
        url: 'https://learn.microsoft.com/en-us/viva/insights/advanced/analyst/templates/copilot-business-impact',
        detail: 'Joins Copilot telemetry to your own business outcome measures.',
        where: 'Viva Insights, analyst experience',
      },
    ],
  },
];
