import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../theme';

import Header from './';
import Box from '../Box';
import Card from '../Card';
import PageContent from '../PageContent';

storiesOf('Header', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('with subtitle', () => (
    <Header
      title="Moi Aleksi, mukava tavata!"
      subtitle="Ei huomisesta kukaan koskaan tiedä, siksi anna vaan elämän sua viedä."
      imageSrc="https://res.cloudinary.com/sato/image/upload/c_scale,w_1920,f_auto/prod/kohde-Helsinki-Pohjois-Haaga-L6xhYxFgVInEtlbIx4HvXf58UGXIzmFxkhbxS5jiy1sXVFJ"
    />
  ))
  .addWithJSX('with subtitle and lifted content element', () => (
    <div>
      <Header
        title="Moi Aleksi, mukava tavata!"
        subtitle="Ei huomisesta kukaan koskaan tiedä, siksi anna vaan elämän sua viedä."
        imageSrc="https://res.cloudinary.com/sato/image/upload/c_scale,w_1920,f_auto/prod/kohde-Helsinki-Pohjois-Haaga-L6xhYxFgVInEtlbIx4HvXf58UGXIzmFxkhbxS5jiy1sXVFJ"
      />
      <PageContent>
        <Box variant="pageSection" negativeTopMargin>
          <Card
            style={{
              height: '100px',
              background: 'white',
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'relative',
            }}
          >
            CONTENT
          </Card>
        </Box>
      </PageContent>
    </div>
  ))
  .addWithJSX('with preTitle', () => (
    <Header
      title="Löydä unelmiesi koti"
      preTitle="Millainen on sinun unelmiesi vuokra-asunto?"
      imageSrc="https://res.cloudinary.com/sato/image/upload/c_scale,w_1920,f_auto/prod/kohde-Helsinki-Pohjois-Haaga-L6xhYxFgVInEtlbIx4HvXf58UGXIzmFxkhbxS5jiy1sXVFJ"
    />
  ))
  .addWithJSX('large with preTitle', () => (
    <Header
      isLarge
      title="Löydä unelmiesi koti"
      preTitle="Millainen on sinun unelmiesi vuokra-asunto?"
      imageSrc="https://res.cloudinary.com/sato/image/upload/c_scale,w_1920,f_auto/prod/kohde-Helsinki-Pohjois-Haaga-L6xhYxFgVInEtlbIx4HvXf58UGXIzmFxkhbxS5jiy1sXVFJ"
    />
  ))
  .addWithJSX('no image on mobile', () => (
    <Header
      title="Viestit"
      imageSrc="https://res.cloudinary.com/sato/image/upload/c_scale,w_1920,f_auto/prod/kohde-Helsinki-Pohjois-Haaga-L6xhYxFgVInEtlbIx4HvXf58UGXIzmFxkhbxS5jiy1sXVFJ"
      noImageOnMobile
    />
  ));
