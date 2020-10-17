import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs } from '@storybook/addon-knobs';
import NavigationList from './NavigationList.js';
import theme from '../../theme';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { buttons } from '../AppBar/stories/menuItems';
import NavigationListItem from './NavigationListItem';
import Text from '../Text';
import { action } from '@storybook/addon-actions';
import ChevronRight from '../../icons/ChevronRight';

import Home from '../../icons/Home';
import Message from '../../icons/Message';
import Logout from '../../icons/Logout';

const items = buttons[1].items.map(item => (
  <NavigationListItem onClick={action(item.label)} type={item.type} key={item.label} active={item.active}>
    <Text variant={'buttonMenuItem'} color={'inherit'}>
      {item.label}
    </Text>
  </NavigationListItem>
));

const itemsWithNoIconProp = buttons[1].items.map(item => (
  <NavigationListItem onClick={action(item.label)} type={item.type} key={item.label} active={item.active} noIcon>
    <Text variant={'buttonMenuItem'} color={'inherit'}>
      {item.label}
    </Text>
  </NavigationListItem>
));

const itemsWithSubNav = (
  <div>
    <NavigationListItem onClick={action('Label 1')} active={true} noIcon>
      <Text variant="button" color={'inherit'}>
        {'Usein kysyttyä'}
      </Text>
    </NavigationListItem>
    <NavigationListItem onClick={action('Label 2')} active={false} noIcon>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Text variant="buttonMenuItem" color={'inherit'}>
          {'Label 2'}
        </Text>
        <ChevronRight />
      </div>
    </NavigationListItem>
    <NavigationListItem onClick={action('Label 3')} active={false} noIcon>
      <Text variant="buttonMenuItem" color={'inherit'}>
        {'Label 3, Label 3, Label 3, Label 3, Label 3, Label 3, Label 3, Label 3'}
      </Text>
    </NavigationListItem>
  </div>
);

export const bg = withBackgrounds([{ name: 'light grey', value: '#f2f2f2', default: true }]);

storiesOf('NavigationList', module)
  .addDecorator(bg)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(withKnobs)
  .addWithJSX('standalone', () => <NavigationList children={items} />)
  .addWithJSX('with no icon prop', () => <NavigationList children={itemsWithNoIconProp} />)
  .addWithJSX('in dropdown', () => <NavigationList children={items} inDropdown />)
  .addWithJSX('with sub items', () => <NavigationList>{itemsWithSubNav}</NavigationList>)
  .addWithJSX('with icons', () => (
    <NavigationList>
      {
        <div>
          <NavigationListItem active={true}>
            <Home color="primary" style={{ marginRight: '36px' }} />
            <Text variant="button" color={'inherit'}>
              Home
            </Text>
          </NavigationListItem>
          <NavigationListItem>
            <Message color="primary" style={{ marginRight: '36px' }} />
            <Text variant="button" color={'inherit'}>
              Message
            </Text>
          </NavigationListItem>
          <NavigationListItem>
            <Logout color="primary" style={{ marginRight: '36px' }} />
            <Text variant="button" color={'inherit'}>
              Logout
            </Text>
          </NavigationListItem>
        </div>
      }
    </NavigationList>
  ));
