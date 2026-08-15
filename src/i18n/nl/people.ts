import type { QuestionOverlay } from '../questionText';

export const nlPeople: Record<string, QuestionOverlay> = {
  'ppl-01': {
    text: 'Weet de pilotgroep dat ze in een pilot zitten, en hebben ze zich aangemeld in plaats van aangewezen te zijn?',
    why: 'Aangewezen deelnemers leveren gehoorzaamheid op, geen gebruik. Het verandert bovendien wat de cijfers betekenen: weinig gebruik door een opgetrommelde groep zegt niets over Copilot.',
    anchors: {
      0: 'De groep weet niet dat ze in een pilot zitten, of is aangewezen zonder dat het gevraagd is.',
      1: 'Het is verteld, maar deelname werd gebracht als een opdracht en niet als een keuze.',
      2: 'De groep weet dat ze in een pilot zitten en wat er van hen verwacht wordt, en had een echte mogelijkheid om nee te zeggen.',
      3: 'Er is meer animo om mee te doen dan er plekken zijn, en er is een wachtlijst.',
    },
    conditions: {
      0: 'Vertel de groep voordat de licenties komen dat ze in een pilot zitten en wat er van hen verwacht wordt. Opgetrommelde deelnemers leveren gehoorzaamheidsdata op, geen adoptiedata.',
      1: 'Bied een echte mogelijkheid om af te haken en kijk wie er overblijft, zodat weinig gebruik een signaal is en geen verzet.',
    },
  },

  'ppl-02': {
    text: 'Weet je hoe de groep nu tegenover AI op het werk staat, gemeten in plaats van aangenomen?',
    why: 'Dit is de nulmeting aan de menskant, en net als bij de waarde is die onherstelbaar weg zodra de licenties landen. Een korte peiling nu is wat je later in staat stelt een verschuiving te laten zien.',
    anchors: {
      0: 'Niemand heeft de groep gevraagd hoe ze tegenover AI op het werk staan, en het plan gaat uit van enthousiasme.',
      1: 'Het beeld komt uit een paar gesprekken en zit in niemands hoofd op een herhaalbare manier.',
      2: 'Er is voor de start een korte peiling gehouden onder de groep en de uitkomst is vastgelegd.',
      3: 'De peiling gebruikt vragen die aan het eind terugkomen, en er is vergelijkbaar materiaal uit eerdere verandertrajecten.',
    },
    conditions: {
      0: 'Houd voor de start een korte peiling over houding en vertrouwen. Deze nulmeting kun je niet meer maken zodra de licenties er zijn.',
      1: 'Zet het losse beeld om in een korte vastgelegde peiling die je aan het eind kunt herhalen.',
    },
  },

  'ppl-03': {
    text: 'Zijn de ondernemingsraad, de personeelsvertegenwoordiging of de vakbond betrokken waar overleg verplicht is?',
    why: 'In een groot deel van Europa is dit een wettelijke horde en geen beleefdheid. Ontdek je het in week twee, dan ligt de pilot stil, en het terugdraaien kost weken.',
    anchors: {
      0: 'Overleg is verplicht en nog niet begonnen, of niemand heeft uitgezocht of het verplicht is.',
      1: 'Het overleg loopt maar is niet afgerond, en de startdatum gaat ervan uit dat het op tijd rond komt.',
      2: 'Het verplichte overleg is afgerond en de uitkomst is vastgelegd.',
      3: 'De personeelsvertegenwoordiging denkt mee over het ontwerp en wordt niet alleen geraadpleegd over het besluit.',
    },
    conditions: {
      0: 'Zoek uit of overleg met de ondernemingsraad of personeelsvertegenwoordiging wettelijk verplicht is, en rond het af voor de start.',
      1: 'Rond het lopende overleg af en leg de uitkomst vast voordat je je aan een startdatum bindt.',
    },
  },

  'ppl-04': {
    text: 'Is er een duidelijke, gecommuniceerde lijn over wat er wel en niet met de gebruiksdata van Copilot gebeurt, en zeker op persoonsniveau?',
    why: 'Je gaat het werk van mensen meten. Als niemand heeft gezegd "dit komt niet in je beoordeling terecht", dan houdt een deel van de groep zich met goede reden in.',
    anchors: {
      0: 'Er is niets over gezegd, en de groep vraagt er niet naar omdat ze het ergste aanneemt.',
      1: 'Er is intern een bedoeling over data op persoonsniveau, maar die is niet naar de groep gecommuniceerd.',
      2: 'Er is helder gecommuniceerd wat er gemeten wordt, op welk niveau, en expliciet waarvoor het niet gebruikt wordt.',
      3: 'Die belofte wordt gedekt door hoe de rapportage daadwerkelijk is ingericht, dus hij is afgedwongen en niet alleen uitgesproken.',
    },
    conditions: {
      0: 'Zeg voor de start publiekelijk wat er wel en niet met de gebruiksdata gebeurt, en met name of het in individuele beoordelingsgesprekken terechtkomt.',
      1: 'Communiceer de interne lijn naar de groep in plaats van hen zelf te laten invullen wat er gebeurt.',
    },
  },

  'ppl-05': {
    text: 'Heeft de groep tijdens de pilot ruimte om te leren, of zitten ze tot de rand vol?',
    why: 'Een nieuw hulpmiddel leren kost eerst tijd voordat het tijd oplevert. Een groep zonder lucht valt bij de eerste deadline terug in oude gewoonten, en dat lees je dan verkeerd als een falend hulpmiddel.',
    anchors: {
      0: 'De groep zit op of boven volle bezetting, zonder tijd voor leren.',
      1: 'Leren moet erbij, naast een onveranderde werklast, en dus feitelijk in eigen tijd.',
      2: 'Er is expliciet tijd vrijgemaakt om te leren en te proberen, en leidinggevenden hebben toegezegd die te beschermen.',
      3: 'Leertijd is een vast onderdeel van hoe deze teams werken, en geen tijdelijke uitzondering voor de pilot.',
    },
    conditions: {
      0: 'Maak leertijd vrij en laat leidinggevenden die toezeggen, of kies een groep die wel lucht heeft.',
      1: 'Zet de bedoeling om in benoemde beschermde uren per persoon per week, voor de looptijd van de pilot.',
    },
  },

  'ppl-06': {
    text: 'Is de groep representatief genoeg om de uitkomst te kunnen doortrekken, of zijn het alleen vrijwilligers en enthousiastelingen?',
    why: 'Een pilot met alleen enthousiastelingen slaagt altijd en voorspelt niets. Dit bepaalt of de pilot de uitrolvraag überhaupt kan beantwoorden.',
    anchors: {
      0: 'De groep bestaat volledig uit zelfgekozen enthousiastelingen, of uit een enkel niet-representatief team.',
      1: 'De groep leunt sterk naar vrijwilligers en koplopers, zonder bewuste spreiding.',
      2: 'De groep is bewust gespreid over rollen, senioriteit en houding, en er zitten ook sceptici bij.',
      3: 'De groep is een doordacht gekozen steekproef, en de organisatie heeft vooraf afgesproken de uitkomst als representatief te behandelen.',
    },
    conditions: {
      0: 'Breid de groep uit met mensen die zich niet uit zichzelf hebben aangemeld, anders kan de pilot geen uitrolbesluit dragen.',
      1: 'Voeg bewust sceptici en mensen met een gemiddeld dienstverband toe, zodat de uitkomst een besluit kan dragen.',
    },
  },

  'ppl-07': {
    text: 'Zien mensen Copilot als relevant voor hun eigen werk, of als iets voor kantoorwerkers elders in het gebouw?',
    why: 'Gebrek aan herkenning is een hardnekkiger blokkade dan scepsis, want een scepticus gaat tenminste het gesprek aan en de niet-overtuigde komt gewoon niet opdagen.',
    anchors: {
      0: 'De groep ziet Copilot als iets voor andere rollen en kan geen taak van zichzelf noemen waar het aan raakt.',
      1: 'Mensen vinden het in principe wel nuttig, maar kunnen het niet aan hun eigen week verbinden.',
      2: 'Het merendeel van de groep kan een concrete eigen taak noemen waarbij ze hulp van Copilot verwachten.',
      3: 'Mensen dragen zelf toepassingen aan waar het projectteam niet aan had gedacht.',
    },
    conditions: {
      0: 'Geef voor de start demonstraties per rol, met het echte werk van de groep erin.',
      1: 'Laat iedereen voor de start een eigen taak kiezen, zodat de eerste toepassing al vaststaat.',
    },
  },
};
