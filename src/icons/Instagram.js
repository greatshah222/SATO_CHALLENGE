import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Instagram = props => (
  <SvgIcon {...props}>
    <path d="M19.91 22.283H4.09a2.373 2.373 0 0 1-2.373-2.374V4.09A2.373 2.373 0 0 1 4.09 1.717h15.82a2.372 2.372 0 0 1 2.373 2.373v15.82a2.373 2.373 0 0 1-2.373 2.373zM12 8.045a3.954 3.954 0 1 0 0 7.91 3.956 3.956 0 0 0 0-7.91zm7.91-3.164a.791.791 0 0 0-.792-.79h-2.372a.79.79 0 0 0-.791.79v2.373a.79.79 0 0 0 .791.791h2.372a.791.791 0 0 0 .792-.791V4.881zm0 5.536h-1.79A6.34 6.34 0 0 1 18.327 12a6.327 6.327 0 1 1-12.655 0c0-.546.078-1.075.208-1.582H4.09v8.702c0 .436.354.79.792.79h14.236a.791.791 0 0 0 .792-.79v-8.702z" />
  </SvgIcon>
);

export default withRef(Instagram);