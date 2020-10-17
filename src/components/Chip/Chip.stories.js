import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import Pet from '../../icons/Pet';
import More from '../../icons/More';
import { withBackgrounds } from '@storybook/addon-backgrounds';

import Chip from './index';
import theme from '../../theme';

var handleDelete = function() {
  alert('clicked');
};

storiesOf('Chip', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(
    withBackgrounds([
      { name: 'Morning', value: theme.morning.palette.background.pageContent },
      { name: 'Evening', value: theme.evening.palette.background.pageContent },
      { name: 'Day', value: theme.day.palette.background.pageContent },
      { name: 'Night', value: theme.night.palette.background.pageContent },
    ])
  )
  .addWithJSX('choice', () => <Chip label={'Action text'} variant="choice" />)
  .addWithJSX('chosen', () => (
    <div style={{ display: 'flex' }}>
      <Chip label={'Choice 1'} variant="choice" />
      <Chip label={'Chosen'} variant="chosen" />
      <Chip label={'Choice 3'} variant="choice" />
    </div>
  ))
  .addWithJSX('choice with icon', () => <Chip label={'Action text'} variant="choice" icon={<Pet />} />)
  .addWithJSX('choice plain', () => <Chip label={'Action text'} plain variant="choice" icon={<Pet />} />)
  .addWithJSX('choice with custom delete icon', () => (
    <Chip label={'Action text'} variant="choice" onDelete={() => {}} deleteIcon={<Pet />} />
  ))
  .addWithJSX('white', () => <Chip label={'Action text'} variant="white" />)
  .addWithJSX('white with primary color', () => <Chip label={'Action text'} variant="white" color="primary" />)
  .addWithJSX('notSelected', () => <Chip label={'Choose me'} variant="notSelected" />)
  .addWithJSX('notSelected with icon', () => <Chip label={'Choose me'} variant="notSelected" icon={<Pet />} />)
  .addWithJSX('notSelected with custom delete icon', () => (
    <Chip label={'Choose me'} variant="notSelected" onDelete={handleDelete} deleteIcon={<Pet />} />
  ))
  .addWithJSX('selected', () => <Chip label={'Selected'} variant="selected" />)
  .addWithJSX('selected with icon', () => <Chip label={'Selected'} variant="selected" icon={<Pet />} />)
  .addWithJSX('selected with custom delete icon', () => (
    <Chip label={'Selected'} variant="selected" onDelete={handleDelete} deleteIcon={<Pet />} />
  ))
  .addWithJSX('big input', () => (
    <Chip label={'Quite a long text for a chip'} variant="inputBig" onDelete={handleDelete} />
  ))

  .addWithJSX('big input with icon', () => (
    <Chip label={'Quite a long text for a chip'} variant="inputBig" onDelete={handleDelete} icon={<Pet />} />
  ))
  .addWithJSX('small input', () => <Chip label={'Text'} variant="inputSmall" onDelete={handleDelete} />)
  .addWithJSX('input with custom delete icon', () => (
    <Chip label={'Text'} variant="inputSmall" onDelete={handleDelete} deleteIcon={<Pet />} />
  ))
  .addWithJSX('input with icon', () => (
    <Chip label={'Text'} variant="inputSmall" onDelete={handleDelete} icon={<Pet />} />
  ))
  .addWithJSX('display', () => <Chip label={'Display information'} variant="display" />)
  .addWithJSX('display with icon', () => <Chip label={'Display information'} variant="display" icon={<Pet />} />)
  .addWithJSX('rouned icon chip', () => <Chip label={<More />} roundIconChip />)
  .addWithJSX('home feature variant', () => (
    <div style={{ backgroundColor: 'white', padding: '50px' }}>
      <Chip label={'Pets allowed'} variant="homeFeature" icon={<Pet />} />
    </div>
  ))
  .addWithJSX('chip with no variant', () => (
    <Chip label={'Custom styles without variant'} style={{ color: 'blue' }} icon={<Pet style={{ color: 'red' }} />} />
  ));
