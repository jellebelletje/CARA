import type { QuestionOverlay } from '../questionText';

export const nlLeadership: Record<string, QuestionOverlay> = {
  'lead-01': {
    text: 'Is er een executive sponsor met naam en toenaam, met zeggenschap over de prioriteiten en het budget van de pilotgroep?',
    why: 'Niet of het management welwillend is, maar of je een naam kunt opschrijven. De planningschecklist van Microsoft zet dit op nummer een, en een sponsor zonder naam is de meest voorkomende stille faalfactor.',
    anchors: {
      0: 'Niemand kan een sponsor noemen, of de genoemde persoon heeft geen zeggenschap over de groep en is er nooit over aangesproken.',
      1: 'Er is een naam, maar die persoon is niet gebriefd, heeft zich publiekelijk niet uitgesproken, of kan de tijd van de groep niet echt vrijmaken.',
      2: 'Een sponsor met naam heeft de pilot schriftelijk geaccordeerd, kan tijd en budget vrijmaken, en heeft een spreekmoment bij de start.',
      3: 'De sponsor is aanspreekbaar op een AI-doel dat verder reikt dan deze pilot, en andere leidinggevenden volgen hem of haar daarin.',
    },
    conditions: {
      0: 'Zoek een sponsor met echte zeggenschap over de tijd en het budget van de pilotgroep, en leg diens akkoord schriftelijk vast voordat er ook maar een licentie wordt toegekend.',
      1: 'Brief de genoemde sponsor en haal er een zichtbare toezegging uit, bijvoorbeeld dat hij of zij de startsessie opent.',
    },
  },

  'lead-02': {
    text: 'Kan het management uitleggen waarom Copilot en waarom nu, in termen van een bedrijfsdoel in plaats van "AI is belangrijk"?',
    why: 'Wie niet kan beantwoorden waarom we dit doen, behandelt de pilot als een IT-experiment dat je straffeloos kunt negeren.',
    anchors: {
      0: 'De pilot wordt beschreven in termen van de techniek, zonder dat er enig bedrijfsdoel aan hangt.',
      1: 'Er is een verhaal, maar het is algemene AI-ambitie en niet specifiek voor wat deze organisatie dit jaar wil bereiken.',
      2: 'Leidinggevenden kunnen het bedrijfsdoel benoemen dat de pilot dient, en het verbinden aan iets waar de groep zelf om geeft.',
      3: 'Het verhaal staat op papier, wordt door meer dan een leidinggevende consistent verteld, en de groep kan het ongevraagd navertellen.',
    },
    conditions: {
      0: 'Houd een sessie van een uur met de sponsor en lever daar een geschreven waarom-nu op, verbonden aan een lopend bedrijfsdoel.',
      1: 'Scherp het verhaal aan tot taal die de groep herkent, en laat de sponsor het bij de start zelf uitspreken.',
    },
  },

  'lead-03': {
    text: 'Gebruiken de leidinggevenden van de pilotgroep Copilot zichtbaar zelf, waar hun team bij is?',
    why: "De Work Trend Index 2026 vond dat organisatiefactoren ongeveer twee keer zoveel gewicht in de schaal leggen als individuele factoren, en dat Frontier Professionals in 85 procent van de gevallen een leidinggevende hebben die openlijk AI gebruikt, tegen 64 procent bij hun collega's. Dit is de sterkste knop waar je voor de start aan kunt draaien.",
    anchors: {
      0: 'Geen enkele leidinggevende in de groep heeft een licentie, of ze hebben Copilot volledig aan hun team overgelaten.',
      1: "Een paar leidinggevenden hebben een licentie en zijn nieuwsgierig, maar hun team ziet er niets van. Geen demo's, geen gedeelde prompts, geen woord erover in het teamoverleg.",
      2: 'Leidinggevenden met naam hebben zich vastgelegd op een terugkerend, zichtbaar moment waarop ze Copilot gebruiken, en op het delen van wat werkte.',
      3: "Voorbeeldgedrag van leidinggevenden is de norm buiten de groep, zij stellen kwaliteitseisen aan AI-ondersteund werk, en collega's kunnen concrete voorbeelden noemen.",
    },
    conditions: {
      0: 'Geef de leidinggevenden van de groep een licentie en een briefing voordat er iets naar de eindgebruikers gaat. Een pilot zonder aanwezige leidinggevenden levert adoptiecijfers op waar je niets aan hebt.',
      1: 'Houd een sessie van een uur met de leidinggevenden en spreek per persoon een zichtbaar wekelijks moment af.',
    },
  },

  'lead-04': {
    text: 'Hebben leidinggevenden hardop gezegd wat er gebeurt met de tijd die Copilot vrijspeelt?',
    why: 'De onuitgesproken vraag over banen. Blijft die onbeantwoord, dan rapporteren mensen stilletjes minder tijdwinst dan er is, en daarmee vervuil je precies de meting waarvoor je de pilot draait.',
    anchors: {
      0: 'Medewerkers hebben de vraag gesteld en het management is het antwoord uit de weg gegaan.',
      1: 'Er is intern een lijn, maar die is niet uitgesproken, dus de groep vult zelf in wat het betekent.',
      2: 'Leidinggevenden hebben publiekelijk gezegd waar de vrijgespeelde tijd voor is, in bewoordingen die de groep gelooft.',
      3: 'Die uitspraak wordt gedekt door een zichtbaar voorbeeld, zoals werk waar het management expliciet niet meer om vraagt.',
    },
    conditions: {
      0: 'Spreek een lijn af over waar vrijgespeelde tijd voor is, en zeg die voor de start hardop. Zwijgen wordt gelezen als een antwoord over banen, en drukt de gerapporteerde tijdwinst.',
      1: 'Laat de sponsor de lijn bij de start publiekelijk uitspreken in plaats van hem impliciet te laten.',
    },
  },

  'lead-05': {
    text: 'Heeft het management een norm gesteld voor AI-ondersteund werk: wie is ervoor verantwoordelijk, en wat moet er gecontroleerd zijn voordat het de deur uitgaat?',
    why: 'Een enkele gênante ongecontroleerde output kan een pilot politiek de kop kosten. De Work Trend Index 2026 noemt het stellen van kwaliteitseisen aan AI een kenmerk van Frontier-leidinggevenden: 83 procent tegen 57 procent.',
    anchors: {
      0: 'Niemand heeft gezegd wie aanspreekbaar is op AI-ondersteund werk, en er is geen regel over controleren voor gebruik.',
      1: 'Er leeft een informeel idee dat mensen hun werk horen na te kijken, maar er staat niets op papier en niets is specifiek voor AI.',
      2: 'Een geschreven norm legt vast dat de afzender eigenaar is van de output, en benoemt welk soort werk gecontroleerd moet zijn voordat het naar buiten gaat.',
      3: 'De norm zit in de bestaande kwaliteits- en reviewprocessen in plaats van in los AI-beleid, en leidinggevenden passen hem ook echt toe.',
    },
    conditions: {
      0: 'Publiceer een norm van een pagina over wie eigenaar is van AI-ondersteund werk, en welk werk gecontroleerd moet zijn voordat het de organisatie verlaat.',
      1: 'Zet het informele idee om in een geschreven norm en laat leidinggevenden er bij de start naar verwijzen.',
    },
  },

  'lead-06': {
    text: 'Is er budget voor enablement, dus voor training, tijd van champions en communicatie, los van de licentiekosten?',
    why: 'Licenties worden betaald, het veranderwerk vaak niet, en daarna wordt champions gevraagd het er in hun vrije tijd bij te doen.',
    anchors: {
      0: 'Alleen de licenties zijn gedekt. Voor training, tijd van champions en communicatie is geen budget en geen uur vrijgemaakt.',
      1: 'Enablement wordt informeel gefinancierd, meestal door mensen te vragen het binnen hun huidige rol op te vangen.',
      2: 'Enablement heeft een eigen budgetregel of expliciet toegewezen uren, los van de licenties.',
      3: 'Het enablementbudget is doorgerekend tot en met de uitrol, niet alleen tot het einde van de pilot.',
    },
    conditions: {
      0: 'Regel voor de start een apart enablementbudget of vrijgemaakte uren. Werk van champions dat op goede wil draait, stopt zodra de eerste deadline in zicht komt.',
      1: 'Zet de informele inzet om in benoemde uren per persoon voor de looptijd van de pilot.',
    },
  },

  'lead-07': {
    text: 'Staan IT, security, HR en de business hier samen achter, of is dit een initiatief van IT?',
    why: 'Een pilot die alleen van IT is, kan wel uitrollen maar geen gedrag veranderen. Het ontbreken van HR wreekt zich later als geen opleiding en geen betrokken leidinggevenden.',
    anchors: {
      0: 'De pilot komt uit IT, en noch de business noch HR is erbij betrokken.',
      1: 'Andere afdelingen zijn geïnformeerd, maar hebben geen belang, geen taken en geen vertegenwoordiging in het pilotteam.',
      2: 'IT, security, HR en de business hebben elk een vertegenwoordiger met naam, met taken in het pilotplan.',
      3: 'Die afdelingen delen een vast overleg over AI-adoptie dat deze pilot overleeft.',
    },
    conditions: {
      0: 'Haal de business en HR met vertegenwoordigers met naam in het pilotteam, of accepteer dat de pilot een uitrol test in plaats van adoptie.',
      1: 'Geef elke afdeling een concrete taak in het pilotplan, zodat betrokkenheid echt is en niet alleen op papier staat.',
    },
  },
};
