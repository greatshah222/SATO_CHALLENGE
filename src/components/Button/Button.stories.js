import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import Button from './index';
import Add from '../../icons/Add';
import theme from '../../theme';

const colors = ['default', 'inherit', 'primary', 'secondary'];
const variants = ['text', 'outlined', 'contained'];
const sizes = ['small', 'medium', 'large'];

storiesOf('Button', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(
    withBackgrounds([
      {
        name: 'light yellow',
        value: theme.morning.palette.background.pageContent,
        default: true,
      },
    ])
  )
  .addDecorator(withKnobs)
  .addWithJSX('text', () => (
    <Button variant='text' color='primary'>
      Button
    </Button>
  ))
  .addWithJSX('contained', () => (
    <Button color='primary' variant={'contained'}>
      Button
    </Button>
  ))
  .addWithJSX('outlined', () => (
    <Button color='primary' variant={'outlined'}>
      Button
    </Button>
  ))
  .addWithJSX('no variant', () => <Button color='primary'>Button</Button>)
  .addWithJSX('small', () => (
    <Button color='primary' variant={'outlined'} size={'small'}>
      Button
    </Button>
  ))
  .addWithJSX('large', () => (
    <Button color='primary' variant={'outlined'} size={'large'}>
      Button
    </Button>
  ))
  .addWithJSX('disabled', () => (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <Button color='primary' disabled>
          Button
        </Button>
      </div>
      <div style={{ marginBottom: '32px' }}>
        <Button color='primary' variant='outlined' disabled>
          Button
        </Button>
      </div>
      <div style={{ marginBottom: '32px' }}>
        <Button color='primary' variant='contained' disabled>
          Button
        </Button>
      </div>
    </div>
  ))
  .addWithJSX('text in two rows', () => (
    <div style={{ width: '120px' }}>
      <Button color='primary' variant={'outlined'}>
        Button overflow
      </Button>
    </div>
  ))
  .addWithJSX('angular full width', () => (
    <Button color={'primary'} variant={'contained'} angular fullWidth>
      Button
    </Button>
  ))
  .addWithJSX('with icon', () => (
    <Button color={'primary'} variant={'contained'}>
      <Add style={{ paddingRight: '0.5rem' }} />
      <span style={{ paddingTop: '2px' }}>Button</span>
    </Button>
  ))
  .addWithJSX('playground', () => (
    <Button
      color={select('Colors', colors, 'primary', 'General')}
      variant={select('Variants', variants, 'contained', 'General')}
      size={select('Size', sizes, 'medium', 'General')}
      disabled={boolean('Disabled', false, 'General')}
      onClick={action('clicked')}
      children={text('Label', 'Button', 'General')}
    />
  ));
