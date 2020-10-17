import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ChevronUp from '../../icons/ChevronUp';
import ChevronDown from '../../icons/ChevronDown';
import Menu from './index.js';
import theme from '../../theme';
import MenuButton from './MenuButton';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import NavigationListItem from '../NavigationList/NavigationListItem';
import Text from '../Text';

export const bg = withBackgrounds([{ name: 'light grey', value: '#f2f2f2', default: true }]);

const items = [
  {
    label: 'Profile',
    handler: action('clicked profile'),
    type: 'title',
  },
  {
    label: 'Logout',
    handler: action('clicked logout'),
  },
];

storiesOf('Menu', module)
  .addDecorator(bg)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ padding: '40px' }}>{story()}</div>)
  .addWithJSX('default', () => (
    <Menu
      button={(setAnchorEl, open, handleClick) => (
        <MenuButton setAnchorEl={setAnchorEl} handleClick={handleClick} open={open}>
          {items[0].label}&nbsp;
          {open ? <ChevronUp /> : <ChevronDown />}
        </MenuButton>
      )}
      items={handleClick =>
        items.map(item => (
          <NavigationListItem
            onClick={handleClick(item.handler)}
            type={item.type}
            key={item.label}
            active={item.active}
          >
            <Text variant={item.variant} color={'inherit'}>
              {item.label}
            </Text>
          </NavigationListItem>
        ))
      }
    />
  ));
