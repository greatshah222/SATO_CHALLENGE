import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import Tabs, { Tab } from './index';
import theme from '../../theme';

const tabsContent = [
  { key: 0, label: 'Helsinki' },
  { key: 1, label: 'Turku' },
  { key: 2, label: 'Tampere' },
  { key: 3, label: '1h' },
  { key: 4, label: '2h' },
  { key: 5, label: '3h' },
];

const tabsContentWithMessages = [
  { key: 0, label: 'Helsinki', numOfNewMessages: 2 },
  { key: 1, label: 'Turku' },
  { key: 2, label: 'Tampere', numOfNewMessages: 1 },
];

const ExampleTabs = ({ largePadding, newMessages }) => {
  const [index, setIndex] = React.useState(0);

  const onHandleChange = (e, index) => {
    setIndex(index);
  };

  if (newMessages) {
    return (
      <Tabs
        defaultValue={index}
        tabs={tabsContentWithMessages}
        handleChange={onHandleChange}
        largePadding={largePadding}
      />
    );
  } else {
    return <Tabs defaultValue={index} tabs={tabsContent} handleChange={onHandleChange} largePadding={largePadding} />;
  }
};

ExampleTabs.propTypes = {
  largePadding: PropTypes.bool,
};

const TabWithChildren = ({ defaultValue, children, largePadding }) => {
  const [index, setIndex] = React.useState(defaultValue);

  const handleChange = (e, idx) => {
    setIndex(idx);
  };

  return (
    <Tabs defaultValue={index} handleChange={handleChange} largePadding={largePadding}>
      {children}
    </Tabs>
  );
};

TabWithChildren.propTypes = {
  largePadding: PropTypes.bool,
  defaultValue: PropTypes.number,
  children: PropTypes.node,
};

storiesOf('Tabs', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('default', () => <ExampleTabs />)
  .addWithJSX('large padding', () => <ExampleTabs largePadding />)
  .addWithJSX('With new message icon', () => <ExampleTabs newMessages />)
  .addWithJSX('With tabs as children', () => (
    <TabWithChildren defaultValue={0}>
      <Tab label={'Tab1'} largePadding={true} />
      <Tab label={'Tab2'} largePadding={true} />
      <Tab label={'Tab3'} largePadding={true} />
    </TabWithChildren>
  ));
