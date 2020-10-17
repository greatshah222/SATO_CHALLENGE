import React from 'react';
import Dialog from './Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { withStyles, createStyles } from '@material-ui/core/styles';

import * as tokens from '../../.generated/styles';

import DialogCloseButton from './DialogCloseButton';

const TitleStyles = theme =>
  createStyles({
    root: {
      textAlign: 'center',
    },
  });

const ActionStyles = theme =>
  createStyles({
    root: {
      justifyContent: 'center',
      margin: 0,
      padding: 0,
    },
  });

const ContentStyles = theme =>
  createStyles({
    root: {
      borderTop: `1px solid rgba(0,0,0,0.1)`,
      paddingTop: tokens.spacingMedium,
    },
  });

const DialogTitle = withStyles(TitleStyles)(props => <MuiDialogTitle {...props} />);
const DialogActions = withStyles(ActionStyles)(props => <MuiDialogActions {...props} />);
const DialogContent = withStyles(ContentStyles)(props => <MuiDialogContent {...props} />);

export default Dialog;
export { DialogActions, DialogContent, DialogContentText, DialogTitle, DialogCloseButton };
