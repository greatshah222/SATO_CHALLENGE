import React from 'react';
import MuiDialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import * as tokens from '../../.generated/styles';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 11000,
  },
  paper: {
    borderRadius: tokens.borderRadiusMedium,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxHeight: '90vh',
      margin: 0,
    },
    // IE11 fix
    '@media all and (-ms-high-contrast:none)': {
      width: '768px',
    },
  },
}));

const Dialog = ({ PaperProps: PaperPropsProp, ...props }) => {
  const classes = useStyles();
  const paperProps = {
    ...PaperPropsProp,
    className: classNames(classes.paper, PaperPropsProp && PaperPropsProp.className),
  };
  return <MuiDialog classes={classes} PaperProps={paperProps} {...props} />;
};

Dialog.muiName = 'Dialog';
Dialog.propTypes = MuiDialog.propTypes;

export default Dialog;
