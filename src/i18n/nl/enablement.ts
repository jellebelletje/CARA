import type { QuestionOverlay } from '../questionText';

export const nlEnablement: Record<string, QuestionOverlay> = {
  'enab-01': {
    text: 'Zijn de champions bij naam bekend, en hebben hun leidinggevenden ingestemd met de tijd die het kost?',
    why: 'De planningschecklist van Microsoft maakt het kiezen van champions een kerntaak. Het tweede deel is waar het meestal misgaat: champions melden zich, hun eigen werk wordt niet minder, en in week drie is de rol stilletjes verdampt.',
    anchors: {
      0: 'Er zijn geen champions aangewezen.',
      1: 'De champions zijn bij naam bekend, maar hun leidinggevenden hebben geen tijd toegezegd, dus de rol drijft op goede wil.',
      2: 'De champions zijn bekend, hebben de rol aanvaard, en hun leidinggevenden hebben concrete uren toegezegd.',
      3: 'De rol van champion telt mee in hoe hun bijdrage beoordeeld wordt, en niet alleen in hun agenda.',
    },
    conditions: {
      0: 'Wijs voor de start champions bij naam aan en haal de toezegging van hun leidinggevenden op de uren binnen.',
      1: 'Laat leidinggevenden concrete uren toezeggen. Een rol van champion die op goede wil drijft, is in week drie verdampt.',
    },
  },

  'enab-02': {
    text: 'Is de dekking van champions toereikend, met minstens een bereikbare champion binnen elk team?',
    why: 'Champions werken via nabijheid. Een champion twee verdiepingen verderop bij een andere afdeling is een vakje in het organogram, geen vangnet.',
    anchors: {
      0: 'Er is een champion voor de hele groep, of geen enkele binnen bereik van de meeste teams.',
      1: 'De dekking is ongelijk, en sommige teams hebben niemand in de buurt.',
      2: 'Elk team in de groep heeft minstens een champion die makkelijk te bereiken is.',
      3: 'De dekking is uitgedacht voor de hele uitrolpopulatie, niet alleen voor de pilotgroep.',
    },
    conditions: {
      0: 'Werf champions tot elk team in de groep er een binnen bereik heeft.',
      1: 'Vul de gaten voor de teams die nu niemand in de buurt hebben.',
    },
  },

  'enab-03': {
    text: 'Is er een communicatieplan met een echt startmoment, en niet alleen een aankondigingsmail?',
    why: 'Een startmoment maakt een gedeelde startstreep, en dat is wat leren van elkaar mogelijk maakt. Stilletjes gespreid uitrollen levert losse individuen op.',
    anchors: {
      0: 'Het plan is een enkele aankondigingsmail, of helemaal niets.',
      1: 'Er is een communicatieplan maar geen gedeeld startmoment, dus de groep begint los van elkaar.',
      2: 'Er is een communicatieplan met een startmoment waar de hele groep bij is, en een ritme daarna.',
      3: 'De communicatie loopt door tot in de uitrol, met de sponsor zichtbaar op elk ijkmoment.',
    },
    conditions: {
      0: 'Maak een communicatieplan met een echt startmoment erin.',
      1: 'Voeg een startmoment toe waar de hele groep samen bij is.',
    },
  },

  'enab-04': {
    text: 'Is er een voor de hand liggende plek waar mensen terechtkunnen voor hulp, prompts en materiaal?',
    why: 'Verspreid materiaal betekent dat mensen niemand vragen. De richtlijnen van Microsoft zijn expliciet over een plek om materiaal te delen, training te hosten en te laten zien wat werkt.',
    anchors: {
      0: 'Het materiaal is verspreid over mail, chatgesprekken en persoonlijke schijven, dus mensen vragen niemand iets.',
      1: 'Er is een plek, maar die is onvolledig of moeilijk te vinden, en mensen gebruiken hem niet.',
      2: 'Er is een voor de hand liggende plek met hulp, prompts, training en contactpersonen, en de groep weet hem te vinden.',
      3: 'De plek wordt onderhouden, en de inhoud volgt waar de groep werkelijk om vraagt.',
    },
    conditions: {
      0: 'Maak voor de start een vindbare plek voor hulp, prompts en materiaal.',
      1: 'Maak de plek af en verwijs er vanuit elke communicatie naar, zodat hij de standaard wordt.',
    },
  },

  'enab-05': {
    text: 'Staat de training echt ingepland met mensen erop ingeschreven, in plaats van "beschikbaar op aanvraag"?',
    why: 'Training op aanvraag wordt gevolgd door precies de mensen die haar het minst nodig hebben. Een geboekte sessie met een datum is de enige versie die de gemiddelde gebruiker bereikt.',
    anchors: {
      0: 'De training is alleen op aanvraag, of nog helemaal niet geregeld.',
      1: 'Er zijn sessies, maar ze zijn vrijblijvend en niet ingepland, dus wie er komt weet je niet.',
      2: 'De training staat ingepland met mensen bij naam ingeschreven en data in de agenda, voor de start.',
      3: 'Inschrijvingen worden bijgehouden en opgevolgd, en wie niet komt opdagen valt op en wordt aangesproken.',
    },
    conditions: {
      0: 'Plan de training in met inschrijvingen op naam, voor de start.',
      1: 'Zet de vrijblijvende sessies om in ingeplande momenten met inschrijving op naam.',
    },
  },

  'enab-06': {
    text: 'Is er een route om mensen in te werken die pas na de start bij de groep komen?',
    why: 'Elke pilot krijgt er mensen bij. Zonder route naar binnen krijgen laatkomers een licentie en verder niets, en precies zij duiken in je cijfers op als niet-gebruikers.',
    anchors: {
      0: 'Er is geen route naar binnen voor wie na de start aanschuift. Laatkomers krijgen een licentie en verder niets.',
      1: 'Laatkomers worden ingewerkt door wie er toevallig tijd voor heeft.',
      2: 'Er is een vastgelegde route voor wie na de start instroomt, met een eigenaar.',
      3: 'Die route werkt zelfstandig en houdt stand op uitrolschaal, zonder het projectteam.',
    },
    conditions: {
      0: 'Leg een route vast voor het inwerken van laatkomers.',
      1: 'Geef het geïmproviseerde inwerken een eigenaar en zet de route op papier.',
    },
  },

  'enab-07': {
    text: 'Is er iemand met naam die dagelijks verantwoordelijk is voor enablement, los van de executive sponsor?',
    why: 'Sponsors openen deuren, ze draaien geen programma. Pilots met een sponsor maar zonder operationele eigenaar zakken weg, omdat het werk in niemands agenda staat.',
    anchors: {
      0: 'Niemand is dagelijks eigenaar van enablement. Er wordt van de sponsor verwacht dat die het doet, of het valt tussen rollen in.',
      1: 'Iemand doet het informeel naast het eigen werk, zonder dat de rol erkend of belegd is.',
      2: 'Iemand met naam is dagelijks eigenaar met tijd ervoor, en heeft de servicedesk al gebriefd over Copilot-meldingen en de champions al getraind voordat de groep begint.',
      3: 'De rol is blijvend en niet aan de pilot gebonden, en loopt met een vastgelegde opdracht door in de uitrol.',
    },
    conditions: {
      0: 'Wijs iemand met naam aan die dagelijks verantwoordelijk is voor enablement, los van de sponsor, en geef die persoon tijd.',
      1: 'Erken de rol formeel en beleg hem, en laat die eigenaar de servicedesk briefen en de champions trainen voordat de groep begint.',
    },
  },
};
