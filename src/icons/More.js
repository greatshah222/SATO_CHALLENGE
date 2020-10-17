import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const More = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M6 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
    />
  </SvgIcon>
);

export default withRef(More);
