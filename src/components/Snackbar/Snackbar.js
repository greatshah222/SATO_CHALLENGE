import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiSnackbar from '@material-ui/core/Snackbar';
import * as tokens from '../../.generated/styles';
import { withStyles } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import classNames from 'classnames';

const styles = theme => ({
  content: {
    background: tokens.colorWhite,
    color: tokens.textBlack,
    borderRadius: tokens.borderRadiusMedium,
    boxShadow: tokens.shadowMedium,
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      margin: `${tokens.spacingSmall}`,
    },
    [theme.breakpoints.up('md')]: {
      minWidth: '110%',
    },
  },
  biggerOffset: {
    bottom: '6rem', // The height of CallToActionBar + tokens.spacingMedium
  },
  error: {
    background: tokens.error,
  },
  message: {
    ...theme.typography.body2,
    width: '80%',
  },
  messageError: {
    color: tokens.colorWhite,
    width: '100%',
  },
});

const Snackbar = ({ classes, ContentProps, type, biggerOffset, theme, ...props }) => {
  const [open, setOpen] = React.useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: isMobile ? 'top' : 'bottom', horizontal: 'left' }}
      autoHideDuration={3000}
      onClose={handleClose}
      open={open}
      classes={{ root: classNames({ [classes.biggerOffset]: !isMobile && biggerOffset }) }}
      ContentProps={{
        classes: {
          root: classNames(classes.content, {
            [classes.error]: type === 'ERROR',
            [classes.biggerOffset]: biggerOffset,
          }),
          message: classNames(classes.message, { [classes.messageError]: type === 'ERROR' }),
        },
        ...ContentProps,
      }}
      {...props}
    />
  );
};

export default withStyles(styles, { withTheme: true })(Snackbar);
