import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import MuiTextField from '@material-ui/core/TextField';
import * as designTokens from '../../.generated/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: designTokens.colorWhite,
    borderRadius: designTokens.borderRadiusLow,
    boxSizing: 'border-box',
    height: '100%',
    '&:hover': {
      boxShadow: designTokens.shadowMedium,
    },
    '&:not(hover):not($disabled):not($focused):not($error) $notchedOutline': {
      borderColor: designTokens.borderColorBlackMedium, // default
    },
    '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
      borderColor: designTokens.borderColorBlackMedium, // hover
    },
  },
  focused: {
    boxShadow: designTokens.shadowMedium,
    '&$focused $notchedOutline': {
      borderWidth: '1px',
    },
  },
  notchedOutline: {
    borderRadius: designTokens.borderRadiusLow,
  },
  noTopBottomPadding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  noBorderRadius: {
    borderRadius: 0,
  },
  noBorder: {
    borderWidth: 0,
  },
  smallPadding: {
    paddingTop: '14px',
    paddingBottom: '6px',
  },
  captionText: {
    ...theme.typography.caption,
    color: `${designTokens.colorBlack}B3`,
    marginLeft: designTokens.spacingMedium,
  },
  inputLabelRoot: {
    ...theme.typography.body2,
    color: `${designTokens.colorBlack}B3`,
  },
  shrink: {
    color: designTokens.colorBlack,
  },
  inputMarginDense: {
    padding: `${designTokens.spacingMedium} ${designTokens.spacingMedium}`,
    height: 'auto',
    '&::placeholder': {
      color: `${designTokens.colorBlack}B3`,
      opacity: 1,
    },
  },
  disabled: {},
  error: {},
}));

const TextField = ({ InputProps, multiline, floatingLabel, noBorderRadius, noBorder, smallPadding, ...rest }) => {
  const classes = useStyles();
  return (
    <MuiTextField
      variant="outlined"
      margin="dense"
      multiline={multiline}
      InputProps={{
        ...InputProps,
        classes: {
          root: classes.root,
          focused: classes.focused,
          notchedOutline: classNames(classes.notchedOutline, {
            [classes.noBorderRadius]: noBorderRadius,
            [classes.noBorder]: noBorder,
          }),
          inputMarginDense: classNames(classes.inputMarginDense, {
            [classes.noTopBottomPadding]: multiline,
            [classes.noBorderRadius]: noBorderRadius,
            [classes.smallPadding]: smallPadding,
          }),
        },
      }}
      InputLabelProps={{
        ...(!floatingLabel && { shrink: true }),
        classes: {
          root: classes.inputLabelRoot,
          shrink: classes.shrink,
        },
      }}
      FormHelperTextProps={{
        classes: {
          root: classes.captionText,
        },
      }}
      {...rest}
    />
  );
};

TextField.muiName = 'TextField';
TextField.propTypes = MuiTextField.propTypes;

export default TextField;
