import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const CheckWithCircle = props => (
  <SvgIcon {...props} variant="large">
    <path d="M20 1.6c10.16 0 18.4 8.24 18.4 18.4 0 10.16-8.24 18.4-18.4 18.4C9.84 38.4 1.6 30.16 1.6 20 1.6 9.84 9.84 1.6 20 1.6zm0 1.5C10.68 3.1 3.1 10.68 3.1 20c0 9.32 7.58 16.9 16.9 16.9 9.32 0 16.9-7.58 16.9-16.9 0-9.32-7.58-16.9-16.9-16.9zm6.875 10.49a.75.75 0 1 1 1.257.82l-8.047 12.35a.75.75 0 0 1-1.087.185l-6.457-4.99a.75.75 0 0 1 .918-1.186l5.813 4.492 7.603-11.67z" />
  </SvgIcon>
);

export default withRef(CheckWithCircle);
