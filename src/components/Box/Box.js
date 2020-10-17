import React from 'react';
import PropTypes from 'prop-types';
import * as tokens from '../../.generated/styles';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
  box: {
    maxWidth: tokens.desktopMaxWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    '&:last-child:not(:first-child)': {
      paddingBottom: 0,
    },
  },
  fullWidth: {
    maxWidth: 'initial',
  },
  pageSection: {
    paddingBottom: tokens.spacing3Xl,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: tokens.spacingXl,
    },
  },
  pageSectionTop: {
    paddingTop: tokens.spacing3Xl,
    [theme.breakpoints.down('sm')]: {
      paddingTop: tokens.spacingXl,
    },
  },
  pageSectionLarge: {
    paddingBottom: tokens.spacingGargantual,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: tokens.spacing4Xl,
    },
  },
  pageSectionTopLarge: {
    paddingTop: tokens.spacingGargantual,
    [theme.breakpoints.down('sm')]: {
      paddingTop: tokens.spacing4Xl,
    },
  },
  pageSectionMedium: {
    paddingBottom: tokens.spacing2Xl,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: tokens.spacingLarge,
    },
  },
  pageSectionTopMedium: {
    paddingTop: tokens.spacing2Xl,
    [theme.breakpoints.down('sm')]: {
      paddingTop: tokens.spacingLarge,
    },
  },
  pageSectionXSmall: {
    paddingBottom: tokens.spacingMedium,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: tokens.spacingSmall,
    },
  },
  pageSectionTopXSmall: {
    paddingTop: tokens.spacingMedium,
    [theme.breakpoints.down('sm')]: {
      paddingTop: tokens.spacingSmall,
    },
  },
  pageSectionSmall: {
    paddingBottom: tokens.spacingXl,
  },
  pageSectionTopSmall: {
    paddingTop: tokens.spacingXl,
  },
  negativeTopMargin: {
    '&:first-child': {
      marginTop: `-${tokens.spacing3Xl}`,
      paddingTop: 0,
    },
  },
  largeNegativeTopMargin: {
    '&:first-child': {
      marginTop: '-13.25rem',
      paddingTop: 0,
      [theme.breakpoints.down('sm')]: {
        marginTop: '-7.5rem',
      },
    },
  },
});

const Box = ({
  classes,
  className,
  variant,
  negativeTopMargin,
  largeNegativeTopMargin,
  transparent,
  fullWidth,
  topPadding,
  ...props
}) => {
  return (
    <div
      className={classNames(
        classes.box,
        {
          [classes.pageSection]: variant === 'pageSection',
          [classes.pageSectionTop]: variant === 'pageSection' && topPadding,
          [classes.pageSectionLarge]: variant === 'pageSectionLarge',
          [classes.pageSectionTopLarge]: variant === 'pageSectionLarge' && topPadding,
          [classes.pageSectionMedium]: variant === 'pageSectionMedium',
          [classes.pageSectionTopMedium]: variant === 'pageSectionMedium' && topPadding,
          [classes.pageSectionSmall]: variant === 'pageSectionSmall',
          [classes.pageSectionTopSmall]: variant === 'pageSectionSmall' && topPadding,
          [classes.pageSectionXSmall]: variant === 'pageSectionXSmall',
          [classes.pageSectionTopXSmall]: variant === 'pageSectionXSmall' && topPadding,
          [classes.negativeTopMargin]: negativeTopMargin,
          [classes.largeNegativeTopMargin]: largeNegativeTopMargin,
          [classes.fullWidth]: fullWidth,
        },
        className
      )}
      {...props}
    />
  );
};

Box.propTypes = {
  variant: PropTypes.oneOf([
    'pageSection',
    'pageSectionLarge',
    'pageSectionMedium',
    'pageSectionSmall',
    'pageSectionXSmall',
  ]),
  children: PropTypes.node,
  classes: PropTypes.object,
  negativeTopMargin: PropTypes.bool,
  largeNegativeTopMargin: PropTypes.bool,
};

export default withStyles(styles)(Box);
