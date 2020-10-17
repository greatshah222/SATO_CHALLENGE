import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const ChevronLeft = props => (
  <SvgIcon {...props}>
    <path d="M10.764 12.007l4.066 4.066a.75.75 0 0 1-1.06 1.06L8.995 12.36a.5.5 0 0 1 0-.707l4.773-4.773a.75.75 0 0 1 1.06 1.06l-4.065 4.067z" />
  </SvgIcon>
);

export default withRef(ChevronLeft);
