import React from 'react';
import { shallow } from 'enzyme';
import Snackbar from '../index';

describe('Snackbar', () => {
  it('renders correctly', () => {
    const tree = shallow(<Snackbar open={true} />);
    expect(tree).toMatchSnapshot();
  });
});
