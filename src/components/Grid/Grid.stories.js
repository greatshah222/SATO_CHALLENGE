import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import MuiPaper from '@material-ui/core/Paper';

import Grid from './index';
import { MainGridContainer } from './index';
import theme from '../../theme';

const renderGridItems = () => {
  return (
    <Fragment>
      <Grid item xs={12}>
        <MuiPaper>xs=12</MuiPaper>
      </Grid>
      <Grid item xs={6}>
        <MuiPaper>xs=6</MuiPaper>
      </Grid>
      <Grid item xs={6}>
        <MuiPaper>xs=6</MuiPaper>
      </Grid>
    </Fragment>
  );
};

storiesOf('Grid', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('Basic Grid', () => (
    <Grid container spacing={2}>
      {renderGridItems()}
    </Grid>
  ))
  .addWithJSX('Grid using MainGridContainer', () => (
    <MainGridContainer container spacing={2}>
      {renderGridItems()}
    </MainGridContainer>
  ));
