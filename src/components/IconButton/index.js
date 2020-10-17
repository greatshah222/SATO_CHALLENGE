import React from 'react';
import MuiIconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import * as tokens from '../../.generated/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: tokens.spacing3Xl,
    height: tokens.spacing3Xl,
  },
  outlined: {
    border: `1px solid ${fade(tokens.textBlack, 0.23)}`,
  },
  primary: {
    color: theme.palette.primary.main,
  },
  outlinedPrimary: {
    color: theme.palette.primary.main,
    border: `1px solid ${fade(theme.palette.primary.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&[disabled]': {
      border: `1px solid ${theme.palette.action.disabled}`,
    },
  },
  toolbar: {
    padding: 0,
    width: tokens.sizingIconLarge,
    height: tokens.sizingIconLarge,
    backgroundColor: 'transparent',
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
    },
  },
  sizeSmall: {
    width: '2.5rem',
    height: '2.5rem',
    padding: '4px 8px',
  },
  sizeXSmall: {
    width: tokens.sizingIcon,
    height: tokens.sizingIcon,
    padding: 0,
  },
  noBG: {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

const IconButton = ({ className: classNameProp, variant, color, size, ...rest }) => {
  const classes = useStyles();
  return (
    <MuiIconButton
      classes={{
        root: classNames(classes.root, {
          [classes.outlined]: variant === 'outlined',
          [classes.toolbar]: variant === 'toolbar',
          [classes.primary]: color === 'primary',
          [classes.outlinedPrimary]: variant === 'outlined' && color === 'primary',
          [classes.sizeSmall]: size === 'small',
          [classes.sizeXSmall]: size === 'xSmall',
          [classes.noBG]: variant === 'noBG',
        }),
      }}
      className={classNameProp}
      {...rest}
    />
  );
};

IconButton.muiName = 'IconButton';

IconButton.propTypes = {
  ...MuiIconButton.propTypes,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['outlined', 'toolbar', 'noBG']),
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'xSmall']),
};

export default IconButton;
