import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiInputLabel from '@material-ui/core/InputLabel';

import * as designTokens from '../../.generated/styles';

const styles = theme => ({
  root: {
    fontFamily: '"Lato-Regular", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: theme.typography.pxToRem(16),
    color: designTokens.textBlack,
  },
});

const InputLabel = ({ classes, ...rest }) => {
  return <MuiInputLabel classes={classes} {...rest} />;
};

InputLabel.propTypes = MuiInputLabel.propTypes;
InputLabel.muiName = 'InputLabel';

export default withStyles(styles)(InputLabel);
