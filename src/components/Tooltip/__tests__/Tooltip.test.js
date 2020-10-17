import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from '../Tooltip';
import Question from '../../../icons/Question';

describe('Tooltip', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <Tooltip>
        <Question />
      </Tooltip>
    );
    expect(tree).toMatchSnapshot();
  });
});
