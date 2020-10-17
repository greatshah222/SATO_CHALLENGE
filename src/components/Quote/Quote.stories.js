import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import theme from '../../theme';
import Quote from './index';

import Radio, { RadioGroup } from './index';

storiesOf('Quote', module)
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
    <Quote>
      "Pienessäkin hommassa voi olla paljon hommaa"
      <br />
      T: aikamme suurin ajattelija
    </Quote>
  ));
