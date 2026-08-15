import type { QuestionOverlay } from '../questionText';

export const nlSkills: Record<string, QuestionOverlay> = {
  'skill-01': {
    text: 'Kan de groep een prompt schrijven die context meegeeft, en snappen ze waarom een kale vraag van een regel slechter uitpakt?',
    why: 'De basisvaardigheid. Bijna elke melding van "Copilot gaf onzin" in een vroege pilot is terug te voeren op prompts zonder context, en dat is goedkoop op te lossen voordat mensen hun oordeel hebben gevormd.',
    anchors: {
      0: 'De groep heeft geen enkele uitleg over prompten gehad, en het plan gaat ervan uit dat een vraag intypen genoeg is.',
      1: 'Mensen hebben voorbeelden gezien maar niet geoefend, en kunnen niet uitleggen waarom context het antwoord verandert.',
      2: 'De groep heeft geoefend op het eigen werk en kan doorpakken op een matig antwoord in plaats van af te haken.',
      3: 'Mensen verfijnen en hergebruiken prompts als vanzelf, en kunnen het een ander uitleggen.',
    },
    conditions: {
      0: 'Laat de groep voor de start oefenen met prompten op de eigen scenario\'s, en niet met een algemene demonstratie.',
      1: 'Zet de voorbeeldprompts om in een sessie waarin mensen zelf oefenen met echt werk.',
    },
  },

  'skill-02': {
    text: 'Weet de groep hoe je output van Copilot controleert, en kunnen ze benoemen welk van hun taken die controle echt vereisen?',
    why: 'Controleren is de vaardigheid die de norm voor AI-ondersteund werk uitvoerbaar maakt. Let op het tweede deel: weten hoe je controleert telt minder zwaar dan weten wanneer het moet.',
    anchors: {
      0: 'Niemand heeft gezegd dat output gecontroleerd moet worden, en mensen kunnen niet benoemen welk werk schade oploopt van een fout.',
      1: 'Mensen weten in het algemeen dat ze moeten nakijken, maar kunnen werk dat controle vereist niet onderscheiden van werk dat dat niet doet.',
      2: 'De groep kan benoemen welke van hun taken controle vereisen voordat de output gebruikt wordt, en weet hoe ze dat doen.',
      3: 'Controleren is een zichtbare norm, en mensen leggen AI-ondersteund werk uit zichzelf voor waar de norm dat vraagt.',
    },
    conditions: {
      0: 'Train controleren voor de start samen met prompten, expliciet gekoppeld aan de norm uit lead-05.',
      1: 'Laat elke rol de eigen taken indelen naar of de output eerst gecontroleerd moet worden.',
    },
  },

  'skill-03': {
    text: 'Weten mensen wat ze wel en niet in Copilot mogen zetten, in de termen van de eigen dataclassificatie?',
    why: 'Dit zit op de grens van vaardigheid en risico. Een groep die zit te gokken, levert of een datalek op of verlamd ondergebruik, en beide voorkom je met een korte uitleg.',
    anchors: {
      0: 'Mensen weten niet wat ze erin mogen zetten, en er is geen richtlijn uitgegeven.',
      1: 'Er is algemeen databeleid, maar het is niet vertaald naar wat het voor Copilot concreet betekent.',
      2: 'De groep heeft heldere Copilot-specifieke richtlijnen over welke data mag, uitgedrukt in de eigen classificatietermen.',
      3: 'De richtlijn wordt ondersteund door techniek zoals gevoeligheidslabels, dus de regel wordt afgedwongen en niet onthouden.',
    },
    conditions: {
      0: 'Geef voor de start een Copilot-specifieke richtlijn uit over het omgaan met data.',
      1: 'Vertaal het algemene beleid naar Copilot-specifieke regels, in de classificatietaal van de groep zelf.',
    },
  },

  'skill-04': {
    text: 'Is er vaardigheid in de specifieke toepassingen die de scenario\'s nodig hebben, of alleen algemene handigheid met Copilot Chat?',
    why: 'Copilot in Excel gedraagt zich totaal anders dan Copilot in Word. Training die alleen over de chat gaat, laat scenario-eigenaren in de steek zodra er een document of een spreadsheet bij komt kijken.',
    anchors: {
      0: 'De training gaat alleen over Copilot Chat, terwijl de scenario\'s Copilot in Word, Excel of Teams nodig hebben.',
      1: 'Vaardigheid per toepassing wordt aangenomen, maar is niet aangeleerd en niet gecontroleerd.',
      2: 'De groep is getraind in de specifieke toepassingen die hun scenario\'s vragen.',
      3: 'Vaardigheid per toepassing wordt per rol bijgehouden, en er komen toepassingen bij naarmate de scenario\'s uitbreiden.',
    },
    conditions: {
      0: 'Breid de training uit naar de specifieke toepassingen die de scenario\'s nodig hebben.',
      1: 'Controleer de vaardigheid met een korte praktische toets in plaats van haar aan te nemen.',
    },
  },

  'skill-05': {
    text: 'Hebben mensen gevoel voor wanneer je Copilot juist niet moet pakken?',
    why: 'Overal inzetten levert slechtere resultaten op dan niet gebruiken, en kost sneller geloofwaardigheid. Dit staat los van controleren: het gaat over taakkeuze, niet over het nakijken van output.',
    anchors: {
      0: 'De boodschap was "gebruik het overal voor", zonder enige uitleg over waar het slecht past.',
      1: 'Mensen voelen aan dat er grenzen zijn, maar er is geen gedeeld beeld van waar die liggen.',
      2: 'De groep kan soorten taken noemen waarvoor ze Copilot niet zouden gebruiken, en waarom.',
      3: 'Er wordt open gesproken over passendheid, en mensen delen net zo makkelijk waar het niet werkte als waar het wel werkte.',
    },
    conditions: {
      0: 'Neem in de startbriefing op waar je Copilot beter niet voor gebruikt.',
      1: 'Verzamel en publiceer tijdens de pilot de eigen lijst van de groep met taken die slecht passen.',
    },
  },

  'skill-06': {
    text: 'Staat de onderliggende M365-hygiëne waar Copilot van afhangt: bestanden in SharePoint of OneDrive in plaats van op lokale schijven, en vergaderingen die daadwerkelijk worden getranscribeerd?',
    why: 'Copilot kan alleen redeneren over wat het kan zien. Een groep die bijlagen rondmailt en nooit iets opneemt, heeft Copilot al afgetopt voordat er een prompt is getypt.',
    anchors: {
      0: 'Het werk staat op lokale schijven of in mailbijlagen, en vergaderingen worden niet opgenomen of getranscribeerd.',
      1: 'Het beeld is gemengd. Sommige teams werken in SharePoint of OneDrive en andere niet, dus de resultaten lopen onvoorspelbaar uiteen.',
      2: 'Het werkmateriaal van de groep staat in SharePoint of OneDrive, en relevante vergaderingen worden standaard getranscribeerd.',
      3: 'Hygiëne van inhoud wordt bewust beheerd, en de organisatie ziet het als voorwaarde voor AI en niet als een kwestie van opruimen.',
    },
    conditions: {
      0: 'Breng de hygiëne van de inhoud voor de start op orde, of accepteer dat Copilot is afgetopt voordat er een prompt is getypt.',
      1: 'Til de achterblijvende teams naar dezelfde werkwijze, zodat de resultaten binnen de groep vergelijkbaar zijn.',
    },
  },

  'skill-07': {
    text: 'Kan de groep prompts vinden en hergebruiken die bij collega\'s werkten?',
    why: 'Prompts van elkaar overnemen is de snelst waargenomen route van beginner naar vaste gebruiker, en het kost bijna niets om op te zetten.',
    anchors: {
      0: 'Er is geen manier om te zien wat bij een ander werkte. Iedereen begint bij nul.',
      1: 'Prompts worden ad hoc in chatgesprekken gedeeld, waar ze binnen dagen verdwijnen.',
      2: 'Er is een gedeelde, vindbare plek waar werkende prompts per scenario worden verzameld.',
      3: 'De promptverzameling wordt onderhouden en actief gebruikt, en de beste prompts verhuizen naar de scenariobeschrijvingen.',
    },
    conditions: {
      0: 'Zet voor de start een gedeelde promptverzameling op.',
      1: 'Verhuis het ad-hoc delen naar een vindbare, blijvende plek.',
    },
  },

  'skill-08': {
    text: 'Is er een plan om vaardigheden bij te houden naarmate Copilot verandert?',
    why: 'Het product beweegt sneller dan de meeste opleidingscycli. Training die je eenmalig geeft, verwordt binnen een paar kwartalen tot overlevering.',
    anchors: {
      0: 'De training is een eenmalige gebeurtenis en daarna houdt het op.',
      1: 'Opfrissers zijn de bedoeling, maar niet ingepland en van niemand.',
      2: 'Er is een ingeplande route om vaardigheden bij te houden als functies veranderen, met een eigenaar.',
      3: 'Bijhouden hoort bij de gewone gang van zaken en volgt het releaseritme van Microsoft.',
    },
    conditions: {
      0: 'Bedenk hoe vaardigheden na de start actueel blijven, met data en een eigenaar.',
      1: 'Zet data en een eigenaar bij de opfrissers die je al van plan was.',
    },
  },

  'skill-09': {
    text: 'Heeft iemand het beginniveau van de groep echt gemeten, in plaats van het aan te nemen?',
    why: 'Training die op een aangenomen beginniveau is ontworpen, mikt meestal te hoog. Het is bovendien de goedkoopste manier om later vaardigheidswinst aan te tonen.',
    anchors: {
      0: 'Niemand heeft gekeken wat de groep al kan, en de training is op een aanname ontworpen.',
      1: 'Van een paar individuen is een indruk bekend, van de groep niet.',
      2: 'Het beginniveau van de groep is getoetst, en de training is afgestemd op wat daaruit kwam.',
      3: 'Dezelfde toets komt aan het eind terug, zodat vaardigheidswinst aantoonbaar is en niet alleen beweerd.',
    },
    conditions: {
      0: 'Doe een korte vaardigheidstoets voordat je de training ontwerpt.',
      1: 'Breid de losse indruk uit tot een snelle toets over de hele groep.',
    },
  },
};
