import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { withRef } from '../../hocs/withRef';
import MuiButton from '@material-ui/core/Button';

import * as designTokens from '../../.generated/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '4rem',
    boxSizing: 'border-box',
  },
  angular: {
    borderRadius: 0,
  },
  text: {
    border: '2px solid transparent',
    '&:hover': {
      backgroundColor: theme.palette.background.componentLight,
    },
  },
  contained: {
    border: '2px solid transparent',
    '&:hover': {
      backgroundColor: theme.palette.background.componentDark,
      boxShadow: designTokens.shadowMedium,
    },
    '&:active': {
      boxShadow: designTokens.shadowLow,
    },
  },
  outlined: {
    border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      color: designTokens.colorWhite,
      boxShadow: designTokens.shadowMedium,
    },
    '&:active': {
      borderColor: theme.palette.primary.main,
      boxShadow: designTokens.shadowLow,
    },
  },
  focusVisible: {
    border: `2px solid ${theme.palette.background.componentUltraDark}`,
  },
  focusVisibleOutlined: {
    border: `1px solid ${theme.palette.background.componentUltraDark}`,
  },
}));

const Button = ({ angular, className: classNameProp, variant, ...props }) => {
  const classes = useStyles();
  return (
    <MuiButton
      classes={{
        root: classNames(classes.root, {
          [classes.text]: variant === 'text',
          [classes.contained]: variant === 'contained',
          [classes.outlined]: variant === 'outlined',
        }),
        focusVisible: variant === 'outlined' ? classes.focusVisibleOutlined : classes.focusVisible,
      }}
      className={classNames({ [classes.angular]: angular }, classNameProp)}
      variant={variant}
      disableRipple
      disableTouchRipple
      {...props}
    />
  );
};

Button.muiName = 'Button'; 
Button.propTypes = {
  ...MuiButton.propTypes,
  angular: PropTypes.bool,
};

export default withRef(Button);
