import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import ActionText from './index';
import theme from '../../theme';

import Icon from '../../icons/ChevronRight';
import Card from '../Card';
import CardImageMedia from '../CardImageMedia';
import CardContent from '../CardContent';
import Text from '../Text/Text';
import Animation from './Animation';

const renderCardWithImage = () => {
  return (
    <Animation animationStyle={'rise'}>
      <Card style={{ background: '#efefef', width: '400px' }}>
        <CardImageMedia url={'/oulu-peltola.webp'} />
        <CardContent smallContent>
          <Text variant="body2">Text in card content</Text>
        </CardContent>
      </Card>
    </Animation>
  );
};

storiesOf('Animation', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('rise', () => renderCardWithImage());
