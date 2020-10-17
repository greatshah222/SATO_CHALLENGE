import React from 'react';
import MuiPaper from '@material-ui/core/Paper';
import { withRef } from '../../hocs/withRef';
import { makeStyles } from '@material-ui/core/styles';
import * as tokens from '../../.generated/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  elevation1: {
    boxShadow: tokens.shadowLow,
  },
  elevation2: {
    boxShadow: tokens.shadowMedium,
  },
  elevation3: {
    boxShadow: tokens.shadowHigh,
  },
  elevation4: {
    boxShadow: tokens.shadowUltraHigh,
  },
}));

const Paper = ({ classes, ...props }) => {
  const defaultClasses = useStyles();
  return (
    <MuiPaper
      classes={{
        elevation1: defaultClasses.elevation1,
        elevation2: defaultClasses.elevation2,
        elevation3: defaultClasses.elevation3,
        elevation4: defaultClasses.elevation4,
        ...classes,
      }}
      {...props}
    />
  );
};

export default withRef(Paper);
