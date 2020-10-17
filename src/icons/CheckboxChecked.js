import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const CheckboxChecked = props => (
  <SvgIcon {...props}>
    <path d="M16 0a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8h8zm2.152 7.293a1 1 0 0 0-1.32-.083l-.094.083-6.95 6.95-3.076-3.115a1 1 0 0 0-1.506 1.31l.082.096 3.784 3.83a1 1 0 0 0 1.324.089l.094-.084 7.662-7.662a1 1 0 0 0 0-1.414z" />
  </SvgIcon>
);

export default withRef(CheckboxChecked);
