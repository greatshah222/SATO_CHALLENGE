import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import * as tokens from '../../.generated/styles';

import Text from '../Text';

const styles = () => ({
  item: {
    display: 'flex',
    alignContent: 'center',
    cursor: 'pointer',
  },
  navText: {
    whiteSpace: 'nowrap',
  },
  centerSelf: {
    alignSelf: 'center',
  },
  marginRightSmall: {
    marginRight: tokens.spacingSmall,
  },
  marginLeftSmall: {
    marginLeft: tokens.spacingSmall,
  },
});

const SubViewTopNavItem = ({ icon, text, alignment, classes, color, ...rest }) => {
  const iconEl = icon
    ? React.cloneElement(icon, {
        className: classNames(
          alignment === 'left' ? classes.marginRightSmall : classes.marginLeftSmall,
          classes.centerSelf
        ),
        color: color,
      })
    : null;
  return alignment === 'left' ? (
    <div className={classes.item} {...rest}>
      {iconEl}
      <Text variant="label" className={classes.navText} color={color}>
        {text}
      </Text>
    </div>
  ) : (
    <div className={classes.item} {...rest}>
      <Text variant="label" className={classes.navText} color={color}>
        {text}
      </Text>
      {iconEl}
    </div>
  );
};

SubViewTopNavItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  alignment: PropTypes.oneOf(['left', 'right']),
  classes: PropTypes.object,
  color: PropTypes.string,
};

export default withStyles(styles)(SubViewTopNavItem);
