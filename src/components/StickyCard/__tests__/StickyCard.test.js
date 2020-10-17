import React from 'react';
import { shallow } from 'enzyme';
import StickyCard from '../StickyCard';

describe('StickyCard', () => {
  it('renders correctly', () => {
    const tree = shallow(<StickyCard />);
    expect(tree).toMatchSnapshot();
  });
});
