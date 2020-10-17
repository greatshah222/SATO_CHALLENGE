import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import HugeTextField from './index';
import InputAdornment from '../InputAdornment/index';
import theme from '../../theme';

import SearchIcon from '../../icons/LargeSearch';

storiesOf('HugeTextField', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('Huge Text Field with icon adornment', () => (
    <HugeTextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  ));
