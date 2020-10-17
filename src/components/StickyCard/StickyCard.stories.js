import React from 'react';
import { storiesOf } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../theme';

import StickyCard from './index';
import Box from '../Box';
import Text from '../Text';
import PageContent from '../PageContent';
export const bg = withBackgrounds([{ name: 'light grey', value: '#f2f2f2', default: true }]);

storiesOf('StickyCard', module)
  .addDecorator(bg)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('default', () => (
    <div style={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
      <div style={{ width: '100%', height: '200px', background: 'orange' }} />
      <PageContent contentFullWidth>
        <Box variant={'pageSection'} negativeTopMargin>
          <StickyCard
            render={isFixed => (
              <React.Fragment>
                {!isFixed && (
                  <Text variant={'h3'} align={'center'}>
                    Show only if not fixed
                  </Text>
                )}
                <Text variant={'h1'} align={'center'}>
                  Sticky content
                </Text>
              </React.Fragment>
            )}
          />
        </Box>
      </PageContent>
      <PageContent>
        <div style={{ width: '100%', height: '1200px', background: 'inherit' }} />
      </PageContent>
    </div>
  ));
