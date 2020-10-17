import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiTooltip from '@material-ui/core/Tooltip';
import { withRef } from '../../hocs/withRef';
import * as designTokens from '../../.generated/styles';

const useStyles = makeStyles(theme => ({
  tooltip: {
    backgroundColor: designTokens.colorWhite,
    color: designTokens.textBlack,
    ...theme.typography.body1,
    padding: designTokens.spacingMedium,
    boxShadow: designTokens.shadowLow,
    borderRadius: designTokens.borderRadiusLow,
    '& a': {
      color: theme.palette.primary.main,
      ...theme.typography.labelSmall,
    },
    '& p:first-child, a:first-child': {
      marginTop: 0,
    },
    '& p:last-child, a:last-child': {
      marginBottom: 0,
    },
  },
  popper: {
    opacity: 1,
  },
}));

const Tooltip = ({ ...props }) => {
  const classes = useStyles();
  return <MuiTooltip interactive classes={{ tooltip: classes.tooltip, popper: classes.popper }} {...props} />;
};

Tooltip.muiName = 'Tooltip';
export default withRef(Tooltip);
