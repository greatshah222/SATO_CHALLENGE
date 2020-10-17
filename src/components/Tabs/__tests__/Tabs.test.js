import React from 'react';
import { shallow } from 'enzyme';
import Tabs from '../Tabs';

describe('Tabs', () => {
  it('renders correctly', () => {
    const tree = shallow(<Tabs />);
    expect(tree).toMatchSnapshot();
  });
});
