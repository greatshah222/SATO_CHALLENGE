import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const CheckboxUnchecked = props => (
  <SvgIcon {...props}>
    <path d="M8 1.5A6.5 6.5 0 0 0 1.5 8v8A6.5 6.5 0 0 0 8 22.5h8a6.5 6.5 0 0 0 6.5-6.5V8A6.5 6.5 0 0 0 16 1.5H8zM8 0h8a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z" />
  </SvgIcon>
);

export default withRef(CheckboxUnchecked);
