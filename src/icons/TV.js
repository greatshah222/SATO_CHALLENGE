import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const TV = props => (
  <SvgIcon {...props} variant="large">
    <path d="M19 30h2v4h-2v-4zM7.75 34h24.5a.75.75 0 1 1 0 1.5H7.75a.75.75 0 1 1 0-1.5zM5 5h30a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm0 1.5A1.5 1.5 0 0 0 3.5 8v20A1.5 1.5 0 0 0 5 29.5h30a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 35 6.5H5zm6.003 2.284a.765.765 0 0 1 0 1.08L6.498 14.37a.765.765 0 1 1-1.081-1.081l4.505-4.505a.765.765 0 0 1 1.08 0zM4.876 19.777a.765.765 0 0 1 0-1.082l10.451-10.45a.765.765 0 0 1 1.081 1.081L5.957 19.775a.765.765 0 0 1-1.081 0z" />
  </SvgIcon>
);

export default withRef(TV);
