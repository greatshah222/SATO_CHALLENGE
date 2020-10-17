import React from 'react';
import { withRef } from '../../hocs/withRef';
import MuiGrid from '@material-ui/core/Grid';

const Grid = props => <MuiGrid {...props} />;

Grid.muiName = 'Grid';

export default withRef(Grid);
