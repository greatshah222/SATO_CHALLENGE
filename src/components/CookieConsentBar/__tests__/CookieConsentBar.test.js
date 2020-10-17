import React from 'react';
import { shallow } from 'enzyme';
import CookieConsentBar from '../CookieConsentBar';

describe('CookieConsentBar', () => {
  it('renders correctly', () => {
    const tree = shallow(<CookieConsentBar />);
    expect(tree).toMatchSnapshot();
  });
});
