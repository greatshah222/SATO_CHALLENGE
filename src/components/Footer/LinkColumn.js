import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Text from '../Text';

import * as designTokens from '../../.generated/styles';

const styles = theme => ({
  columnHeader: {
    marginBottom: designTokens.spacingMedium,
    color: designTokens.textWhite,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
      textAlign: 'center',
    },
  },
  fullWidth: {
    width: '100%',
  },
});

const LinkColumn = ({ header, children, classes }) => (
  <div className={classes.fullWidth}>
    <Text variant="h5" className={classes.columnHeader}>
      {header}
    </Text>
    {children}
  </div>
);

LinkColumn.propTypes = {
  header: PropTypes.string,
  children: PropTypes.element,
  classes: PropTypes.object,
};

export default withStyles(styles)(LinkColumn);
