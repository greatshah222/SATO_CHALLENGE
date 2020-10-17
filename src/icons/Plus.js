import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Plus = props => (
  <SvgIcon variant="large" {...props}>
    <g fill="none" fillRule="evenodd" transform="translate(4 4)">
      <circle cx="12.5" cy="12.5" r="12.5" stroke="#4B4A4A" />
      <g fill="#4A4A4A" transform="translate(6 6)">
        <rect width="13" height="1" y="6" rx=".5" />
        <rect width="13" height="1" y="6" rx=".5" transform="rotate(90 6.5 6.5)" />
      </g>
    </g>
  </SvgIcon>
);

export default withRef(Plus);
