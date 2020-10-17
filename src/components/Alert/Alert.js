import React from 'react';
import Paper from '../Paper';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { borderRadiusLow, spacingMedium } from '../../.generated/styles';
import Grid from '../Grid';

const styles = theme => ({
  info: {
    borderRadius: borderRadiusLow,
    backgroundColor: theme.palette.background.pageContent,
    padding: spacingMedium,
    border: `solid 1px ${theme.palette.primary.main}`,
    display: 'flex',
    '& p': {
      marginTop: 0,
    },
    '& p:last-of-type': {
      marginBottom: 0,
    },
  },
  icon: {
    paddingRight: spacingMedium,
  },
  error: {
    backgroundColor: theme.palette.error.light,
    borderColor: theme.palette.error.main,
  },
});

const Alert = ({ icon, children, classes, isError, className, ...props }) => (
  <Paper elevation={0} className={classNames(classes.info, { [classes.error]: isError }, className)} {...props}>
    {icon && <div className={classes.icon}>{icon}</div>}
    <div>{children}</div>
  </Paper>
);

export default withStyles(styles)(Alert);
