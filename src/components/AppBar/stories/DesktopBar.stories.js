import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import DesktopBar from '../DesktopBar.js';
import theme from '../../../theme';
import { accountItems, buttons, links, localeLink } from './menuItems';
import { bg } from './AppBar.stories';
import { action } from '@storybook/addon-actions';
import { suggestions } from '../../SiteSearch/stories/suggestions';

storiesOf('DesktopBar', module)
  .addDecorator(bg)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(withKnobs)
  .addWithJSX('unsigned', () => (
    <DesktopBar
      accountItems={accountItems}
      buttons={buttons}
      loggedIn={false}
      links={links}
      localeLink={localeLink}
      accountBtnLabel={'Kirjaudu'}
      accountBtnHandler={action('Login clicked')}
      searchSuggestions={suggestions}
      handleSearch={action('Search term:')}
      searchPlaceholder={'Etsi tietoa SATOlta...'}
      searchTerm={''}
      logoBtnHandler={action('Logo clicked')}
    />
  ))
  .addWithJSX('logged in', () => (
    <DesktopBar
      accountItems={accountItems}
      buttons={buttons}
      loggedIn={true}
      links={links}
      localeLink={localeLink}
      accountBtnLabel={'Omasato'}
      accountBtnHandler={action('Omasato clicked')}
      searchSuggestions={[]}
      handleSearch={action('Search term:')}
      searchPlaceholder={'Etsi tietoa SATOlta...'}
      searchTerm={''}
      logoBtnHandler={action('Logo clicked')}
    />
  ))
  .addWithJSX('empty search results', () => (
    <DesktopBar
      accountItems={accountItems}
      buttons={buttons}
      loggedIn={false}
      links={links}
      localeLink={localeLink}
      accountBtnLabel={'Kirjaudu'}
      accountBtnHandler={action('Login clicked')}
      searchSuggestions={[]}
      handleSearch={action('Search term:')}
      searchPlaceholder={'Etsi tietoa SATOlta...'}
      searchTerm={''}
      logoBtnHandler={action('Logo clicked')}
    />
  ))
  .addWithJSX('with search results', () => (
    <DesktopBar
      accountItems={accountItems}
      buttons={buttons}
      loggedIn={false}
      links={links}
      localeLink={localeLink}
      accountBtnLabel={'Kirjaudu'}
      accountBtnHandler={action('Login clicked')}
      searchSuggestions={suggestions}
      handleSearch={action('Search term:')}
      searchPlaceholder={'Etsi tietoa SATOlta...'}
      searchTerm={''}
      logoBtnHandler={action('Logo clicked')}
    />
  ))
  .addWithJSX('playground', () => (
    <DesktopBar
      accountItems={accountItems}
      buttons={buttons}
      loggedIn={boolean('Logged in', false, 'General')}
      links={links}
      localeLink={localeLink}
      accountBtnLabel={'Kirjaudu'}
      accountBtnHandler={action('Login clicked')}
      searchSuggestions={[]}
      handleSearch={action('Search term:')}
      searchPlaceholder={'Etsi tietoa SATOlta...'}
      searchTerm={''}
      logoBtnHandler={action('Logo clicked')}
    />
  ));
