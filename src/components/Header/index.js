import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Text from '../Text';
import Grid from '../Grid';
import CardImageMedia from '../CardImageMedia';
import LazyImage from '../LazyImage';

import { Desktop, Mobile } from '../MediaQueries';
import * as tokens from '../../.generated/styles';

const styles = theme => ({
  desktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  container: {
    flexFlow: 'row wrap-reverse',
    [theme.breakpoints.up('md')]: {
      flexFlow: 'row nowrap',
      minHeight: '40vh',
      maxHeight: '60vh',
    },
  },
  largeContainer: {
    [theme.breakpoints.up('md')]: {
      height: '60vh',
    },
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  preTitleSmall: {
    paddingBottom: tokens.spacingSmall,
  },
  preTitleLarge: {
    paddingBottom: tokens.spacingMedium,
    [`@media (max-width: ${tokens.mobileExtraSmallMaxWidth}px)`]: {
      fontSize: tokens.fontSize5,
    },
  },
  largeTitle: {
    [`@media (max-width: ${tokens.mobileExtraSmallMaxWidth}px)`]: {
      fontSize: tokens.fontSize10,
    },
  },
  bg: {
    background: theme.gradient.background,
    display: 'flex',
    alignItems: 'center',
  },
  textContainer: {
    padding: `${tokens.spacing3Xl} 0 6rem 10vw`,
    [theme.breakpoints.down('md')]: {
      paddingLeft: tokens.spacingXl,
    },
    [theme.breakpoints.down('sm')]: {
      padding: `${tokens.spacingXl} ${tokens.spacingMedium} ${tokens.spacingGargantual} 10vw`,
      textAlign: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: tokens.spacingMedium,
    },
  },
  image: {
    position: 'relative',
    background: theme.gradient.backgroundMirror,
    [theme.breakpoints.up('md')]: {
      height: 'auto',
      overflow: 'hidden',
    },
    '& img': {
      objectFit: 'cover',
      objectPosition: 'center',
      width: '100%',
      '@media all and (-ms-high-contrast:none),(-ms-high-contrast:active)': {
        height: '100%',
        width: 'auto',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
      },
      [theme.breakpoints.up('md')]: {
        height: '100%',
      },
    },
  },
  largeTextContainer: {
    padding: `0rem 0 2rem 10vw`,
    margin: `auto 0 auto 0`,

    [theme.breakpoints.down('sm')]: {
      padding: `${tokens.spacing3Xl} ${tokens.spacingMedium} 6rem 10vw`,
      textAlign: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: tokens.spacingMedium,
    },
  },
});

const Image = (imageSrc, classes, noImageOnMobile) => {
  return (
    <React.Fragment>
      <Grid item xs={12} md={6} className={classNames(classes.image, classes.desktop)}>
        <img src={imageSrc} alt="Header" />
      </Grid>
      {noImageOnMobile ? null : (
        <Grid item xs={12} md={6} className={classes.mobile}>
          <CardImageMedia url={imageSrc} />
        </Grid>
      )}
    </React.Fragment>
  );
};

const Header = ({ classes, title, subtitle, preTitle, imageSrc, isLarge, noImageOnMobile }) => (
  <Grid
    container
    justify="space-around"
    className={classNames(classes.container, { [classes.largeContainer]: isLarge })}
  >
    <Grid item xs={12} md={6} className={classNames(classes.bg)}>
      <Grid container className={isLarge ? classes.largeTextContainer : classes.textContainer}>
        <Grid item xs={12} md={11}>
          {preTitle ? (
            <Text
              variant={isLarge ? 'softyXL' : 'softyL'}
              className={classNames(classes.title, isLarge ? classes.preTitleLarge : classes.preTitleSmall)}
            >
              {preTitle}
            </Text>
          ) : null}
          <Text
            variant={isLarge ? 'h1' : 'h3'}
            className={classNames(classes.title, { [classes.largeTitle]: isLarge })}
          >
            {title}
          </Text>
          <Text variant={isLarge ? 'softyXL' : 'softyL'} className={classes.title} component="div">
            {subtitle}
          </Text>
        </Grid>
      </Grid>
    </Grid>
    {Image(imageSrc, classes, noImageOnMobile)}
  </Grid>
);

Header.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  preTitle: PropTypes.string,
  imageSrc: PropTypes.string,
  isLarge: PropTypes.bool,
  noImageOnMobile: PropTypes.bool,
};

Header.defaultProps = {
  isLarge: false,
  noImageOnMobile: false,
};

export default withStyles(styles)(Header);
