import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MuiFormHelperText from '@material-ui/core/FormHelperText';

import * as designTokens from '../../.generated/styles';

const styles = theme => ({
  helperText: {
    marginLeft: designTokens.spacingMedium,
  },
  error: {
    color: theme.palette.error.main,
  },
});

const FormHelperText = ({ classes, helperTextClass, error, children, ...rest }) =>
  children ? (
    <MuiFormHelperText
      className={classNames(classes.helperText, helperTextClass, { [classes.error]: error })}
      error={error}
      {...rest}
    >
      {children}
    </MuiFormHelperText>
  ) : null;

FormHelperText.propTypes = {
  classes: PropTypes.object,
  error: PropTypes.bool,
  children: PropTypes.node,
};

export default withStyles(styles)(FormHelperText);
