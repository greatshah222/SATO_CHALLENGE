import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import theme from '../../theme';

import SliderExample from './SliderExample';

export const bg = withBackgrounds([{ name: 'light grey', value: '#f2f2f2', default: true }]);

storiesOf('Slider', module)
  .addDecorator(bg)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ padding: '40px' }}>{story()}</div>)
  .addWithJSX('default', () => {
    return <SliderExample />;
  });
