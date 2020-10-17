import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withBackgrounds } from '@storybook/addon-backgrounds';

import Paper from './index';
import Text from '../Text/index';
import theme from '../../theme';

const styles = {
  paper: {
    padding: 40,
    textAlign: 'center',
  },
};

const renderPaper = elevation => {
  return (
    <Paper elevation={elevation}>
      <div style={styles.paper}>
        <Text component="p">This is a nice sheet of paper :)</Text>
      </div>
    </Paper>
  );
};

storiesOf('Paper', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(
    withBackgrounds([
      { name: 'Morning', value: theme.morning.palette.background.pageContent },
      { name: 'Evening', value: theme.evening.palette.background.pageContent },
      { name: 'Day', value: theme.day.palette.background.pageContent },
      { name: 'Night', value: theme.night.palette.background.pageContent },
    ])
  )
  .addWithJSX('Paper with elevation of 4', () => renderPaper(4))
  .addWithJSX('Paper with elevation of 3', () => renderPaper(3))
  .addWithJSX('Paper with elevation of 2', () => renderPaper(2))
  .addWithJSX('Paper with elevation of 1', () => renderPaper(1))
  .addWithJSX('Paper with elevation of 0', () => renderPaper(0));
