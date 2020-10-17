import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Studio = props => (
  <SvgIcon variant="large" {...props}>
    <path
      d="M36.37,38.59 L3.63,38.59 C2.41,38.59 1.41,37.6 1.41,36.37 L1.41,3.63 C1.41,2.41 2.41,1.41 3.63,1.41 L36.37,1.41 C37.59,1.41 38.59,2.4 38.59,3.63 L38.59,21.39 C38.59,21.44 38.59,21.49 38.58,21.53 C38.59,21.58 38.59,21.62 38.59,21.67 C38.59,22.08 38.25,22.42 37.84,22.42 L29.55,22.42 C29.98,24.67 31.72,30.67 37.84,30.67 C38.25,30.67 38.59,31.01 38.59,31.42 L38.59,36.37 C38.59,37.59 37.59,38.59 36.37,38.59 Z M3.63,2.91 C3.23,2.91 2.91,3.23 2.91,3.63 L2.91,36.37 C2.91,36.77 3.23,37.09 3.63,37.09 L36.37,37.09 C36.77,37.09 37.09,36.77 37.09,36.37 L37.09,32.14 C29.05,31.57 27.94,21.85 27.93,21.74 C27.91,21.53 27.98,21.32 28.12,21.16 C28.26,21 28.46,20.91 28.68,20.91 L37.1,20.91 L37.1,3.63 C37.1,3.23 36.78,2.91 36.38,2.91 L3.63,2.91 Z"
      transform="translate(20.000000, 20.000000) scale(-1, -1) rotate(-360.000000) translate(-20.000000, -20.000000) "
    />
  </SvgIcon>
);

export default withRef(Studio);