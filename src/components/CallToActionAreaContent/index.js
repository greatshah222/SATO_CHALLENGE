import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles } from '@material-ui/core/styles';
import * as tokens from '../../.generated/styles';

const styles = theme =>
  createStyles({
    CTAContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    CTAContent: {
      maxWidth: `${theme.breakpoints.values.sm}px`,
      width: '100%',
      paddingTop: tokens.spacingMedium,
    },
  });

const CallToActionAreaContent = ({ children, classes }) => {
  return (
    <div className={classes.CTAContainer}>
      <div className={classes.CTAContent}>{children}</div>
    </div>
  );
};

CallToActionAreaContent.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
};

export default withStyles(styles)(CallToActionAreaContent);
