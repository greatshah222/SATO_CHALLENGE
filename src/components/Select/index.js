import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';

import TextField from '../TextField/index';
import ChevronDownIcon from '../../icons/ChevronDown';

import * as designTokens from '../../.generated/styles';

const styles = theme =>
  createStyles({
    select: {
      ...theme.typography.body2,
      '& :focus, & :active': {
        backgroundColor: 'transparent',
      },
    },
    chevronDownIcon: {
      top: 'calc(50% - 12px)',
      right: designTokens.spacingSmall,
      color: 'rgba(0, 0, 0, 0.54)',
      position: 'absolute',
      pointerEvents: 'none',
    },
    input: {
      paddingRight: designTokens.spacing4Xl,
    },
  });

const Select = ({ SelectProps, classes, ...rest }) => {
  return (
    <TextField
      select
      SelectProps={{
        IconComponent: () => <ChevronDownIcon className={classes.chevronDownIcon} />,
        className: classes.select,
        ...SelectProps,
      }}
      inputProps={{
        className: classes.input,
      }}
      {...rest}
    />
  );
};

export default withStyles(styles)(Select);
