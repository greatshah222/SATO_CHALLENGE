import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';
import { buttons, links, localeLink } from '../AppBar/stories/menuItems';
import { action } from '@storybook/addon-actions';

import MobileMenu from './MobileMenu.js';
import theme from '../../theme';

storiesOf('MobileMenu', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(withKnobs)
  .addDecorator(withViewport('iphone6'))
  .addWithJSX('default', () => (
    <MobileMenu
      content={{ items: [...buttons, ...links, localeLink], id: 'root' }}
      open={true}
      toggleMenu={action('toggleMenu')}
    />
  ))
  .addWithJSX('playground', () => (
    <MobileMenu
      content={{ items: [...buttons, ...links, localeLink], id: 'root' }}
      open={true}
      toggleMenu={action('toggleMenu')}
    />
  ));
