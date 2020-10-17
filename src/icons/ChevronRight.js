import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const ChevronRight = props => (
  <SvgIcon {...props}>
    <path d="M13.236 11.993L9.17 7.927a.75.75 0 0 1 1.06-1.06l4.774 4.773a.5.5 0 0 1 0 .707l-4.773 4.773a.75.75 0 1 1-1.06-1.06l4.065-4.067z" />
  </SvgIcon>
);

export default withRef(ChevronRight);
