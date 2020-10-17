import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import PhaseButton from './index';
import theme from '../../theme';

const variants = ['phase', 'checked', 'edit'];

storiesOf('PhaseButton', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(withKnobs)
  .addWithJSX('default', () => <PhaseButton label={'Asuntotoiveeni'} phase={'2'} onClick={action('clicked')} />)
  .addWithJSX('checked', () => (
    <PhaseButton label={'Asuntotoiveeni'} phase={'2'} variant={'checked'} onClick={action('clicked')} />
  ))
  .addWithJSX('edit', () => (
    <PhaseButton label={'Asuntotoiveeni'} phase={'2'} variant={'edit'} onClick={action('clicked')} />
  ))
  .addWithJSX('disabled', () => (
    <PhaseButton label={'Asuntotoiveeni'} phase={'2'} disabled onClick={action('clicked')} />
  ))
  .addWithJSX('checked disabled', () => (
    <PhaseButton label={'Asuntotoiveeni'} phase={'2'} disabled variant={'checked'} onClick={action('clicked')} />
  ))
  .addWithJSX('pure vertical', () => (
    <PhaseButton label={'Asuntotoiveeni'} phase={'2/4'} onClick={action('clicked')} pureVertical />
  ))
  .addWithJSX('vertical', () => (
    <PhaseButton label={'Asuntotoiveeni'} phase={'2/4'} onClick={action('clicked')} vertical />
  ))
  .addWithJSX('vertical checked', () => (
    <PhaseButton label={'Asuntotoiveeni'} phase={'2/4'} variant={'checked'} onClick={action('clicked')} vertical />
  ))
  .addWithJSX('vertical edit', () => (
    <PhaseButton label={'Asuntotoiveeni'} phase={'2/4'} variant={'edit'} onClick={action('clicked')} vertical />
  ))
  .addWithJSX('vertical disabled', () => (
    <PhaseButton label={'Asuntotoiveeni'} phase={'2/4'} disabled onClick={action('clicked')} vertical />
  ))
  .addWithJSX('vertical checked disabled', () => (
    <PhaseButton
      label={'Asuntotoiveeni'}
      phase={'2/4'}
      disabled
      variant={'checked'}
      onClick={action('clicked')}
      vertical
    />
  ))
  .addWithJSX('playground', () => (
    <PhaseButton
      label={text('Label', 'Asuntotoiveeni', 'General')}
      phase={text('Phase', '3', 'General')}
      disabled={boolean('Disabled', false, 'General')}
      variant={select('Variants', variants, 'phase', 'General')}
      onClick={action('clicked')}
      vertical={boolean('Vertical', false, 'General')}
    />
  ));
