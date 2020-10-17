import React from 'react';
import { shallow } from 'enzyme';
import CallToActionBar from '../index';

describe('CallToActionBar', () => {
  it('renders correctly', () => {
    const tree = shallow(<CallToActionBar open={true} />);
    expect(tree).toMatchSnapshot();
  });
});
