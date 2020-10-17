import React from 'react';
import { shallow } from 'enzyme';
import Slider from '../index';

describe('Slider', () => {
  it('renders correctly', () => {
    const tree = shallow(<Slider />);
    expect(tree).toMatchSnapshot();
  });
});
