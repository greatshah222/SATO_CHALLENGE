import { action } from '@storybook/addon-actions';

export const suggestions = [
  {
    title: 'faq',
    suggestions: [
      {
        header: 'Miten haen SATOn vuokra-asuntoa?',
        handler: action('Miten haen SATOn vuokra-asuntoa?'),
        subtitle: 'Aliotsikko tälle kentälle',
      },
      {
        header: 'Minkälaisia vuokra-asuntoja SATOlla on?',
        handler: action('Minkälaisia vuokra-asuntoja SATOlla on?'),
      },
      {
        header: 'Missä SATOlla on uusia vuokra-asuntoja?',
        handler: action('Missä SATOlla on uusia vuokra-asuntoja?'),
      },
      {
        header: 'Minkä suuruinen vuokravakuus SATOlla on?',
        handler: action('Minkä suuruinen vuokravakuus SATOlla on?'),
      },
      {
        header: 'Selaa vuokra-asuntoja ja kerro meille toiveesi',
        handler: action('Selaa vuokra-asuntoja ja kerro meille toiveesi'),
      },
      {
        header: 'Selaa vuokra-asuntoja ja kerro meille toiveesi taas',
        handler: action('Selaa vuokra-asuntoja ja kerro meille toiveesi'),
        subtitle: 'Jotain jännää lisätietoa',
      },
      {
        header: 'Mistä asunnon vuokra koostuu ja mitä teen, jos minulla on maksuvaikeuksia?',
        handler: action('Mistä asunnon vuokra koostuu ja mitä teen, jos minulla on maksuvaikeuksia?'),
      },
    ],
  },
  {
    title: 'satoSubPage',
    suggestions: [
      {
        header: 'Löydämme asiakkaalle kodin',
        handler: action('Löydämme asiakkaalle kodin'),
      },
    ],
  },
  {
    title: 'faqSubPage',
    suggestions: [
      {
        header: 'Kodin vuokraaminen',
        handler: action('Kodin vuokraaminen'),
      },
    ],
  },
  {
    title: 'cityPage',
    suggestions: [
      {
        header: 'Vuokra-asunto Tampereelta – Suomen vetovoimaisimmasta kaupungista',
        handler: action('Vuokra-asunto Tampereelta – Suomen vetovoimaisimmasta kaupungista'),
      },
    ],
  },
];
