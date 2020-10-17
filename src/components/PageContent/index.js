import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as tokens from '../../.generated/styles';
import classNames from 'classnames';

const styles = (theme) => ({
  container: {
    flex: '1 0 auto',
    position: 'relative',
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: theme.palette.background.pageContent,
    [theme.breakpoints.down('md')]: {
      paddingLeft: tokens.spacingXl,
      paddingRight: tokens.spacingXl,
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '10%',
      paddingRight: '10%',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: tokens.spacingMedium,
      paddingRight: tokens.spacingMedium,
    },
  },
  fullWidth: {
    paddingLeft: '0!important',
    paddingRight: '0!important',
  },
  fullWidthMobile: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0!important',
      paddingRight: '0!important',
    },
  },
  noBackground: {
    backgroundColor: tokens.backgorundDemo,
  },

  transparent: {
    background: 'transparent',
  },
  containerPadding: {
    paddingTop: tokens.spacingXl,
    paddingBottom: tokens.spacingGargantual,
  },
  largeTopPadding: {
    paddingTop: tokens.spacing3Xl,
  },
});

const PageContent = ({
  className,
  contentFullWidth,
  contentFullWidthMobile,
  noBackground,
  transparent,
  classes,
  children,
  containerPadding,
  largeTopPadding,
  ...rest
}) => (
  <section
    className={classNames(
      classes.container,
      {
        [classes.fullWidth]: contentFullWidth,
        [classes.noBackground]: noBackground,
        [classes.fullWidthMobile]: contentFullWidthMobile,
        [classes.transparent]: transparent,
        [classes.containerPadding]: containerPadding,
        [classes.largeTopPadding]: largeTopPadding,
      },
      className
    )}
    {...rest}
  >
    {children}
  </section>
);

PageContent.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  contentFullWidth: PropTypes.bool,
  noBackground: PropTypes.bool,
  className: PropTypes.string,
  contentFullWidthMobile: PropTypes.bool,
  containerPadding: PropTypes.bool,
  largeTopPadding: PropTypes.bool,
};

PageContent.defaultProps = {
  contentFullWidth: false,
  noBackground: false,
};

export default withStyles(styles)(PageContent);
