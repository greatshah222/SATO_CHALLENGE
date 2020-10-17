import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-backgrounds';

import ImageHeader from './index';
import PageContent from '../PageContent';
import Box from '../Box';
import CallToActionArea from '../CallToActionArea';
import Text from '../Text';

import theme from '../../theme';

storiesOf('ImageHeader', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(withKnobs)
  .addDecorator(
    withBackgrounds([{ name: 'light grey', value: '#f2f2f2', default: true }])
  )
  .addWithJSX('Header with image', () => (
    <ImageHeader src={'/helsinki.jpg'} alt='image alt' />
  ))
  .addWithJSX('Header with image ratio', () => (
    <ImageHeader src={'/oulu-peltola.webp'} alt='image alt' />
  ))
  .addWithJSX('Header with pagecontent', () => (
    <React.Fragment>
      <ImageHeader src={'/helsinki.jpg'} alt='img alt' />
      <PageContent contentFullWidthMobile transparent>
        <Box variant='pageSectionLarge' negativeTopMargin>
          <CallToActionArea contentFullWidthMobile>
            <Text variant='h3'>Helsinki</Text>
            <Text variant='body2'>Full of tiny and expensive apartments</Text>
          </CallToActionArea>
        </Box>
      </PageContent>
    </React.Fragment>
  ))
  .addWithJSX('Header with pagecontent and logo', () => (
    <React.Fragment>
      <ImageHeader src={'/helsinki.jpg'} alt='img alt'>
        <img alt='logo' src='FInlayson-white.svg' />
      </ImageHeader>
      <PageContent contentFullWidthMobile transparent>
        <Box variant='pageSectionLarge' negativeTopMargin>
          <CallToActionArea contentFullWidthMobile>
            <Text variant='h3'>Helsinki</Text>
            <Text variant='body2'>Full of tiny and expensive apartments</Text>
          </CallToActionArea>
        </Box>
      </PageContent>
    </React.Fragment>
  ))
  .addWithJSX('Header with pagecontent and title', () => (
    <React.Fragment>
      <ImageHeader src={'/helsinki.jpg'} alt='img alt'>
        <Text
          variant='h1'
          style={{ color: 'white', width: '100%', textAlign: 'center' }}
        >
          This is a title!
        </Text>
      </ImageHeader>
      <PageContent contentFullWidthMobile transparent>
        <Box variant='pageSectionLarge' negativeTopMargin>
          <CallToActionArea contentFullWidthMobile>
            <Text variant='h3'>Helsinki</Text>
            <Text variant='body2'>Full of tiny and expensive apartments</Text>
          </CallToActionArea>
        </Box>
      </PageContent>
    </React.Fragment>
  ));
