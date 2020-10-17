import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { bg } from './AppBar.stories';

import TopRowLink from '../TopRowLink.js';
import theme from '../../../theme';

storiesOf('TopRowLink', module)
  .addDecorator(bg)
  .addDecorator(story => (
    <div style={{ height: '64px', backgroundColor: 'white', display: 'flex', alignItems: 'stretch' }}>{story()}</div>
  ))
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(withKnobs)
  .addWithJSX('playground', () => (
    <TopRowLink
      handler={action('Link clicked')}
      active={boolean('Active', true, 'General')}
      children={text('Label', 'Etusivu', 'General')}
    />
  ));
