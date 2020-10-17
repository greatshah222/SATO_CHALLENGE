import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import theme from '../../theme';

import ExpansionSelect from './index';
import MenuItem from '../MenuItem/index';

storiesOf('ExpansionSelect', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(
    withBackgrounds([{ name: 'light yellow', value: theme.morning.palette.background.pageContent, default: true }])
  )
  .addWithJSX('with count', () => (
    <ExpansionSelect title={'Selection Title'} selectedCount={2}>
      <MenuItem key="foo" value="foo">
        Hissi
      </MenuItem>
      <MenuItem key="bar" value="bar">
        Parveke
      </MenuItem>
      <MenuItem key="bzr" value="baz">
        Sauna
      </MenuItem>
    </ExpansionSelect>
  ))
  .addWithJSX('without count', () => (
    <ExpansionSelect title={'Selection Title'}>
      <MenuItem key="foo" value="foo">
        Hissi
      </MenuItem>
      <MenuItem key="bar" value="bar">
        Parveke
      </MenuItem>
      <MenuItem key="bzr" value="baz">
        Sauna
      </MenuItem>
    </ExpansionSelect>
  ));
