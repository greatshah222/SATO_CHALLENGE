import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import Text from '../Text';

import CallToActionArea from './index';
import CallToActionAreaContent from '../CallToActionAreaContent';
import CallToActonAreaLift from '../CallToActionAreaLift';
import PageContent from '../PageContent';
import ImageHeader from '../ImageHeader';
import theme from '../../theme';

storiesOf('CallToActionArea', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(
    withBackgrounds([{ name: 'light yellow', value: theme.morning.palette.background.pageContent, default: true }])
  )
  .addWithJSX('default', () => (
    <CallToActionArea>
      <Text variant="h5">Content goes here</Text>
    </CallToActionArea>
  ))
  .addWithJSX('full width and no border radius on mobile', () => (
    <CallToActionArea contentFullWidthMobile noBorderRadiusOnMobile>
      <Text variant="h5">Content goes here</Text>
    </CallToActionArea>
  ))
  .addWithJSX('bigger padding', () => (
    <CallToActionArea biggerPadding>
      <Text variant="h5">Content goes here</Text>
    </CallToActionArea>
  ))
  .addWithJSX('with call to action area content', () => (
    <PageContent>
      <CallToActionArea>
        <CallToActionAreaContent>
          <Text variant="h4">Title</Text>
          <Text variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </CallToActionAreaContent>
      </CallToActionArea>
    </PageContent>
  ))
  .addWithJSX('with call to action area content and lift', () => (
    <PageContent>
      <CallToActionArea>
        <CallToActionAreaContent>
          <Text variant="h4">Title</Text>
          <Text variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <CallToActonAreaLift>
            <ImageHeader src={'/helsinki.jpg'} />
          </CallToActonAreaLift>
          <Text variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </CallToActionAreaContent>
      </CallToActionArea>
    </PageContent>
  ));
