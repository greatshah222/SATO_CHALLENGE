import React from 'react';

import { withStyles, createStyles } from '@material-ui/core/styles';
import * as tokens from '../../.generated/styles';
import { Desktop, Mobile } from '../MediaQueries';

const styles = theme =>
  createStyles({
    lift: {
      width: `100vw`,
      maxHeight: '30rem',
      marginLeft: `calc(((-80vw + 100%) / 2) - 10vw);`,
      [theme.breakpoints.down('sm')]: {
        height: '20rem',
      },
      [theme.breakpoints.down('xs')]: {
        width: `calc((100% + ${tokens.spacingMedium}*2))`,
        marginLeft: `-${tokens.spacingMedium}`,
      },
      [theme.breakpoints.up('xl')]: {
        width: '100%',
        margin: 'auto',
      },
    },
  });

const CallToActionAreaLift = ({ children, classes, desktopHeight, mobileHeight }) => {
  return (
    <div
      className={classes.lift}
      {...(window.innerWidth > tokens.mobileMaxWidth
        ? desktopHeight
          ? { style: { height: desktopHeight, maxHeight: desktopHeight } }
          : {}
        : mobileHeight
        ? { style: { height: mobileHeight, maxHeight: mobileHeight } }
        : {})}
    >
      {children}
    </div>
  );
};

export default withStyles(styles)(CallToActionAreaLift);
