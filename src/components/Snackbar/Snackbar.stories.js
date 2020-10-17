import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import { withBackgrounds } from '@storybook/addon-backgrounds';

import Snackbar from './index';
import Button from '../Button';
import CallToActionBar from '../CallToActionBar';
import Information from '../../icons/Information';
import theme from '../../theme';

storiesOf('Snackbar', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(
    withBackgrounds([{ name: 'light yellow', value: theme.morning.palette.background.pageContent, default: true }])
  )
  .addWithJSX('default', () => <Snackbar message={['Information about stuff ...']} />)
  .addWithJSX('with icon', () => (
    <Snackbar message={['Information about stuff ...']} action={[<Information key={'1'} color="primary" />]} />
  ))
  .addWithJSX('with action', () => (
    <Snackbar
      action={[
        <Button key={'1'} onClick={action('clicked')} color="primary">
          Click me!
        </Button>,
      ]}
      message={['Information about stuff ...']}
    />
  ))
  .addWithJSX('Error message', () => <Snackbar message={'This is an Error!'} type="ERROR" />)
  .addWithJSX('Above CallToActionBar', () => (
    <React.Fragment>
      <Snackbar message={'This should clear the below element!'} biggerOffset />
      <CallToActionBar open={true}>
        <Button variant="contained" style={{ background: 'white' }} key={'1'} onClick={action('clicked')}>
          Click me!
        </Button>
      </CallToActionBar>
    </React.Fragment>
  ));
