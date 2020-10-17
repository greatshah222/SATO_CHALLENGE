import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const ChevronUp = props => (
  <SvgIcon {...props}>
    <path d="M11.993 10.764L7.927 14.83a.75.75 0 1 1-1.06-1.06l4.773-4.774a.5.5 0 0 1 .707 0l4.773 4.773a.75.75 0 0 1-1.06 1.06l-4.067-4.065z" />
  </SvgIcon>
);

export default withRef(ChevronUp);
