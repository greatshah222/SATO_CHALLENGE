import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { accountItems, buttons, links, localeLink } from './menuItems';

import AppBar from '../index.js';
import theme from '../../../theme';
import { action } from '@storybook/addon-actions';

export const bg = withBackgrounds([{ name: 'light grey', value: '#f2f2f2', default: true }]);

storiesOf('AppBar', module)
  .addDecorator(bg)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(withKnobs)
  .addWithJSX('unsigned', () => (
    <AppBar
      accountItems={accountItems}
      buttons={buttons}
      loggedIn={false}
      links={links}
      localeLink={localeLink}
      defaultBackLabel={'Takaisin'}
      accountBtnLabel={'Kirjaudu'}
      accountBtnHandler={action('Login clicked')}
      handleSearch={() => {}}
      searchSuggestions={[]}
    />
  ))
  .addWithJSX('logged in', () => (
    <AppBar
      accountItems={accountItems}
      buttons={buttons}
      loggedIn={true}
      links={links}
      localeLink={localeLink}
      defaultBackLabel={'Takaisin'}
      accountBtnLabel={'Omasato'}
      accountBtnHandler={action('Omasato clicked')}
      handleSearch={() => {}}
      searchSuggestions={[]}
    />
  ))
  .addWithJSX('playground', () => (
    <AppBar
      accountItems={accountItems}
      buttons={buttons}
      links={links}
      localeLink={localeLink}
      loggedIn={boolean('Logged in', false, 'General')}
      defaultBackLabel={'Takaisin'}
      accountBtnLabel={'Kirjaudu'}
      accountBtnHandler={action('Login clicked')}
      handleSearch={() => {}}
      searchSuggestions={[]}
    />
  ));
