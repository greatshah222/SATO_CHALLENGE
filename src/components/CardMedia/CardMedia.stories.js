import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import CardMedia from './index';
import Card from '../Card/index';
import theme from '../../theme';

const renderCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="House"
        style={{
          height: '140px',
          width: 'auto',
          margin: '0 auto',
        }}
        height="140"
        image="/oulu-peltola.webp"
        title="My House"
      />
    </Card>
  );
};

storiesOf('CardMedia', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('Media component in card', () => renderCard());
