import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Visibility = props => (
  <SvgIcon variant="large" {...props}>
    <g fill="none" fillRule="nonzero" stroke="black">
      <path d="M16 6.5c-4.998 0-9.797 3.207-13.904 7.896a2.456 2.456 0 0 0 0 3.207C6.185 22.285 11 25.5 16 25.5s9.804-3.21 13.904-7.896a2.456 2.456 0 0 0 0-3.207C25.805 9.71 21 6.5 16 6.5z" />
      <path d="M16 9.5A6.507 6.507 0 0 0 9.5 16c0 3.584 2.915 6.5 6.5 6.5 3.587 0 6.5-2.914 6.5-6.5S19.587 9.5 16 9.5z" />
    </g>
  </SvgIcon>
);

export default withRef(Visibility);
