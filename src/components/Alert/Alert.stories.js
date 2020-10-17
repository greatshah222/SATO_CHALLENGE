import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import Information from '../../icons/Information';
import Alert from './index';
import Text from '../Text/index';
import theme from '../../theme';

storiesOf('Alert', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('with icon', () => (
    <Alert icon={<Information color={'primary'} />}>
      <Text component="p">This is an alert</Text>
    </Alert>
  ))
  .addWithJSX('without icon', () => (
    <Alert>
      <Text component="p">This is an alert</Text>
    </Alert>
  ))
  .addWithJSX('error', () => (
    <Alert isError>
      <Text color="error" component="p">
        This is a error
      </Text>
    </Alert>
  ))
  .addWithJSX('long text', () => (
    <Alert icon={<Information color={'primary'} />}>
      <Text component="p">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
        </p>
      </Text>
    </Alert>
  ));
