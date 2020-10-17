import React from 'react';
import MuiToggleButton from '@material-ui/lab/ToggleButton';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import * as designTokens from '../../.generated/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: designTokens.colorWhite,
    border: `1px solid ${fade(theme.palette.primary.main, 0.3)}`,
    borderRadius: designTokens.borderRadiusLow,
    height: 54,
    minWidth: 86,
    textTransform: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '@media (hover: none)': {
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
      },
    },
    '&$selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
    '&:not(:first-child)': {
      borderRadius: designTokens.borderRadiusLow,
      marginRight: designTokens.spacingSmall,
    },
    '&:not(:last-child)': {
      borderRadius: designTokens.borderRadiusLow,
      marginRight: designTokens.spacingSmall,
    },
  },
  selected: {},
}));

const ToggleButton = ({ ...rest }) => {
  const classes = useStyles();
  return (
    <MuiToggleButton
      classes={{
        root: classes.root,
        selected: classes.selected,
      }}
      disableFocusRipple
      disableRipple
      {...rest}
    />
  );
};

ToggleButton.muiName = 'ToggleButton';
ToggleButton.propTypes = MuiToggleButton.propTypes;

export default ToggleButton;
