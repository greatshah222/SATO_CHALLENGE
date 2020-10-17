import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import theme from '../../theme';

import Footer from './index';
import { middle, customerService, columns } from './footerItems';

storiesOf('Footer', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(
    withBackgrounds([{ name: 'light yellow', value: theme.morning.palette.background.pageContent, default: true }])
  )
  .addWithJSX('default', () => (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ width: '100%', height: '300px', background: 'lightgrey' }}>Content</div>
      <Footer
        middleRow={middle}
        companyInfo="© SATO Oyj&nbsp;&nbsp;&nbsp;Y-tunnus: 0201470-5"
        customerService={customerService}
        columns={columns}
      />
    </div>
  ));
