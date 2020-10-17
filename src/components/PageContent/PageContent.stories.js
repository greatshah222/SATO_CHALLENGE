import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import PageContent from './index';
import Text from '../Text/index';
import Footer from '../Footer';
import Box from '../Box';
import { middle, customerService, columns } from '../Footer/footerItems';
import theme from '../../theme';

const renderPageContent = (contentFullWidth, noBackground, contentFullWidthMobile) => {
  return (
    <PageContent
      contentFullWidth={contentFullWidth}
      noBackground={noBackground}
      contentFullWidthMobile={contentFullWidthMobile}
    >
      <Text variant="h3">This is page content area :)</Text>
    </PageContent>
  );
};

storiesOf('PageContent', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('Page content with text', () => renderPageContent())
  .addWithJSX('Page content full width', () => renderPageContent(true))
  .addWithJSX('Page content full width only on mobile', () => renderPageContent(false, false, true))
  .addWithJSX('Page content without background', () => renderPageContent(false, true))
  .addWithJSX('Page content with content blocks', () => (
    <PageContent>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </PageContent>
  ))
  .addWithJSX('Page content with Footer', () => (
    <React.Fragment>
      <PageContent containerPadding>
        <Box style={{ background: 'white', height: '500px' }}>CONTENT</Box>
      </PageContent>
      <Footer
        middleRow={middle}
        companyInfo="© SATO Oyj&nbsp;&nbsp;&nbsp;Y-tunnus: 0201470-5"
        customerService={customerService}
        columns={columns}
      />
    </React.Fragment>
  ));
