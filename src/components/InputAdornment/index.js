import React from 'react';
import MuiInputAdornment from '@material-ui/core/InputAdornment';

const InputAdornment = ({ classes, ...rest }) => {
  return <MuiInputAdornment classes={classes} {...rest} />;
};

InputAdornment.propTypes = MuiInputAdornment.propTypes;
InputAdornment.muiName = 'InputAdornment';

export default InputAdornment;
