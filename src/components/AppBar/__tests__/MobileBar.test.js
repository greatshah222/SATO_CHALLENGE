import React from 'react';
import { mount } from 'enzyme';
import MobileBar from '../MobileBar';
import { accountItems, buttons, links, localeLink } from '../stories/menuItems';

describe('MobileBar', () => {
  it('renders correctly if not logged in', () => {
    const tree = mount(
      <MobileBar
        accountItems={accountItems}
        buttons={buttons}
        loggedIn={false}
        links={links}
        localeLink={localeLink}
        defaultBackLabel={'Takaisin'}
        accountBtnLabel={'Kirjaudu'}
        accountBtnHandler={jest.fn('Login clicked')}
        searchSuggestions={[]}
        handleSearch={jest.fn('Search term:')}
        searchPlaceholder={'Etsi tietoa SATOlta...'}
        searchTerm={''}
      />
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly when logged in', () => {
    const tree = mount(
      <MobileBar
        accountItems={accountItems}
        buttons={buttons}
        loggedIn={true}
        links={links}
        localeLink={localeLink}
        defaultBackLabel={'Takaisin'}
        accountBtnLabel={'Kirjaudu'}
        accountBtnHandler={jest.fn('Login clicked')}
        searchSuggestions={[]}
        handleSearch={jest.fn('Search term:')}
        searchPlaceholder={'Etsi tietoa SATOlta...'}
        searchTerm={''}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
