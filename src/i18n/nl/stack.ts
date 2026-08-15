/**
 * Dutch for the four-stage Microsoft panel. Instrument names stay in English
 * because that is what they are called in the admin centre, and translating
 * them would leave someone hunting for a menu item that does not exist.
 */
export interface StackOverlay {
  question?: string;
  links?: Record<string, { detail?: string; where?: string }>;
}

export const nlStack: Record<number, StackOverlay> = {
  1: {
    question: 'Kunnen we veilig uitrollen?',
    links: {
      'https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-enablement-resources':
        {
          detail:
            'Volwassenheid van datagovernance en de databeveiliging. Microsoft raadt aan dit af te ronden voor je uitrolt.',
          where: 'M365 admin center, Copilot, Instellingen, Readiness',
        },
      'https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/microsoft-365-copilot-readiness':
        {
          detail:
            'Technische geschiktheid, vereiste licenties, updatekanalen, en toegekende tegenover beschikbare licenties.',
          where: 'M365 admin center, Rapporten',
        },
      'https://learn.microsoft.com/en-us/purview/data-security-posture-management-oversharing': {
        detail:
          'Blootstelling door overdeling. Welke sites en bestanden Copilot naar boven kan halen, en welke gevoelige inhoud geen label heeft.',
        where: 'Purview portal, DSPM, Discover, Data risk assessments',
      },
      'https://learn.microsoft.com/en-us/microsoft-365/copilot/get-ready-copilot-sharepoint-advanced-management':
        {
          detail:
            'Sites die te breed gedeeld, eigenaarloos of inactief zijn, te grote doelgroepen, en doorbroken rechtenovererving.',
          where: 'SharePoint admin center',
        },
    },
  },
  2: {
    question: 'Kan de organisatie de verandering aan?',
  },
  3: {
    question: 'Gaan mensen het echt gebruiken?',
    links: {
      'https://learn.microsoft.com/en-us/microsoft-365/admin/adoption/ai-adoption-score': {
        detail: 'Gewoontevorming, afgezet tegen een doel van 12 actieve dagen in 28.',
        where: 'M365 admin center, Adoption Score',
      },
      'https://learn.microsoft.com/en-us/viva/insights/advanced/analyst/templates/microsoft-365-copilot-adoption':
        {
          detail:
            'Gebruik per groep, app en functie, met de definities van power user, vaste gebruiker en beginner.',
          where: 'Viva Insights, analystomgeving',
        },
    },
  },
  4: {
    question: 'Levert het ook echt iets op?',
    links: {
      'https://learn.microsoft.com/en-us/viva/insights/advanced/analyst/templates/microsoft-365-copilot-impact':
        {
          detail: 'Ondersteunde uren, en samenwerkingspatronen voor en na invoering.',
          where: 'Viva Insights, analystomgeving',
        },
      'https://learn.microsoft.com/en-us/viva/insights/advanced/analyst/templates/copilot-business-impact':
        {
          detail: 'Koppelt de Copilot-cijfers aan je eigen bedrijfsresultaten.',
          where: 'Viva Insights, analystomgeving',
        },
    },
  },
};
