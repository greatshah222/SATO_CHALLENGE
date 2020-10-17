import React from 'react';
import { shallow } from 'enzyme';
import VideoPlayer from '../VideoPlayer';

describe('VideoPlayer', () => {
  it('renders correctly', () => {
    const tree = shallow(<VideoPlayer />);
    expect(tree).toMatchSnapshot();
  });
});
