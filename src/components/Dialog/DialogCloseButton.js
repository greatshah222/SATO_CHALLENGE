import React from 'react';

import { withStyles, createStyles } from '@material-ui/core/styles';

import Text from '../Text';

import * as tokens from '../../.generated/styles';

const styles = theme =>
  createStyles({
    container: {
      outline: 0,
      border: 0,
      height: '3.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: tokens.colorEvening,
      width: '100%',
      color: tokens.textWhite,
      ['&:hover']: {
        backgroundColor: tokens.colorEveningDark,
      },
      ['&:active']: {
        backgroundColor: tokens.colorEveningUltraDark,
      },
      transition: `background-color ${tokens.moderateTime}ms`,
    },
    label: {
      lineHeight: '3.5rem',
    },
  });

const DialogCloseButton = ({ children, classes, label, ...rest }) => (
  <button {...rest} className={classes.container}>
    <Text className={classes.label} variant="button">
      {label}
    </Text>
  </button>
);

export default withStyles(styles)(DialogCloseButton);
