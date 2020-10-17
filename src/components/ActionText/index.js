import React from 'react';
import Button from '../Button';
import { withStyles } from '@material-ui/core/styles';

import * as designTokens from '../../.generated/styles';

const styles = (theme) => ({
  text: {
    fontFamily: designTokens.fontTelefonWeb,
    color: theme.palette.primary.main,
  },
});

const ActionText = ({ classes, ...props }) => (
  <Button classes={classes} {...props} />
);

export default withStyles(styles)(ActionText);
