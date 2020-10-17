import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import Card from './index';
import Grid from '../Grid/index';
import Text from '../Text/index';
import CardImageMedia from '../CardImageMedia/index';
import CardContent from '../CardContent/index';
import CardMedia from '../CardMedia/index';
import theme from '../../theme';

const renderCard = () => {
  return (
    <Card style={{ background: '#efefef' }}>
      <CardContent smallContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Text variant="h6">Grid item xs = 6</Text>
          </Grid>
          <Grid item xs={6}>
            <Text variant="h6">Grid item xs = 6</Text>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const renderCardWithImage = () => {
  return (
    <Card style={{ background: '#efefef', width: '400px' }}>
      <CardImageMedia url={'/oulu-peltola.webp'} />
      <CardContent smallContent>
        <Text variant="body2">Text in card content</Text>
      </CardContent>
    </Card>
  );
};

const renderSquaredCard = () => {
  return (
    <Card square style={{ background: '#efefef', width: '400px' }}>
      <CardImageMedia url={'/oulu-peltola.webp'} />
      <CardContent smallContent>
        <Text variant="body2">Text in card content</Text>
      </CardContent>
    </Card>
  );
};

const renderCardWithMediaComponent = () => {
  return (
    <Card style={{ background: '#efefef', width: '600px' }}>
      <CardMedia
        component={() => (
          <Grid
            style={{
              backgroundImage: 'url(/oulu-peltola.webp)',
              backgroundPosition: '50%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '140px',
            }}
            container
          >
            <Grid item xs={12} style={{ position: 'relative' }}>
              <Text
                variant="h3"
                style={{
                  textAlign: 'center',
                  width: '100%',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                Media Header
              </Text>
            </Grid>
          </Grid>
        )}
        height="140"
      />
      <CardContent>
        <Text variant="h6">title</Text>
        <Text variant="body1">Media to include any other media provided by MUI CardMedia</Text>
      </CardContent>
    </Card>
  );
};

const renderSmallCard = () => {
  return (
    <Card style={{ background: '#efefef', width: '200px' }} smallCard>
      <CardContent>
        <Text variant="h6" color="primary">
          Small title
        </Text>
        <Text variant="body2">low radius, square on mobile</Text>
      </CardContent>
    </Card>
  );
};

const renderCardWithEvents = () => {
  return (
    <Card style={{ background: '#efefef', width: '200px' }} mouseEvents>
      <CardContent>
        <Text variant="h6" color="primary">
          Small title
        </Text>
        <Text variant="body2">Text Text Text Text Text</Text>
      </CardContent>
    </Card>
  );
};

storiesOf('Card', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('Card with Grid inside', () => renderCard())
  .addWithJSX('Card with image and content', () => renderCardWithImage())
  .addWithJSX('Card with squared corners', () => renderSquaredCard())
  .addWithJSX('Small card', () => renderSmallCard())
  .addWithJSX('Card with mouse events', () => renderCardWithEvents())
  .addWithJSX('Card withe cardMedia', () => renderCardWithMediaComponent());
