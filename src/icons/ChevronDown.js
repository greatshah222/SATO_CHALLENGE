import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const ChevronDown = props => (
  <SvgIcon {...props}>
    <path d="M12.007 13.236l4.066-4.066a.75.75 0 0 1 1.06 1.06l-4.773 4.774a.5.5 0 0 1-.707 0L6.88 10.231a.75.75 0 1 1 1.06-1.06l4.067 4.065z" />
  </SvgIcon>
);

export default withRef(ChevronDown);
