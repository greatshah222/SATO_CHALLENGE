import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiTextField from '@material-ui/core/TextField';
import * as designTokens from '../../.generated/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: designTokens.colorWhite,
    borderRadius: designTokens.borderRadiusFull,
    paddingLeft: 0,
    height: '72px',
    boxShadow: designTokens.shadowUltraHigh,
    borderColor: designTokens.borderColorBlackUltraLight,
    '@media all and (-ms-high-contrast:none),(-ms-high-contrast:active)': {
      //THis fixes IE rounded outline
      '& fieldset': {
        '& legend': {
          display: 'inline',
        },
      },
    },
    '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
      borderColor: designTokens.borderColorBlackUltraLight, // hover
    },
  },
  notchedOutline: {
    top: '-5.5px',
    borderRadius: designTokens.borderRadiusFull,
    borderColor: designTokens.borderColorBlackUltraLight,
    '@media all and (-ms-high-contrast:none),(-ms-high-contrast:active)': {
      //this positions ie rounded outline correctly
      top: '0px',
    },
  },
  adornedStart: {
    '& div': {
      marginLeft: designTokens.spacingXl,
      marginRight: designTokens.spacingMedium,
      [theme.breakpoints.down('sm')]: {
        marginLeft: designTokens.spacingLarge,
      },
    },
  },
  focused: {
    '&$focused $notchedOutline': {
      borderColor: designTokens.borderColorBlackUltraLight,
      borderWidth: '1px',
    },
  },
  disabled: {},
  error: {},
}));

const HugeTextField = ({ InputProps, ...rest }) => {
  const classes = useStyles();
  return (
    <MuiTextField
      variant="outlined"
      type={'search'}
      fullWidth
      InputProps={{
        ...InputProps,
        classes: {
          root: classes.root,
          notchedOutline: classes.notchedOutline,
          adornedStart: classes.adornedStart,
          focused: classes.focused,
        },
      }}
      InputLabelProps={{
        shrink: true,
      }}
      {...rest}
    />
  );
};

HugeTextField.muiName = 'TextField';
HugeTextField.propTypes = MuiTextField.propTypes;

export default HugeTextField;
