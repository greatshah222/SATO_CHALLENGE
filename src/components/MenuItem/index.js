import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRef } from '../../hocs/withRef';
import MuiMenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.body2,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  selected: {
    ...theme.typography.subtitle2,
    '&$selected &:hover': {
      backgroundColor: theme.palette.action.selected,
    },
  },
}));

const MenuItem = ({ ...props }) => {
  const classes = useStyles();
  return (
    <MuiMenuItem
      classes={{ root: classes.root, selected: classes.selected }}
      disableRipple
      disableTouchRipple
      {...props}
    />
  );
};

MenuItem.propTypes = MuiMenuItem.propTypes;

export default withRef(MenuItem);
