import React from 'react';
import Hidden from '@material-ui/core/Hidden';

export const Desktop = ({ initialWidth, ...props }) => <Hidden smDown initialWidth={initialWidth} {...props} />;
export const Mobile = ({ initialWidth, ...props }) => <Hidden mdUp initialWidth={initialWidth} {...props} />;
