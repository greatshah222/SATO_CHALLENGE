import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs } from '@storybook/addon-knobs';

import CookieConsentBar from './index';
import theme from '../../theme';

storiesOf('CookieConsentBar', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <CookieConsentBar>
      Tarjotaksemme sinulle parhaan mahdollisen käyttäjäkokemuksen sato.fi:ssä käytämme sivustolla evästeitä. Jatkamalla
      sato.fi:n käyttöä hyväksyt evästeiden tallentamisen laitteellesi. Lisätietoja löydät Tietoturva ja käyttöehdot
      -sivulta.
    </CookieConsentBar>
  ));
