import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const ArrowLeft = props => (
  <SvgIcon {...props}>
    <path d="M5.663 11.25L8.98 7.933a.75.75 0 0 0-1.06-1.06l-4.774 4.772a.5.5 0 0 0 0 .707l4.773 4.773a.75.75 0 0 0 1.061-1.06L5.665 12.75H21.41a.75.75 0 1 0 0-1.5H5.663z" />
  </SvgIcon>
);

export default withRef(ArrowLeft);
