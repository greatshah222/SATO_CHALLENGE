import React from 'react';
import Grid from './Grid';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
  container: {
    [theme.breakpoints.up('md')]: {
      padding: '0 10%',
    },
  },
});
const MainGridContainer = ({ className, classes, ...props }) => (
  <Grid container spacing={2} className={classNames(className, classes.container)} {...props} />
);

MainGridContainer.muiName = 'Grid';

export default withStyles(styles)(MainGridContainer);
