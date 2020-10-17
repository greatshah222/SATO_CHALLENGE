import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import ToggleButton from './index';
import theme from '../../theme';

storiesOf('ToggleButton', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('not selected', () => {
    return (
      <ToggleButton selected={false} value="1">
        I am not selected
      </ToggleButton>
    );
  })
  .addWithJSX('selected', () => {
    return (
      <ToggleButton selected={true} value="2">
        I am selected
      </ToggleButton>
    );
  });
