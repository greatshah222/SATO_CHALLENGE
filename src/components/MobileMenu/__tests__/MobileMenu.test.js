import React from 'react';
import { shallow } from 'enzyme';
import MobileMenu from '../MobileMenu';
import { buttons, links, localeLink } from '../../AppBar/stories/menuItems';

describe('MobileMenu', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <MobileMenu
        content={{ items: [...buttons, ...links, localeLink], id: 'root' }}
        open={true}
        toggleMenu={jest.fn()}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
