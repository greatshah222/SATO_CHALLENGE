import React from 'react';
import { storiesOf } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';

import Box from './index';
import PageContent from '../PageContent';
export const bg = withBackgrounds([{ name: 'light grey', value: '#f2f2f2', default: true }]);

const content = (
  <div
    style={{
      background: 'white',
      borderRadius: '8px',
      width: '50%',
      height: '100px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
    section
  </div>
);

storiesOf('Box', module)
  .addDecorator(bg)
  .addWithJSX('no padding', () => (
    <div>
      <div style={{ width: '100%', height: '200px', background: 'orange' }} />
      <PageContent containerPadding>
        <Box>{content}</Box>
        <Box>{content}</Box>
      </PageContent>
    </div>
  ))
  .addWithJSX('page section', () => (
    <div>
      <div style={{ width: '100%', height: '200px', background: 'orange' }} />
      <PageContent containerPadding>
        <Box variant={'pageSection'}>{content}</Box>
        <Box variant={'pageSection'}>{content}</Box>
      </PageContent>
    </div>
  ))
  .addWithJSX('page section large', () => (
    <div>
      <div style={{ width: '100%', height: '200px', background: 'orange' }} />
      <PageContent containerPadding>
        <Box variant={'pageSectionLarge'}>{content}</Box>
        <Box variant={'pageSectionLarge'}>{content}</Box>
      </PageContent>
    </div>
  ))
  .addWithJSX('page section small', () => (
    <div>
      <div style={{ width: '100%', height: '200px', background: 'orange' }} />
      <PageContent containerPadding>
        <Box variant={'pageSectionSmall'}>{content}</Box>
        <Box variant={'pageSectionSmall'}>{content}</Box>
      </PageContent>
    </div>
  ))
  .addWithJSX('page section extra small', () => (
    <div>
      <div style={{ width: '100%', height: '200px', background: 'orange' }} />
      <PageContent containerPadding>
        <Box variant={'pageSectionXSmall'}>{content}</Box>
        <Box variant={'pageSectionXSmall'}>{content}</Box>
      </PageContent>
    </div>
  ))
  .addWithJSX('page section lifted', () => (
    <div>
      <div style={{ width: '100%', height: '200px', background: 'orange' }} />
      <PageContent>
        <Box variant={'pageSection'} negativeTopMargin>
          {content}
        </Box>
      </PageContent>
    </div>
  ))
  .addWithJSX('page section lifted even more', () => (
    <div>
      <div style={{ width: '100%', height: '400px', background: 'orange' }} />
      <PageContent>
        <Box variant={'pageSection'} largeNegativeTopMargin>
          <div
            style={{
              background: 'white',
              borderRadius: '8px',
              width: '50%',
              height: '250px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            section
          </div>
        </Box>
      </PageContent>
    </div>
  ));
