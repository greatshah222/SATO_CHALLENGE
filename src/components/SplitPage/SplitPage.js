import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '../Grid';
import * as tokens from '../../.generated/styles';
import LazyImage from '../LazyImage';

const styles = theme => ({
  container: {
    flexFlow: 'row wrap-reverse',
    [theme.breakpoints.up('md')]: {
      flexFlow: 'row nowrap',
      minHeight: '99vh',
    },
    '@media all and (-ms-high-contrast:none),(-ms-high-contrast:active)': {
      overflow: 'hidden',
    },
  },
  bg: {
    backgroundColor: theme.palette.background.pageContent,
    display: 'flex',
    alignItems: 'center',
    '@media all and (-ms-high-contrast:none),(-ms-high-contrast:active)': {
      zIndex: 1,
    },
  },
  contentContainer: {
    padding: `${tokens.spacing3Xl} 0 ${tokens.spacing3Xl} 10vw`,
    [theme.breakpoints.down('sm')]: {
      padding: `${tokens.spacingMedium} ${tokens.spacingMedium} ${tokens.spacingGargantual} ${tokens.spacingMedium}`,
    },
  },
  image: {
    position: 'relative',
    height: '211px',
    [theme.breakpoints.up('md')]: {
      height: 'auto',
    },
    '& img': {
      objectFit: 'cover',
      objectPosition: 'center',
      width: '100%',
      height: '211px',
      '@media all and (-ms-high-contrast:none),(-ms-high-contrast:active)': {
        height: '100%',
        width: 'auto',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        height: '100%',
      },
    },
  },
});

const SplitPage = ({ classes, imageSrc, children }) => (
  <Grid container className={classes.container}>
    <Grid item xs={12} md={6} className={classNames(classes.bg)}>
      <Grid container className={classes.contentContainer}>
        <Grid item xs={12} md={11}>
          {children}
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} md={6} className={classes.image}>
      <LazyImage src={imageSrc} alt="Header" />
    </Grid>
  </Grid>
);

SplitPage.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  imageSrc: PropTypes.string,
};

export default withStyles(styles)(SplitPage);
