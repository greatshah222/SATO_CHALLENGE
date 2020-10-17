import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormHelperText from '../FormHelperText';
import { fade } from '@material-ui/core/styles/colorManipulator';
import * as designTokens from '../../.generated/styles';

const useStyles = makeStyles(theme => ({
  grouped: {
    '&:not(:last-child)': {
      borderTopRightRadius: designTokens.borderRadiusLow,
      borderBottomRightRadius: designTokens.borderRadiusLow,
      marginLeft: 0,
    },
    '&:not(:first-child)': {
      borderTopLeftRadius: designTokens.borderRadiusLow,
      borderBottomLeftRadius: designTokens.borderRadiusLow,
      borderColor: fade(theme.palette.primary.main, 0.3),
      marginLeft: 0,
    },
  },
}));

const ToggleButtonGroup = ({ error, helperText, containerClasses, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={containerClasses}>
      <MuiToggleButtonGroup classes={{ grouped: classes.grouped }} {...rest} />
      {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </div>
  );
};

ToggleButtonGroup.muiName = 'ToggleButtonGroup';
ToggleButtonGroup.propTypes = MuiToggleButtonGroup.propTypes;

export default ToggleButtonGroup;
