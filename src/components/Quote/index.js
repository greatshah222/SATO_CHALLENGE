import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import * as tokens from '../../.generated/styles';

import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = theme =>
  createStyles({
    quote: {
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      margin: 0,
      padding: `${tokens.spacingMedium} ${tokens.spacing3Xl}`,
    },
  });

const Quote = ({ classes, children }) => {
  return (
    <blockquote className={classes.quote}>
      <Text variant="softyL">{children}</Text>
    </blockquote>
  );
};

Quote.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
};

export default withStyles(styles)(Quote);
