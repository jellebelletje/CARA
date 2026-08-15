import type { QuestionOverlay } from '../questionText';

export const nlMeasurement: Record<string, QuestionOverlay> = {
  'meas-01': {
    text: 'Is er voor de start afgesproken wat "geadopteerd" in cijfers betekent?',
    why: 'Microsoft levert bruikbare definities kant en klaar: een vaste gebruiker is actief in minstens 9 van de 12 weken, een power user doet daar 15 of meer handelingen per week bovenop, en de AI Adoption Score mikt op 12 actieve dagen in 28. Vooraf kiezen voorkomt dat de doelpalen verschuiven zodra de cijfers binnen zijn.',
    anchors: {
      0: 'Er is geen definitie van geadopteerd, dus over succes ga je straks discussiëren in plaats van meten.',
      1: 'Er is een vage bedoeling in de trant van "mensen gebruiken het regelmatig", zonder drempel eronder.',
      2: 'Er is vooraf een concrete drempel afgesproken, bijvoorbeeld de definitie van Microsoft van actief in minstens 9 van de 12 weken.',
      3: 'Die definitie wordt overal in de rapportage consequent gebruikt, en de organisatie heeft afgesproken hem niet te verzetten als de cijfers binnen zijn.',
    },
    conditions: {
      0: 'Spreek voor de start een definitie van geadopteerd in cijfers af, en gebruik een van de gepubliceerde drempels van Microsoft in plaats van er zelf een te verzinnen.',
      1: 'Hang een concrete drempel aan de bedoeling die er al is, en leg die vast voordat er cijfers binnenkomen.',
    },
  },

  'meas-02': {
    text: 'Kan iemand de rapportage van Copilot daadwerkelijk openen en lezen, met de licenties en rollen die daarvoor nodig zijn?',
    why: 'Het adoptierapport in Viva Insights vraagt de rol van Insights Analyst en Power BI Desktop. Kom je daar in week zes achter, dan heeft je pilot blind gedraaid.',
    anchors: {
      0: 'Niemand heeft uitgezocht wie de rapportage kan zien, en er is geen rol of licentie geregeld.',
      1: 'De rapportage bestaat in theorie, maar niemand heeft hem geopend en de benodigde rollen zijn onbevestigd.',
      2: 'Iemand met naam heeft de vereiste rollen en licenties, en heeft al een rapport uit echte data gehaald.',
      3: 'Rapporteren is routine, en meer dan een persoon kan het maken en duiden.',
    },
    conditions: {
      0: 'Bepaal wie de rapportage gaat lezen en regel voor de start diens rollen en licenties.',
      1: 'Laat die persoon voor de start een keer een rapport uit echte data halen, om te bewijzen dat de toegang werkt.',
    },
  },

  'meas-03': {
    text: 'Is er een ritme van bespreken waar telkens een beslissing aan hangt, in plaats van een rapport waar niemand iets mee doet?',
    why: 'Data zonder beslismoment is theater. Dit is ook hoe je halverwege bijstuurt, terwijl er nog pilot over is om bij te sturen.',
    anchors: {
      0: 'Er is geen plan om tijdens de pilot naar de cijfers te kijken.',
      1: 'Er staan besprekingen gepland, maar zonder beslissing eraan, dus ze informeren niemand.',
      2: 'Er is een vast ritme, en aan elke bespreking hangt een benoemde beslissing.',
      3: 'Zulke besprekingen hebben eerdere trajecten aantoonbaar van koers doen veranderen, dus het ritme heeft tanden.',
    },
    conditions: {
      0: 'Zet een ritme van bespreken op met aan elke bespreking een beslissing, zodat bijsturen kan terwijl er nog pilot over is.',
      1: 'Hang aan elke geplande bespreking een concrete beslissing.',
    },
  },

  'meas-04': {
    text: 'Is er een route voor kwalitatieve terugkoppeling, inclusief "dit werkt niet voor mij", die terechtkomt bij iemand die er iets mee kan?',
    why: 'Bewust hierheen gehaald vanuit People readiness. Afhakers zijn je waardevolste signaal, en de cijfers laten alleen zien dat het gebeurde, nooit waarom.',
    anchors: {
      0: 'Er is geen route voor kwalitatieve terugkoppeling. De cijfers zijn het enige signaal.',
      1: 'Terugkoppeling is in principe welkom, maar heeft geen kanaal en geen eigenaar, dus hij komt nergens aan.',
      2: 'Er is een benoemd kanaal voor kwalitatieve terugkoppeling, negatieve inbegrepen, met iemand die verantwoordelijk is voor de reactie.',
      3: 'Terugkoppeling verandert het programma zichtbaar, en de groep kan iets aanwijzen dat is veranderd omdat zij het zeiden.',
    },
    conditions: {
      0: 'Maak een route voor kwalitatieve terugkoppeling die terechtkomt bij iemand die er iets mee kan.',
      1: 'Geef dat kanaal een naam, een plek en een eigenaar.',
    },
  },

  'meas-05': {
    text: 'Is er bedacht hoe je waarde vastlegt die de cijfers niet zien, zoals kwaliteit van het werk, vertrouwen of minder geploeter?',
    why: 'Gebruikscijfers bewijzen gewoontevorming, niet waarde. Wat mensen als grootste winst noemen, is vaak precies wat je niet terugziet in het aantal handelingen.',
    anchors: {
      0: 'De enige geplande maat is het aantal handelingen.',
      1: 'Er is een voornemen om kwalitatieve waarde op te halen, maar geen methode en geen instrument.',
      2: 'Er is een methode om waarde vast te leggen die de cijfers niet zien, zoals kwaliteit, vertrouwen of minder geploeter.',
      3: 'Kwalitatieve en kwantitatieve maten worden samen gerapporteerd, en geen van beide wordt als het hele verhaal gepresenteerd.',
    },
    conditions: {
      0: 'Bepaal hoe je waarde vastlegt die de cijfers niet zien.',
      1: 'Kies het instrument, of dat nu een peiling, een gesprek of een dagboek is, en plan het in.',
    },
  },

  'meas-06': {
    text: 'Is er een plan om succesverhalen op te halen zolang ze vers zijn, in plaats van ze achteraf te reconstrueren?',
    why: 'Concrete verhalen zijn wat een go-besluit door een stuurgroep krijgt. Gereconstrueerde verhalen zijn vaag op precies het moment dat je ze scherp nodig hebt.',
    anchors: {
      0: 'Er is geen plan om verhalen op te halen. Wat bruikbaar is, wordt aan het eind uit het geheugen bij elkaar geraapt.',
      1: 'Verhalen worden aan het eind van de pilot opgehaald in plaats van gaandeweg.',
      2: 'Er is een doorlopende route om concrete voorbeelden vast te leggen op het moment dat ze gebeuren, in iemands eigen woorden.',
      3: 'Verhalen worden tijdens de pilot actief gebruikt om de rest van de organisatie te werven en gerust te stellen.',
    },
    conditions: {
      0: 'Zet een manier op om voorbeelden vast te leggen zolang ze vers zijn.',
      1: 'Verplaats het ophalen van verhalen van het einde van de pilot naar een doorlopende verzameling tijdens de pilot.',
    },
  },

  'meas-07': {
    text: 'Is afgesproken wat een mislukte pilot zou zijn, en niet alleen wat een geslaagde is?',
    why: 'Pilots zonder afgesproken faalconditie mislukken nooit, ze worden verlengd. Die conditie vooraf opschrijven is wat het uiteindelijke besluit geloofwaardig maakt.',
    anchors: {
      0: 'Alleen succes is beschreven. Er is geen voorwaarde waaronder deze pilot als mislukt zou gelden.',
      1: 'Over mislukken wordt informeel gesproken, maar het staat nergens en is niet afgesproken.',
      2: 'Er is vooraf een geschreven faalconditie afgesproken, naast de succesconditie.',
      3: 'De organisatie heeft eerder op deze grond iets gestopt, dus de conditie is geloofwaardig en niet decoratief.',
    },
    conditions: {
      0: 'Spreek voor de start schriftelijk af wat een mislukte pilot zou zijn.',
      1: 'Zet de faalconditie waarover nu alleen gesproken wordt op papier en laat hem bevestigen.',
    },
  },

  'meas-08': {
    text: 'Is besloten op welk niveau je rapporteert en waar de privacygrens ligt, bijvoorbeeld op groepsniveau in plaats van per persoon?',
    why: 'Dit is de beslissing, waar ppl-04 de communicatie ervan is. Je hebt ze allebei nodig en ze gaan los van elkaar mis, want organisaties beloven geregeld iets wat hun rapportage helemaal niet waarmaakt.',
    anchors: {
      0: 'Het rapportageniveau is niet besloten, dus rapporteren per persoon is de standaard.',
      1: 'Er is een voorkeur voor groepsniveau, maar die is niet besloten en niet ingericht.',
      2: 'Het niveau is besloten en vastgelegd, inclusief een minimale groepsgrootte voor geaggregeerde weergaven.',
      3: 'Het besluit is afgedwongen in de inrichting van de rapportage zelf, dus je kunt er niet stilletjes omheen.',
    },
    conditions: {
      0: 'Beslis het rapportageniveau en de privacygrens voordat je iets inricht, inclusief een minimale groepsgrootte.',
      1: 'Zet de voorkeur om in een vastgelegd besluit en richt de rapportage er ook naar in.',
    },
  },

  'meas-09': {
    text: 'Duurt de pilot lang genoeg om een gewoonte te laten ontstaan voordat je hem beoordeelt?',
    why: 'De drempels van Microsoft voor consistentie worden over 12 weken gemeten. Een pilot van vier weken kan volgens die definitie geen vaste gebruiker opleveren, en kan de vraag die je stelt dus structureel niet beantwoorden.',
    anchors: {
      0: 'De pilot wordt na een paar weken beoordeeld, en dat is te kort voor een gewoonte.',
      1: 'De looptijd is onbeslist, of is bepaald door een externe deadline in plaats van door wat de meting nodig heeft.',
      2: 'De pilot loopt lang genoeg om consistentie te kunnen meten, in lijn met het venster van 12 weken dat Microsoft gebruikt.',
      3: 'De looptijd volgt uit wat de meting vraagt, en het beslismoment is beschermd tegen naar voren halen.',
    },
    conditions: {
      0: 'Verleng de pilot tot een looptijd waarin een gewoonte kan ontstaan, of accepteer dat hij de gestelde vraag niet kan beantwoorden.',
      1: 'Bepaal de looptijd vanuit wat de meting nodig heeft in plaats van vanuit een externe deadline.',
    },
  },

  'meas-10': {
    text: 'Ga je de nulmeting aan de menskant aan het eind herhalen, met hetzelfde instrument als bij de start?',
    why: 'Hoort bij ppl-02. Een verschuiving in houding is vaak het helderste resultaat dat een pilot oplevert, maar alleen als beide metingen dezelfde vragen gebruiken.',
    anchors: {
      0: 'Er is geen plan om aan het eind iets aan de menskant opnieuw te meten.',
      1: 'Een slotmeting is de bedoeling, maar met andere vragen dan bij de start.',
      2: 'De slotmeting herhaalt het instrument van de start, zodat de vergelijking klopt.',
      3: 'Die vergelijking staat gepland om bij de uitrol opnieuw te doen, zodat je een lijn krijgt en niet twee losse punten.',
    },
    conditions: {
      0: 'Plan de meting aan de menskant aan het eind opnieuw in, met dezelfde vragen.',
      1: 'Stem het slotinstrument af op dat van de start, zodat de twee echt vergelijkbaar zijn.',
    },
  },
};
