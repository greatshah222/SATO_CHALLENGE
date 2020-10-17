import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import theme from '../../theme';

import Select from './index';
import MenuItem from '../MenuItem/index';
storiesOf('Select', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(
    withBackgrounds([{ name: 'light yellow', value: theme.morning.palette.background.pageContent, default: true }])
  )
  .addWithJSX('with single selection', () => (
    <Select value="bar">
      <MenuItem key="foo" value="foo">
        Hissi
      </MenuItem>
      <MenuItem key="bar" value="bar">
        Parveke
      </MenuItem>
      <MenuItem key="bzr" value="baz">
        Sauna
      </MenuItem>
    </Select>
  ))
  .addWithJSX('with multi selection', () => (
    <Select SelectProps={{ multiple: true }} value={['foo', 'baz']}>
      <MenuItem key="foo" value="foo">
        Hissi
      </MenuItem>
      <MenuItem key="bar" value="bar">
        Parveke
      </MenuItem>
      <MenuItem key="baz" value="baz">
        Sauna
      </MenuItem>
    </Select>
  ))
  .addWithJSX('with floating label', () => (
    <Select style={{ width: '200px' }} value={''} label="Feature" floatingLabel SelectProps={{ displayEmpty: true }}>
      <MenuItem key="foo" value="foo">
        Hissi
      </MenuItem>
      <MenuItem key="bar" value="bar">
        Parveke
      </MenuItem>
      <MenuItem key="baz" value="baz">
        Sauna
      </MenuItem>
    </Select>
  ));
