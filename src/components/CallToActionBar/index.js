import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import MuiSnackbar from '@material-ui/core/Snackbar';
import * as tokens from '../../.generated/styles';

const useStyles = makeStyles(theme => ({
  snackbar: {
    width: '100%',
    height: tokens.spacingGargantual,
    background: theme.palette.primary.main,
    bottom: 0,
  },
  content: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  transparent: {
    background: 'transparent',
    color: tokens.textBlack,
  },
}));

const CallToActionBar = ({ className, transparent, ...props }) => {
  const classes = useStyles();
  return (
    <MuiSnackbar
      className={classNames(classes.snackbar, { [classes.transparent]: transparent }, className)}
      ContentProps={{
        classes: {
          root: classes.content,
        },
      }}
      {...props}
    />
  );
};

export default CallToActionBar;
