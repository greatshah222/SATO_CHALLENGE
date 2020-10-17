import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Add = props => (
  <SvgIcon {...props}>
    <path d="M12.75 11.25h7.5a.75.75 0 1 1 0 1.5h-7.5v7.5a.75.75 0 1 1-1.5 0v-7.5h-7.5a.75.75 0 1 1 0-1.5h7.5v-7.5a.75.75 0 1 1 1.5 0v7.5z" />
  </SvgIcon>
);

export default withRef(Add);
