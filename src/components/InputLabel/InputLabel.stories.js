import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import InputLabel from './index';
import theme from '../../theme';

storiesOf('InputLabel', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('standard', () => <InputLabel>Standard label</InputLabel>)
  .addWithJSX('error', () => <InputLabel error={true}>Standard label</InputLabel>);
