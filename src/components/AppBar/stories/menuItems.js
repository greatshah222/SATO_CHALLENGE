import { action } from '@storybook/addon-actions';

export const accountItems = [
  {
    label: 'Omasato',
    handler: action('Omasato clicked'),
    variant: 'button',
  },
  {
    label: 'Minun kotini',
    handler: action('Minun kotini clicked'),
    variant: 'buttonMenuItem',
    icon: 'home',
  },
  {
    label: 'Viestit',
    handler: action('Viestit clicked'),
    variant: 'buttonMenuItem',
    icon: 'message',
  },
  {
    label: 'Asiakasedut',
    handler: action('Asiakasedut clicked'),
    variant: 'buttonMenuItem',
    active: true,
    icon: 'benefit',
  },
  {
    label: 'Omat tiedot',
    handler: action('Omat tiedot clicked'),
    variant: 'buttonMenuItem',
    icon: 'loggedInUser',
    iconContent: 'AK',
  },
  {
    label: 'Kirjaudu ulos',
    handler: action('Kirjaudu ulos clicked'),
    variant: 'buttonMenuItem',
    icon: 'logout',
  },
];

export const faqItems = [
  {
    id: 9,
    label: 'Kodin etsiminen',
    handler: action('Kodin etsiminen clicked'),
    variant: 'buttonMenuItem',
    items: [],
  },
];

export const infoItems = [
  {
    id: 6,
    label: 'Usein kysyttyä',
    handler: action('Usein kysyttyä clicked'),
    variant: 'buttonMenuItem',
    items: faqItems,
  },
  {
    id: 7,
    label: 'Ajankohtaista',
    handler: action('Ajankohtaista clicked'),
    variant: 'buttonMenuItem',
    active: true,
  },
  {
    id: 8,
    label: 'Kotona',
    handler: action('Kotona'),
    variant: 'buttonMenuItem',
  },
];

export const links = [
  {
    label: 'Etusivu',
    active: true,
    route: '/',
  },
  {
    label: 'Sijoittajille',
    handler: action('Sijoittajille'),
    type: 'smallOnMobile',
  },
  {
    id: 10,
    small: true,
    executeHandler: true,
    label: 'Medialle',
    handler: action('Medialle'),
    type: 'smallOnMobile',
    items: [
      {
        label: 'Mediapankki',
        variant: 'buttonMenuItem',
        handler: action('mediapankki'),
      },
      {
        label: 'Etsitkö asiantuntijaa?',
        variant: 'buttonMenuItem',
        handler: action('asintuntija'),
      },
    ],
  },
  {
    label: 'SATO yrityksenä',
    handler: action('SATO yrityksenä'),
    type: 'smallOnMobile',
  },
];

export const localeLink = {
  label: 'In English',
  handler: action('Change locale'),
};

export const buttons = [
  {
    id: 1,
    label: 'Löydä koti',
    handler: action('Löydä koti'),
    variant: 'button',
    active: true,
  },
  {
    id: 2,
    label: 'Tietoa asumisesta',
    handler: action('Tietoa asumisesta'),
    variant: 'button',
    items: infoItems,
    active: true,
  },
  {
    id: 4,
    label: 'Ota yhteyttä',
    handler: action('Ota yhteyttä'),
    variant: 'button',
  },
];
