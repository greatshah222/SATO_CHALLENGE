import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../../theme';
import { withKnobs } from '@storybook/addon-knobs';
import SearchResultList from '../SearchResultsList';
import { suggestions } from './suggestions';
import { action } from '@storybook/addon-actions';

storiesOf('SearchResultsList', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(withKnobs)
  .addWithJSX('List', () => <SearchResultList suggestions={suggestions} closeSearchDialog={action('Close')} />);
