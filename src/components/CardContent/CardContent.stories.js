import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import Card from '../Card/index';
import Grid from '../Grid/index';
import Text from '../Text/index';
import CardContent from './index';
import theme from '../../theme';

const renderContent = () => {
  return (
    <Card style={{ background: '#efefef' }}>
      <CardContent>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <Text variant='h6'>Grid item xs = 6</Text>
          </Grid>
          <Grid item xs={6}>
            <Text variant='h6'>Grid item xs = 6</Text>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const renderSmallContent = () => {
  return (
    <Card style={{ background: '#efefef', width: '200px' }}>
      <CardContent smallContent>
        <Text variant='h6' color='primary'>
          Small title
        </Text>
        <Text variant='body2'>Small margin</Text>
      </CardContent>
    </Card>
  );
};

const renderCenterContent = () => {
  return (
    <Card style={{ background: '#efefef', width: '400px' }}>
      <CardContent container>
        <Text variant='h6' color='primary'>
          Title
        </Text>
        <Text variant='body2'>Content in the center, normal margins</Text>
      </CardContent>
    </Card>
  );
};

storiesOf('CardContent', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('Content with Grid inside', () => renderContent())
  .addWithJSX('Small content margins', () => renderSmallContent())
  .addWithJSX('Content with centered content', () => renderCenterContent());
