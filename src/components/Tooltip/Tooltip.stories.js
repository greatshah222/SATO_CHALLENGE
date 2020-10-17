import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import Tooltip from './index';
import Question from '../../icons/Question';
import theme from '../../theme';

storiesOf('Tooltip', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('default', () => (
    <Tooltip title="Test">
      <Question />
    </Tooltip>
  ))
  .addWithJSX('link in title', () => (
    <Tooltip
      title={
        <div>
          Test
          <a href="https://www.google.com">Link</a>
        </div>
      }
    >
      <Question />
    </Tooltip>
  ));
