import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import PageContent from '../PageContent';
import Grid from '../Grid';
import * as tokens from '../../.generated/styles';

const styles = () => ({
  container: {
    maxHeight: tokens.spacingLarge,
  },
  navigation: {
    background: tokens.colorWhite,
    paddingTop: tokens.spacingMedium,
    paddingBottom: tokens.spacingMedium,
    display: 'flex',
  },
  alignEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const SubViewTopNav = ({ classes, leftItem, centerItem, rightItem }) => (
  <PageContent className={classes.navigation}>
    <Grid container className={classes.container}>
      <Grid item xs={4}>
        {leftItem}
      </Grid>
      <Grid container item justify="center" alignItems="center" xs={4}>
        {centerItem}
      </Grid>
      <Grid item xs={4}>
        <div className={classes.alignEnd}>{rightItem}</div>
      </Grid>
    </Grid>
  </PageContent>
);

SubViewTopNav.propTypes = {
  classes: PropTypes.object,
  leftItem: PropTypes.element,
  centerItem: PropTypes.element,
  rightItem: PropTypes.element,
};

export default withStyles(styles)(SubViewTopNav);
