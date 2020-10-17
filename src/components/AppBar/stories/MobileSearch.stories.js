import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-backgrounds';

import MobileSearch from '../MobileSearch.js';
import theme from '../../../theme';
import { action } from '@storybook/addon-actions';

export const bg = withBackgrounds([{ name: 'light grey', value: '#f2f2f2', default: true }]);

storiesOf('MobileSearch', module)
  .addDecorator(bg)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <MobileSearch
      searchTerm={''}
      searchPlaceholder={'Etsi...'}
      closeSearch={action('Close search')}
      handleSearch={action('Handle search')}
    />
  ));
