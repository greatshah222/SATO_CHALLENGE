import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import PersonFilled from '../../icons/PersonFilled';

import IconButton from './index';
import theme from '../../theme';

const colors = ['default', 'inherit', 'primary', 'secondary'];
const variants = [null, 'outlined'];

storiesOf('IconButton', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(withKnobs)
  .addDecorator(withBackgrounds([{ name: 'light grey', value: '#f2f2f2', default: true }]))
  .addWithJSX('with no props', () => (
    <IconButton>
      <PersonFilled />
    </IconButton>
  ))
  .addWithJSX('outlined', () => (
    <IconButton variant={'outlined'}>
      <PersonFilled />
    </IconButton>
  ))
  .addWithJSX('toolbar', () => (
    <IconButton variant={'toolbar'}>
      <PersonFilled />
    </IconButton>
  ))
  .addWithJSX('color', () => (
    <IconButton color={'primary'}>
      <PersonFilled />
    </IconButton>
  ))
  .addWithJSX('disabled', () => (
    <IconButton disabled>
      <PersonFilled />
    </IconButton>
  ))
  .addWithJSX('small', () => (
    <IconButton size={'small'}>
      <PersonFilled />
    </IconButton>
  ))
  .addWithJSX('x-small', () => (
    <IconButton size={'xSmall'}>
      <PersonFilled />
    </IconButton>
  ))
  .addWithJSX('no background color, no hover', () => (
    <IconButton variant={'noBG'}>
      <PersonFilled />
    </IconButton>
  ))
  .addWithJSX('playground', () => (
    <IconButton
      color={select('Colors', colors, 'primary', 'General')}
      variant={select('Variants', variants, 'outlined', 'General')}
      disabled={boolean('Disabled', false, 'General')}
      onClick={action('clicked')}
    >
      <PersonFilled />
    </IconButton>
  ));
