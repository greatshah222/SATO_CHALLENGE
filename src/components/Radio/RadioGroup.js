import React from 'react';
import PropTypes from 'prop-types';
import MuiRadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '../FormHelperText';

const RadioGroup = ({ children, classes, helperText, helperTextClass, error, ...rest }) => (
  <FormControl>
    <MuiRadioGroup {...rest}>{children}</MuiRadioGroup>
    {helperText && (
      <FormHelperText helperTextClass={helperTextClass} error={error}>
        {helperText}
      </FormHelperText>
    )}
  </FormControl>
);

RadioGroup.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  helperText: PropTypes.string,
  helperTextClass: PropTypes.object,
  error: PropTypes.bool,
};

export default RadioGroup;
