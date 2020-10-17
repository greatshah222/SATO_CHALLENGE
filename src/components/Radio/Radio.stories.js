import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import theme from '../../theme';

import Radio, { RadioGroup } from './index';

storiesOf('Radio', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(
    withBackgrounds([
      { name: 'Morning', value: theme.morning.palette.background.pageContent },
      { name: 'Evening', value: theme.evening.palette.background.pageContent },
      { name: 'Day', value: theme.day.palette.background.pageContent },
      { name: 'Night', value: theme.night.palette.background.pageContent },
    ])
  )
  .addWithJSX('default', () => (
    <RadioGroup>
      <Radio label="1" value="1" />
      <Radio label="2" value="2" />
    </RadioGroup>
  ))
  .addWithJSX('with error', () => (
    <RadioGroup helperText="Error" error>
      <Radio label="1" value="1" />
      <Radio label="2" value="2" />
    </RadioGroup>
  ));
