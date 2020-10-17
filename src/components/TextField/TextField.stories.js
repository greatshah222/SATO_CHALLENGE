import React from 'react';
import { storiesOf } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { muiTheme } from 'storybook-addon-material-ui';

import TextField from './index';
import InputAdornment from '../InputAdornment/index';
import Text from '../Text/index';
import theme from '../../theme';

import SearchIcon from '../../icons/Search';

const validInput = false;

storiesOf('TextField', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(
    withBackgrounds([
      { name: 'Morning', value: theme.morning.palette.background.pageContent },
      { name: 'Evening', value: theme.evening.palette.background.pageContent },
      { name: 'Day', value: theme.day.palette.background.pageContent },
      { name: 'Night', value: theme.night.palette.background.pageContent },
    ])
  )
  .addWithJSX('Text Field', () => <TextField label="Fill me!" placeholder="Hi! Please, type something" />)
  .addWithJSX('Text Field with floating label', () => (
    <TextField label="Fill me!" floatingLabel placeholder="Hi! Please, type something" />
  ))
  .addWithJSX('Text Field with adornment', () => (
    <TextField
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Text variant="body1">Vuokra</Text>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Text variant="body1">€</Text>
          </InputAdornment>
        ),
      }}
    />
  ))
  .addWithJSX('Text Field with icon adornment', () => (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  ))
  .addWithJSX('Textarea', () => <TextField placeholder="Hi! Please, type something looooong" multiline rows={6} />)
  .addWithJSX('Text Field with helper text', () => (
    <TextField placeholder="Hi! Please, type something" helperText={'Helper text'} />
  ))
  .addWithJSX('Text Field with error', () => (
    <TextField
      placeholder="Hi! Please, type something"
      error={!validInput}
      helperText={validInput ? null : 'Fill this field!'}
    />
  ))
  .addWithJSX('Text Field with no border-radius', () => (
    <TextField label="Fill me!" placeholder="Hi! Please, type something" noBorderRadius />
  ));
