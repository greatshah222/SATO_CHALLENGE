import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import ActionText from './index';
import theme from '../../theme';

import Icon from '../../icons/ChevronRight';

storiesOf('ActionText', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('normal', () => <ActionText>Click me!</ActionText>)
  .addWithJSX('with icon', () => (
    <ActionText onClick={() => alert('You clicked me!')}>
      <Icon /> Click me!
    </ActionText>
  ));
