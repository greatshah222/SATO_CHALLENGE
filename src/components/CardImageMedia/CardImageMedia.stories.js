import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import CardImageMedia from './index';
import Card from '../Card/index';
import Text from '../Text';
import theme from '../../theme';

const renderCard = ratio => {
  const imageUrl = '/oulu-peltola.webp';

  return (
    <Card style={{ width: '400px' }}>
      <CardImageMedia url={imageUrl} aspectRatio={ratio} />
    </Card>
  );
};

storiesOf('CardImageMedia', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('Media with 4:3 aspect ratio', () => renderCard('4:3'))
  .addWithJSX('Media with 16:9 aspect ratio', () => renderCard('16:9'))
  .addWithJSX('Media with 3:1 aspect ratio', () => renderCard('3:1'))
  .addWithJSX('Media with 1:1 aspect ratio', () => renderCard('1:1'))
  .addWithJSX('Media with logo', () => (
    <Card style={{ width: '400px' }}>
      <CardImageMedia url="/oulu-peltola.webp" aspectRatio={'16:9'}>
        <img src="FInlayson-white.svg" />
      </CardImageMedia>
    </Card>
  ))
  .addWithJSX('Media with title', () => (
    <Card style={{ width: '400px' }}>
      <CardImageMedia url="/oulu-peltola.webp" aspectRatio={'16:9'}>
        <Text variant="h3" style={{ color: 'white', textAlign: 'center' }}>
          It's a title!
        </Text>
      </CardImageMedia>
    </Card>
  ));
