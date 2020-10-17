import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import MuiTab from '@material-ui/core/Tab';
import * as tokens from '../../.generated/styles';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    color: tokens.textGrey,
    minWidth: tokens.spacingGargantual,
    paddingTop: tokens.spacingLarge,
    paddingBottom: tokens.spacingLarge,
    whiteSpace: 'nowrap',
  },
  selected: {
    color: tokens.colorBlack,
  },
  labelContainerLarge: {
    paddingTop: tokens.spacing2Xl,
    paddingBottom: tokens.spacing2Xl,
    [theme.breakpoints.down('sm')]: {
      paddingTop: tokens.spacingLarge,
      paddingBottom: tokens.spacingLarge,
    },
  },
  extraRightPadding: {
    paddingRight: tokens.spacingXl,
  },
  icon: {
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  labelIcon: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const Tab = ({ key, label, icon, largePadding, numOfNewMessages, ...props }) => {
  const classes = useStyles();
  return (
    <MuiTab
      key={key}
      label={label}
      icon={icon}
      classes={{
        root: classNames(classes.root, {
          [classes.labelContainerLarge]: largePadding,
          [classes.extraRightPadding]: numOfNewMessages && numOfNewMessages > 0,
        }),
        selected: classes.selected,
        labelIcon: classes.labelIcon,
      }}
      disableRipple
      {...props}
    />
  );
};

export default Tab;
