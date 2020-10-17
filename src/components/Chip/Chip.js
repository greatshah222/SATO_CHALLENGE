import React from 'react';
import PropTypes from 'prop-types';
import MuiChip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import * as tokens from '../../.generated/styles';
import CloseSmall from '../../icons/CloseSmall';
import classNames from 'classnames';

// takes care of icon color as well
const textColor = color => ({
  color,
  '& svg': {
    color,
  },
});

const styles = theme => {
  const smallCommon = {
    ...theme.typography.labelSmall,
    borderRadius: tokens.borderRadiusFull,
    backgroundColor: theme.palette.background.componentLight,
    ...textColor(theme.palette.primary.main),
  };
  const bigCommon = {
    ...theme.typography.label,
    borderRadius: tokens.borderRadiusLow,
    height: tokens.spacing3Xl,
    minWidth: tokens.buttonMinWidth,
    ...textColor(theme.palette.primary.main),
  };

  const inputCommon = {
    justifyContent: 'space-between',
  };

  return {
    root: {
      height: tokens.spacingXl,
    },
    display: {
      ...smallCommon,
    },
    choice: {
      ...smallCommon,
      '&:hover:not(:focus)': {
        ...textColor(tokens.textWhite),
        backgroundColor: theme.palette.primary.main,
      },
      '&:active': {
        backgroundColor: theme.palette.background.componentUltraDark,
      },
      '&$deletable &:focus': {
        backgroundColor: 'red',
      },
    },
    chosen: {
      ...smallCommon,
      ...textColor(tokens.textWhite),
      backgroundColor: theme.palette.primary.main,
      '&:hover:not(:focus)': {
        backgroundColor: theme.palette.background.componentUltraDark,
      },
      '&:active': {
        backgroundColor: theme.palette.background.componentUltraDark,
      },
    },
    notSelected: {
      ...bigCommon,
      border: `1px solid ${theme.palette.background.componentLight}`,
      background: tokens.colorWhite,
      '&:hover:not(:focus)': {
        backgroundColor: theme.palette.background.componentLight,
      },
      '&:active': {
        backgroundColor: theme.palette.background.componentLight,
      },
    },
    selected: {
      ...bigCommon,
      ...textColor(tokens.textWhite),
      background: theme.palette.primary.main,
      '&:hover:not(:focus)': {
        backgroundColor: theme.palette.background.componentUltraDark,
      },
      '&:active': {
        backgroundColor: theme.palette.background.componentUltraDark,
      },
    },
    inputBig: {
      ...bigCommon,
      ...inputCommon,
      background: theme.palette.background.componentLight,
      '&:hover:not(:focus)': {
        ...textColor(tokens.textWhite),
        backgroundColor: theme.palette.primary.main,
      },
      '&:active': {
        backgroundColor: theme.palette.background.componentUltraDark,
      },
    },
    inputSmall: {
      ...smallCommon,
      ...inputCommon,
      '&:hover:not(:focus)': {
        ...textColor(tokens.textWhite),
        backgroundColor: theme.palette.primary.main,
      },
      '&:active': {
        backgroundColor: theme.palette.background.componentUltraDark,
      },
    },
    white: {
      ...smallCommon,
      ...textColor(tokens.colorBlack),
      backgroundColor: tokens.colorWhite,
      '&:hover:not(:focus)': {
        color: theme.palette.primary.main,
        backgroundColor: tokens.colorWhite,
      },
      '&:active': {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.componentUltraLight,
      },
    },
    homeFeature: {
      ...bigCommon,
      backgroundColor: theme.palette.background.componentUltraLight,
      ...theme.typography.body2,
      ...textColor(tokens.textBlack),
    },
    plain: {
      backgroundColor: tokens.colorWhite,
    },
    colorPrimary: {
      color: theme.palette.primary.main,
    },
    label: {
      paddingLeft: tokens.spacingMedium,
      paddingRight: tokens.spacingMedium,
      whiteSpace: 'normal',
    },
    icon: {
      margin: 0,
      paddingLeft: tokens.spacingSmall,
    },
    deleteIcon: {
      margin: 0,
      paddingRight: tokens.spacingSmall,
    },
    roundIconChip: {
      paddingLeft: '5px',
      paddingRight: '5px',
    },
    deletable: {
      '&:focus': {
        backgroundColor: theme.palette.background.componentLight,
      },
    },
    deletablePrimary: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
      },
    },
    deletableWhite: {
      '&:focus': {
        backgroundColor: tokens.colorWhite,
      },
    },
  };
};

const Chip = ({ variant, plain, classes, className, deleteIcon, onDelete, color, roundIconChip, icon, ...rest }) => {
  // if chip has onDelete function, but no custom deleteIcon, set default delete icon
  const deletionIcon = deleteIcon ? deleteIcon : onDelete && !deleteIcon ? <CloseSmall /> : null;
  return (
    <MuiChip
      onDelete={onDelete}
      classes={{
        root: classes.root,
        label: roundIconChip ? classes.roundIconChip : classes.label,
        deletable: classNames(classes.deletable, {
          [classes.deletablePrimary]: variant === 'selected',
          [classes.deletableWhite]: variant === 'notSelected',
        }),
        icon: classes.icon,
        deleteIcon: classes.deleteIcon,
      }}
      className={`${classNames(classes[variant], className, {
        [classes.plain]: plain,
        [classes.colorPrimary]: color === 'primary',
      })}`}
      icon={icon}
      deleteIcon={deletionIcon}
      {...rest}
    />
  );
};

Chip.propTypes = {
  variant: PropTypes.oneOf([
    'choice',
    'chosen',
    'notSelected',
    'selected',
    'inputBig',
    'inputSmall',
    'display',
    'white',
    'homeFeature',
  ]),
};

export default withStyles(styles)(Chip);
