import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Check = props => (
  <SvgIcon {...props}>
    <path d="M10.769 16.623l8.386-12.378a1 1 0 1 1 1.655 1.122l-8.984 13.262a1 1 0 0 1-1.442.229l-7.08-5.507a1 1 0 1 1 1.228-1.579l6.237 4.851z" />
  </SvgIcon>
);

export default withRef(Check);
