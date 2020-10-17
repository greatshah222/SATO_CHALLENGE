import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import Divider from './index';
import theme from '../../theme';
import Text from '../Text';
import CallToActionArea from '../CallToActionArea/CallToActionArea';

const renderDivider = () => {
  return (
    <React.Fragment>
      <Text variant="h5" style={{ marginBottom: 8 }}>
        Under me, you can see a divider
      </Text>
      <Divider />
    </React.Fragment>
  );
};

const renderDividerWithSpacing = spacing => {
  return (
    <React.Fragment>
      <Text variant="body2">There are dividers among us</Text>
      <Divider spacing={spacing} />
      <Text variant="body2">There are dividers among us</Text>
      <Divider spacing={spacing} />
      <Text variant="body2">There are dividers among us</Text>
    </React.Fragment>
  );
};

const renderstretchedDivider = () => {
  return (
    <CallToActionArea>
      <Text variant="h5" style={{ marginBottom: 8 }}>
        Between us there is streched divider
      </Text>
      <Divider stretched spacing={'small'} />
      <Text variant="h5" style={{ marginBottom: 8 }}>
        Between us there is streched divider
      </Text>
    </CallToActionArea>
  );
};

storiesOf('Divider', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('Header divider', () => renderDivider())
  .addWithJSX('Divider with small spacing', () => renderDividerWithSpacing('small'))
  .addWithJSX('Divider with medium spacing', () => renderDividerWithSpacing('medium'))
  .addWithJSX('Divider with large spacing', () => renderDividerWithSpacing('large'))
  .addWithJSX('Stretched divider', () => renderstretchedDivider());
