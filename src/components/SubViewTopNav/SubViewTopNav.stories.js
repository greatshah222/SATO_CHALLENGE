import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withKnobs } from '@storybook/addon-knobs';

import theme from '../../theme';
import SubViewTopNav, { SubViewTopNavItem } from './index';
import Text from '../Text';
import Logo from '../../icons/Logo';
import CloseSmall from '../../icons/CloseSmall';
import Information from '../../icons/Information';

storiesOf('SubViewTopNav', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(
    withBackgrounds([{ name: 'light yellow', value: theme.morning.palette.background.pageContent, default: true }])
  )
  .addDecorator(withKnobs)
  .addWithJSX('left item', () => (
    <SubViewTopNav
      leftItem={
        <SubViewTopNavItem icon={<CloseSmall />} text="Cancel" alignment="left" style={{ cursor: 'pointer' }} />
      }
    />
  ))
  .addWithJSX('left and right item', () => (
    <SubViewTopNav
      leftItem={
        <SubViewTopNavItem icon={<CloseSmall />} text="Cancel" alignment="left" style={{ cursor: 'pointer' }} />
      }
      rightItem={
        <SubViewTopNavItem icon={<Information />} text="Info" alignment="right" style={{ cursor: 'pointer' }} />
      }
    />
  ))
  .addWithJSX('left, right and center item', () => (
    <SubViewTopNav
      leftItem={
        <SubViewTopNavItem icon={<CloseSmall />} text="Cancel" alignment="left" style={{ cursor: 'pointer' }} />
      }
      centerItem={<Text variant="h6">Title</Text>}
      rightItem={<SubViewTopNavItem icon={<Information />} text="Info" alignment="right" color="primary" />}
    />
  ))
  .addWithJSX('logo', () => (
    <SubViewTopNav
      leftItem={
        <SubViewTopNavItem icon={<CloseSmall />} text="Cancel" alignment="left" style={{ cursor: 'pointer' }} />
      }
      centerItem={<Logo style={{ height: '24px' }} />}
      rightItem={
        <SubViewTopNavItem icon={<Information />} text="Info" alignment="right" style={{ cursor: 'pointer' }} />
      }
    />
  ));
