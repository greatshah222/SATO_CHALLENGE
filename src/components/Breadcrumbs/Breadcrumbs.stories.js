import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import Breadcrumbs from './index';
import theme from '../../theme';

storiesOf('Breadcrumbs', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('with multiple children', () => (
    <Breadcrumbs>
      <a href="" style={{ textDecoration: 'none', color: '#f29318' }}>
        Frist
      </a>
      <a href="" style={{ textDecoration: 'none', color: '#f29318' }}>
        Second
      </a>
      <a href="" style={{ textDecoration: 'none', color: '#333333' }}>
        Third
      </a>
    </Breadcrumbs>
  ))
  .addWithJSX('with one child', () => (
    <Breadcrumbs>
      <a href="" style={{ textDecoration: 'none', color: '#f29318' }}>
        Frist
      </a>
    </Breadcrumbs>
  ));
