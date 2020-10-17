import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const CheckBig = props => (
  <SvgIcon variant="large" {...props}>
    <path
      fill="none"
      fillRule="nonzero"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M3.067 21.95l15.36 11.452L37.57 5.051"
    />
  </SvgIcon>
);

export default withRef(CheckBig);
