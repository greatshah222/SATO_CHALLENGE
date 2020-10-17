import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MuiDivider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import * as tokens from '../../.generated/styles';

const styles = theme => ({
  small: {
    margin: `${tokens.spacingSmall} 0`,
  },
  medium: {
    margin: `${tokens.spacingMedium} 0`,
  },
  large: {
    margin: `${tokens.spacingLarge} 0`,
  },
  stretched: {
    marginLeft: `-${tokens.spacingXl}`,
    marginRight: `-${tokens.spacingXl}`,
    [theme.breakpoints.down('sm')]: {
      marginLeft: `-${tokens.spacingMedium}`,
      marginRight: `-${tokens.spacingMedium}`,
    },
  },
});

const Divider = ({ classes, className: classNameProp, spacing, stretched, ...rest }) => {
  const newClasses = classNames(classes[spacing], { [classes.stretched]: stretched }, classNameProp);
  return <MuiDivider className={newClasses} {...rest} />;
};

Divider.muiName = 'Divider';
Divider.propTypes = {
  ...MuiDivider.propTypes,
  spacing: PropTypes.oneOf(['small', 'medium', 'large']),
  stretched: PropTypes.bool,
};

export default withStyles(styles)(Divider);
