import type { QuestionOverlay } from '../questionText';

export const nlUseCases: Record<string, QuestionOverlay> = {
  'case-01': {
    text: 'Heb je concrete scenario\'s per rol voor de pilotgroep, of is het plan "geef ze licenties en kijk wat er gebeurt"?',
    why: 'De sterkste voorspeller in de eigen enablementrichtlijnen van Microsoft. Kijken-wat-er-gebeurt levert anekdotes op, geen beslissing.',
    anchors: {
      0: 'Het plan is licenties uitdelen en toekijken. Er staat geen enkel scenario op papier.',
      1: 'Er zijn scenario\'s, maar ze beschrijven algemene Copilot-functies zoals samenvatten of opstellen, en geen benoemd stuk werk van deze groep.',
      2: 'Elke rol in de groep heeft minstens een geschreven scenario over een concrete terugkerende taak, in de taal van de groep zelf.',
      3: 'De scenario\'s worden bijgehouden als een levende set, en aangevuld met wat de groep gaandeweg ontdekt.',
    },
    conditions: {
      0: 'Houd voor de start een scenariosessie met de groep en lever minstens een geschreven scenario per rol op.',
      1: 'Herschrijf de functielijst tot benoemde taken uit het echte werk van de groep, met de Scenario Library van Microsoft als vertrekpunt.',
    },
  },

  'case-02': {
    text: 'Is er een nulmeting van het werk waar die scenario\'s over gaan: hoe lang het duurt, hoe vaak het voorkomt, en wat het nu kost?',
    why: 'Zonder een voor is er geen na, en de nulmeting moet binnen zijn voordat de licenties landen, anders is hij voorgoed weg.',
    anchors: {
      0: 'Er is geen nulmeting en er komt er ook geen. Hoe lang het werk nu kost, weet niemand.',
      1: 'Er is een schatting uit het hoofd of de mening van een enkeling, geen meting.',
      2: 'Voor de betrokken taken is tijd, frequentie of volume vastgelegd, en dat is gebeurd voordat de licenties landden.',
      3: 'De nulmeting komt uit een bron die na de pilot nog bestaat, zodat je de vergelijking op elk moment kunt herhalen.',
    },
    conditions: {
      0: 'Leg de nulmeting vast voordat er een licentie wordt toegekend. Zodra de groep met Copilot begint, is de oude situatie onherstelbaar weg.',
      1: 'Til de schatting op tot een echte meting, in elk geval voor de twee belangrijkste scenario\'s.',
    },
  },

  'case-03': {
    text: 'Zijn de scenario\'s getoetst bij de mensen die het werk echt doen, in plaats van namens hen bedacht door het projectteam?',
    why: 'Scenario\'s die het projectteam zelf verzint, beschrijven vaak werk dat in die vorm niet bestaat, en de groep negeert ze stilletjes.',
    anchors: {
      0: 'De scenario\'s zijn door het projectteam geschreven en nooit voorgelegd aan iemand die het werk doet.',
      1: 'De groep mocht erop reageren, maar er is niets veranderd naar aanleiding daarvan.',
      2: 'De scenario\'s zijn samen met de uitvoerders gemaakt, en minstens een is door hen afgewezen of herschreven.',
      3: 'De groep draagt zelf scenario\'s aan en scherpt ze aan, als vanzelfsprekend.',
    },
    conditions: {
      0: 'Toets elk scenario voor de start bij iemand die dat werk echt doet.',
      1: 'Houd een werksessie waarin de groep scenario\'s mag afwijzen, niet alleen becommentariëren.',
    },
  },

  'case-04': {
    text: 'Draaien de gekozen scenario\'s op data die Copilot ook echt kan bereiken, dus in M365 en niet in een oud systeem, een netwerkschijf of een archief vol pdf\'s?',
    why: 'De meest voorkomende oorzaak van een teleurstellende pilot. Het scenario deugt, maar de inhoud staat niet waar Copilot hem kan zien. Nu goedkoop te controleren, in week drie pijnlijk om te ontdekken.',
    anchors: {
      0: 'De scenario\'s leunen op inhoud die Copilot niet kan bereiken, zoals een oud systeem, een lokale schijf of gescande pdf\'s.',
      1: 'Niemand heeft de bereikbaarheid gecontroleerd, dus of de inhoud geïndexeerd en goed gerechtigd is, weet je niet.',
      2: 'Voor elk scenario is vastgesteld dat de inhoud in M365 staat en bereikbaar is met de rechten van de groep zelf.',
      3: 'Bereikbaarheid van inhoud wordt bewust bijgehouden, en elk nieuw scenario wordt erop gecontroleerd voordat het meedoet.',
    },
    conditions: {
      0: 'Kies andere scenario\'s of pas ze aan tot inhoud die Copilot kan bereiken, of verhuis de inhoud eerst naar M365.',
      1: 'Test elk scenario voor de start op echte inhoud, met een echt account uit de groep.',
    },
  },

  'case-05': {
    text: 'Is er per scenario een uitgesproken verwachting: wat verbetert er, voor wie, en ongeveer hoeveel?',
    why: 'Een verwachting waarin je ongelijk kunt krijgen. Dit is de eigenlijke vraag van de pilot, vooraf opgeschreven zodat je hem achteraf niet kunt bijbuigen naar wat de cijfers toevallig laten zien.',
    anchors: {
      0: 'Er is geen verwachting uitgesproken, dus achteraf kan elk resultaat tot succes worden verklaard.',
      1: 'Er is een algemene verwachting van tijdwinst, zonder getal en zonder dat iemand er beter van wordt.',
      2: 'Elk belangrijk scenario heeft een geschreven verwachting: wat verbetert, voor wie, en ruwweg hoeveel.',
      3: 'De verwachtingen zijn expliciet weerlegbaar, en het team heeft vooraf afgesproken ook uitkomsten te publiceren die ze onderuithalen.',
    },
    conditions: {
      0: 'Schrijf voor de start per belangrijk scenario een verwachting op, zodat de uitkomst achteraf niet kan worden bijgebogen.',
      1: 'Hang een getal en een begunstigde aan de verwachting die er al ligt.',
    },
  },

  'case-06': {
    text: 'Is er minstens een scenario dat vaak voorkomt, dagelijks of een paar keer per week, voor de pilotgroep?',
    why: 'Gewoontevorming is het mechanisme. De drempel van Microsoft ligt rond drie actieve dagen per week, oftewel twaalf dagen in achtentwintig, en een groep met alleen maandelijkse scenario\'s haalt dat binnen een pilot fysiek niet.',
    anchors: {
      0: 'Alle scenario\'s zijn maandelijks of zeldzamer, dus de groep kan binnen de looptijd geen gewoonte opbouwen.',
      1: 'Er is een aannemelijk dagelijks scenario, maar niemand heeft bevestigd dat de groep het ook echt zo vaak doet.',
      2: 'Minstens een scenario is bevestigd dagelijks of meerdere keren per week, voor het merendeel van de groep.',
      3: 'Er zijn meerdere veelvoorkomende scenario\'s over verschillende rollen, zodat gewoontevorming niet van een enkele taak afhangt.',
    },
    conditions: {
      0: 'Voeg minstens een scenario toe dat echt vaak voorkomt. De drempel van ongeveer drie actieve dagen per week haal je niet op maandelijkse taken.',
      1: 'Bevestig de aanname over frequentie bij de groep voordat je erop bouwt.',
    },
  },

  'case-07': {
    text: 'Heeft elk scenario een eigenaar in de business die er ook echt om geeft of het werkt?',
    why: 'Scenario\'s van het project worden losgelaten zodra ze lastig worden. Scenario\'s van iemand die er zelf beter van wordt, worden gerepareerd.',
    anchors: {
      0: 'De scenario\'s zijn van het project. Niemand in de business is aanspreekbaar op of ze werken.',
      1: 'Per scenario staat een naam, maar die persoon heeft de rol niet aanvaard en heeft er geen tijd voor.',
      2: 'Elk belangrijk scenario heeft een eigenaar in de business die de rol heeft aanvaard en de uitkomst gaat beoordelen.',
      3: 'De eigenaren trekken hun eigen scenario en kloppen bij het projectteam aan voor hulp, in plaats van andersom.',
    },
    conditions: {
      0: 'Wijs voor de start per belangrijk scenario een eigenaar in de business aan, en haal diens akkoord op.',
      1: 'Bevestig dat de aangewezen eigenaren de rol hebben aanvaard en er tijd voor hebben om de uitkomst te beoordelen.',
    },
  },
};
