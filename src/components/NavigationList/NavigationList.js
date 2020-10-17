import PropTypes from 'prop-types';
import React from 'react';
import { MenuList, withStyles } from '@material-ui/core';
import { withRef } from '../../hocs/withRef';
import Paper from '../Paper';
import * as tokens from '../../.generated/styles';
import classNames from 'classnames';

const styles = theme => ({
  paper: {
    borderRadius: tokens.borderRadiusMedium,
  },
  inDropdown: {
    borderRadius: `0 0 ${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium}`,
  },
  menuList: {
    padding: `${tokens.spacingLarge} 0`,
  },
  smallTopPadding: {
    paddingTop: tokens.spacingSmall,
  },
});

const NavigationList = ({ inDropdown, className, classes, children, elevation }) => (
  <Paper elevation={elevation} className={classNames(inDropdown ? classes.inDropdown : classes.paper, className)}>
    <MenuList className={classNames(classes.menuList, { [classes.smallTopPadding]: inDropdown })}>{children}</MenuList>
  </Paper>
);

NavigationList.defaultProps = {
  elevation: 0,
};

NavigationList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inDropdown: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  elevation: PropTypes.number,
};

export default withStyles(styles)(withRef(NavigationList));
