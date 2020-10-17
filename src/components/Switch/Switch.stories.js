import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

import Switch from './index';
import theme from '../../theme';

storiesOf('Switch', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('default', () => <Switch onChange={action(console.log('onChange'))} />);
