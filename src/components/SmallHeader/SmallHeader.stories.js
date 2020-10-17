import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../theme';

import SmallHeader from './';
import Button from '../Button';
import Box from '../Box';
import Card from '../Card';

import Maintenance from '../../icons/Maintenance';

storiesOf('SmallHeader', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('default', () => (
    <SmallHeader title='Tervetuloa asumaan Satolle' />
  ))
  .addWithJSX('with content', () => (
    <div>
      <SmallHeader title='Tervetuloa asumaan Satolle' />
      <div>
        <Box variant='pageSection' negativeTopMargin>
          <Card
            style={{
              width: '50%',
              height: '100px',
              background: 'red',
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'relative',
            }}
          >
            CONTENT
          </Card>
        </Box>
      </div>
    </div>
  ))
  .addWithJSX('with subtitle', () => (
    <SmallHeader title='Tervetuloa asumaan Satolle' subtitle='Lorem Ipsum' />
  ))
  .addWithJSX('with icon', () => (
    <SmallHeader title='Tervetuloa asumaan Satolle' icon={<Maintenance />} />
  ))
  .addWithJSX('with icon and subtitle', () => (
    <SmallHeader
      title='Tervetuloa asumaan Satolle'
      subtitle='Lorem Ipsum'
      icon={<Maintenance />}
    />
  ))
  .addWithJSX('with icon, subtitle and button', () => (
    <SmallHeader
      title='Tervetuloa asumaan Satolle'
      subtitle='Lorem Ipsum'
      icon={<Maintenance />}
      button={
        <Button color='primary' variant='contained'>
          Click
        </Button>
      }
    />
  ));
