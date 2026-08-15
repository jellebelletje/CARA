import type { DimensionOverlay, QuestionOverlay } from '../questionText';
import { nlLeadership } from './leadership';
import { nlUseCases } from './useCases';
import { nlPeople } from './people';
import { nlSkills } from './skills';
import { nlEnablement } from './enablement';
import { nlMeasurement } from './measurement';

export const nlDimensions: Record<string, DimensionOverlay> = {
  lead: {
    name: 'Leiderschap en sponsorship',
    premise:
      'Of er iemand met gezag zichtbaar achter staat, en of leidinggevenden het gedrag voordoen dat ze van anderen vragen.',
  },
  case: {
    name: 'Toepassingen en waarde',
    premise:
      'Of je weet wat de groep echt met Copilot gaat doen, en hoe je achteraf vaststelt of het geholpen heeft.',
  },
  ppl: {
    name: 'Gereedheid van mensen',
    premise:
      'Of de groep kan en wil meedoen, en of de omstandigheden zo zijn dat hun gedrag iets betekent.',
  },
  skill: {
    name: 'Vaardigheden',
    premise:
      'Of mensen er veilig een goed resultaat uit halen, en of de omgeving Copilot het werk überhaupt laat zien.',
  },
  enab: {
    name: 'Ondersteuning',
    premise: 'Of de ondersteuning rond de groep in de praktijk bestaat en niet alleen op een slide.',
  },
  meas: {
    name: 'Meten',
    premise:
      'Of de pilot zo is opgezet dat er een antwoord uit komt waar een besluit op kan rusten.',
  },
};

export const nlQuestions: Record<string, QuestionOverlay> = {
  ...nlLeadership,
  ...nlUseCases,
  ...nlPeople,
  ...nlSkills,
  ...nlEnablement,
  ...nlMeasurement,
};
