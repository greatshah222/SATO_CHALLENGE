import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';
import { accountItems, buttons, links, localeLink } from './menuItems';
import { action } from '@storybook/addon-actions';
import { suggestions } from '../../SiteSearch/stories/suggestions';

import MobileBar from '../MobileBar.js';
import theme from '../../../theme';

import { bg } from './AppBar.stories';

storiesOf('MobileBar', module)
  .addDecorator(bg)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(withKnobs)
  .addDecorator(withViewport('iphone6'))
  .addWithJSX('unsigned', () => (
    <div>
      <MobileBar
        accountItems={accountItems}
        buttons={buttons}
        loggedIn={false}
        links={links}
        localeLink={localeLink}
        defaultBackLabel={'Takaisin'}
        accountBtnLabel={'Kirjaudu'}
        accountBtnHandler={action('Login clicked')}
        searchSuggestions={[]}
        handleSearch={action('Search term:')}
        searchPlaceholder={'Etsi tietoa SATOlta...'}
        searchTerm={''}
        logoBtnHandler={action('Logo clicked')}
      />
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
      CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT CONTENT
    </div>
  ))
  .addWithJSX('with search results', () => (
    <MobileBar
      accountItems={accountItems}
      buttons={buttons}
      loggedIn={false}
      links={links}
      localeLink={localeLink}
      defaultBackLabel={'Takaisin'}
      accountBtnLabel={'Kirjaudu'}
      accountBtnHandler={action('Login clicked')}
      searchSuggestions={suggestions}
      handleSearch={action('Search term:')}
      searchPlaceholder={'Etsi tietoa SATOlta...'}
      searchTerm={'vuokra'}
      logoBtnHandler={action('Logo clicked')}
    />
  ))
  .addWithJSX('logged in', () => (
    <MobileBar
      accountItems={accountItems}
      buttons={buttons}
      loggedIn={true}
      links={links}
      localeLink={localeLink}
      defaultBackLabel={'Takaisin'}
      accountBtnLabel={'Omasato'}
      accountBtnHandler={action('Omasato clicked')}
      searchSuggestions={[]}
      handleSearch={action('Search term:')}
      searchPlaceholder={'Etsi tietoa SATOlta...'}
      searchTerm={''}
      logoBtnHandler={action('Logo clicked')}
    />
  ))
  .addWithJSX('playground', () => (
    <MobileBar
      accountItems={accountItems}
      buttons={buttons}
      loggedIn={boolean('Logged in', false, 'General')}
      links={links}
      localeLink={localeLink}
      defaultBackLabel={'Takaisin'}
      accountBtnLabel={'Kirjaudu'}
      accountBtnHandler={action('Login clicked')}
      searchSuggestions={[]}
      handleSearch={action('Search term:')}
      searchPlaceholder={'Etsi tietoa SATOlta...'}
      searchTerm={''}
      logoBtnHandler={action('Logo clicked')}
    />
  ));
