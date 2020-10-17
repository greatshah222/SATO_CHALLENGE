import PropTypes from 'prop-types';
import React from 'react';
import MenuItem from '../MenuItem';
import { withStyles } from '@material-ui/core';
import * as tokens from '../../.generated/styles';
import classNames from 'classnames';

const indicatorHeight = 4;

const styles = theme => ({
  listItem: {
    minHeight: tokens.spacing2Xl,
    height: 'auto',
    paddingTop: tokens.spacingSmall,
    paddingBottom: tokens.spacingSmall,
    paddingLeft: 0,
    paddingRight: tokens.spacingMedium,
    [`@media (max-width: ${tokens.mobileMaxWidth}px)`]: {
      paddingRight: tokens.spacingMedium,
    },
  },
  noIcon: {
    minHeight: tokens.spacingLarge,
  },
  active: {
    color: theme.palette.primary.main,
  },
  indentation: {
    height: '100%',
    width: '100%',
    marginLeft: tokens.spacing3Xl,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [`@media (max-width: ${tokens.mobileMaxWidth}px)`]: {
      marginLeft: `${tokens.spacing4Xl}`,
    },
  },
  activeIndentation: {
    borderRight: `${indicatorHeight}px solid ${theme.palette.primary.main}`,
    borderRadius: `0 ${indicatorHeight}px ${indicatorHeight}px 0`,
    position: 'absolute',
    height: '100%',
    [`@media (max-width: ${tokens.mobileMaxWidth}px)`]: {
      marginRight: `calc(${tokens.spacing4Xl} - ${indicatorHeight}px)`,
    },
  },
  leftAligned: {
    marginRight: tokens.spacingMedium,
  },
  smallOnMobile: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: tokens.spacingMedium,
      marginBottom: tokens.spacingMedium,
      minHeight: 0,
    },
  },
  noLeftMargin: {
    marginLeft: 0,
  },
});

const NavigationListItem = ({
  className,
  classes,
  active,
  leftAligned,
  noIcon,
  noLeftMargin,
  children,
  type,
  ...props
}) => (
  <MenuItem
    className={classNames(
      classes.listItem,
      {
        [classes.active]: active,
        [classes.noIcon]: noIcon,
        [classes.smallOnMobile]: type === 'smallOnMobile',
      },
      className
    )}
    {...props}
  >
    <div
      className={classNames({
        [classes.activeIndentation]: active,
        [classes.leftAligned]: leftAligned,
      })}
    />
    <div className={classNames(classes.indentation, { [classes.noLeftMargin]: noLeftMargin })}>{children}</div>
  </MenuItem>
);

NavigationListItem.propTypes = {
  ...MenuItem.propTypes,
  active: PropTypes.bool,
  leftAligned: PropTypes.bool,
  noIcon: PropTypes.bool,
  noLeftMargin: PropTypes.bool,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationListItem);
