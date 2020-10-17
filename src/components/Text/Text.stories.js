import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import Text from './index';
import theme from '../../theme';

storiesOf('Text', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('Heading text 1', () => <Text variant="h1">Lorem Ipsum</Text>)
  .addWithJSX('Heading text 2', () => <Text variant="h2">Lorem Ipsum</Text>)
  .addWithJSX('Heading text 3', () => <Text variant="h3">Lorem Ipsum</Text>)
  .addWithJSX('Heading text 4', () => <Text variant="h4">Lorem Ipsum</Text>)
  .addWithJSX('Heading text 5', () => <Text variant="h5">Lorem Ipsum</Text>)
  .addWithJSX('Heading text 6', () => <Text variant="h6">Lorem Ipsum</Text>)
  .addWithJSX('Sub title 1', () => <Text variant="subtitle1">Lorem Ipsum</Text>)
  .addWithJSX('Sub title 2', () => <Text variant="subtitle2">Lorem Ipsum</Text>)
  .addWithJSX('Body 1 Text', () => <Text variant="body1">Lorem Ipsum</Text>)
  .addWithJSX('Body 2 Text', () => <Text variant="body2">Lorem Ipsum</Text>)
  .addWithJSX('Button', () => <Text variant="button">Lorem Ipsum</Text>)
  .addWithJSX('Caption', () => <Text variant="caption">Lorem Ipsum</Text>)
  .addWithJSX('Label', () => <Text variant="label">Lorem Ipsum</Text>)
  .addWithJSX('Label small', () => <Text variant="labelSmall">Lorem Ipsum</Text>)
  .addWithJSX('Softy', () => <Text variant={'softy'}>Lorem Ipsum</Text>)
  .addWithJSX('Softy L', () => <Text variant={'softyL'}>Lorem Ipsum</Text>)
  .addWithJSX('Softy XL', () => <Text variant={'softyXL'}>Lorem Ipsum</Text>)
  .addWithJSX('Softy XL grey', () => (
    <Text variant={'softyXL'} color={'grey'}>
      Lorem Ipsum
    </Text>
  ))
  .addWithJSX('Body 1 Link text', () => (
    <Text link variant="body1">
      Lorem Ipsum
    </Text>
  ))
  .addWithJSX('Button menu item', () => <Text variant={'buttonMenuItem'}>Lorem Ipsum</Text>);
