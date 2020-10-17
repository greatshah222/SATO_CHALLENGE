import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Menu = props => (
  <SvgIcon {...props}>
    <path d="M3.75 18h16.5a.75.75 0 1 0 0-1.5H3.75a.75.75 0 1 0 0 1.5zm0-5.25h16.5a.75.75 0 1 0 0-1.5H3.75a.75.75 0 1 0 0 1.5zm-.75-6c0 .414.336.75.75.75h16.5a.75.75 0 1 0 0-1.5H3.75a.75.75 0 0 0-.75.75z" />
  </SvgIcon>
);

export default withRef(Menu);
