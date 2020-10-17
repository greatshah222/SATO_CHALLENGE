import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiSwitch from '@material-ui/core/Switch';
import * as designTokens from '../../.generated/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'initial',
    height: '40px',
  },
  thumb: {
    width: designTokens.switchIcon,
    height: designTokens.switchIcon,
  },
  track: {
    width: '54px',
    height: '18px',
  },
  switchBase: {
    backgroundColor: 'transparent',
    padding: 0,
    transform: 'translate(0, -7px)',
    '&$checked': {
      transform: 'translate(25px, -7px)',
    },
  },
  checked: {},
}));

const Switch = ({ ...props }) => {
  const classes = useStyles();
  return (
    <MuiSwitch
      color="primary"
      classes={{
        root: classes.root,
        thumb: classes.thumb,
        track: classes.track,
        switchBase: classes.switchBase,
        checked: classes.checked,
      }}
      {...props}
    />
  );
};

export default Switch;
