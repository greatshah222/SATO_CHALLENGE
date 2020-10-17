import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import TextButton from './index';

import theme from '../../theme';

storiesOf('TextButton', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('Default', () => <TextButton label="Text button" onClick={() => alert('Pressed')} />)
  .addWithJSX('Bold', () => <TextButton label="Text button with bold text" onClick={() => alert('Pressed')} bold />)
  .addWithJSX('With color', () => (
    <TextButton label="Text button with primary color" onClick={() => alert('Pressed')} bold color="primary" />
  ));
