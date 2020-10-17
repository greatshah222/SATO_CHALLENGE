import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const LinkedIn = props => (
  <SvgIcon {...props}>
    <path d="M4.346 2.139c1.336 0 2.42 1.063 2.42 2.374 0 1.31-1.084 2.374-2.42 2.374-1.341 0-2.423-1.063-2.423-2.374 0-1.31 1.082-2.374 2.423-2.374zM2.254 21.86V8.687h4.181v13.174h-4.18zm6.8-13.174h4.004v1.801h.057c.558-1.035 1.92-2.128 3.952-2.128 4.228 0 5.01 2.728 5.01 6.276v7.225H17.9v-6.406c0-1.528-.027-3.493-2.17-3.493-2.173 0-2.505 1.665-2.505 3.383v6.516H9.055V8.687z" />
  </SvgIcon>
);

export default withRef(LinkedIn);
