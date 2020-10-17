import React from 'react';
import { storiesOf } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { muiTheme } from 'storybook-addon-material-ui';

import TextFieldWithMask from './index';
import theme from '../../theme';

storiesOf('TextFieldWithMask', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(
    withBackgrounds([
      { name: 'Morning', value: theme.morning.palette.background.pageContent },
      { name: 'Evening', value: theme.evening.palette.background.pageContent },
      { name: 'Day', value: theme.day.palette.background.pageContent },
      { name: 'Night', value: theme.night.palette.background.pageContent },
    ])
  )
  .addWithJSX('default', () => <TextFieldWithMask mask={'_'} format={'######'} />)
  .addWithJSX('Verification code', () => <TextFieldWithMask mask={'·'} format={'######'} verificationCode />);
