import React from 'react';
import DesktopBar from './DesktopBar';
import MobileBar from './MobileBar';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const styles = theme => ({
  desktop: {
    display: 'inherit',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    display: 'inherit',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

const AppBar = ({ classes, ...props }) => (
  <MuiThemeProvider theme={theme.morning}>
    <div className={classes.desktop}>
      <DesktopBar {...props} />
    </div>
    <div className={classes.mobile}>
      <MobileBar {...props} />
    </div>
  </MuiThemeProvider>
);

export default withStyles(styles)(AppBar);
