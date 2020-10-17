import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../theme';
import SplitPage from './';
import Box from '../Box';
import Text from '../Text';
import Button from '../Button';

storiesOf('SplitPage', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('default', () => (
    <SplitPage imageSrc="/hero-image-application-success.jpg">
      <Box variant={'pageSectionSmall'}>
        <Text variant={'h3'} color={'primary'}>
          Kiitos hakemuksestasi
        </Text>
      </Box>
      <Box variant={'pageSectionXSmall'}>
        <Text component={'p'}>
          Myyntiedustajamme on sinuun yhteydessä puhelimitse tai sähköpostitse kun toiveitasi vastaavia koteja on
          saatavilla.
        </Text>
      </Box>
      <Box variant={'pageSectionSmall'}>
        <Text component={'p'}>
          Hakemuksestasi on lähetetty kooste sähköpostitse osoitteeseen david@hasselhoff.com.{' '}
        </Text>
      </Box>
      <Box>
        <Button variant={'contained'} color={'primary'}>
          Siirry etusivulle
        </Button>
      </Box>
    </SplitPage>
  ));
