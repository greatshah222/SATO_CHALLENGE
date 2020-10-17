import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

import CallToActionBar from './index';
import Button from '../Button';
import theme from '../../theme';

storiesOf('CallToActionBar', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('with button', () => (
    <CallToActionBar open={true}>
      <Button variant="contained" style={{ background: 'white' }} key={'1'} onClick={action('clicked')}>
        Click me!
      </Button>
    </CallToActionBar>
  ))
  .addWithJSX('with button and text', () => (
    <CallToActionBar
      open={true}
      action={[
        <Button variant="contained" style={{ background: 'white' }} key={'1'} onClick={action('clicked')}>
          Click me!
        </Button>,
      ]}
      message={['Information about clicking ...']}
    />
  ))
  .addWithJSX('transparent', () => (
    <CallToActionBar open={true} transparent>
      <Button color="primary" variant="contained" key={'1'} onClick={action('clicked')}>
        Click me!
      </Button>
    </CallToActionBar>
  ));
