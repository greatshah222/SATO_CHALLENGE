import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Email = props => (
  <SvgIcon {...props} variant="large">
    <path d="M35.36 8c1.82 0 3.3 1.48 3.3 3.31v19.16c0 1.82-1.48 3.3-3.3 3.3H5.3c-1.82 0-3.3-1.48-3.3-3.3V11.3C2 9.48 3.48 8 5.3 8h30.06zm1.8 22.47V11.31c0-.99-.81-1.8-1.8-1.8H5.3c-.99 0-1.8.81-1.8 1.8v19.16c0 .99.81 1.8 1.8 1.8h30.06c.99 0 1.8-.81 1.8-1.8zM14.29 22.5a.735.735 0 0 1 1.05.08c.27.32.23.79-.08 1.06l-9.09 7.79a.76.76 0 0 1-1.06-.08.756.756 0 0 1 .08-1.06l9.1-7.79zm11.89-.18l9.29 7.97c.31.27.35.75.08 1.06a.758.758 0 0 1-1.06.08l-9.29-7.97a.757.757 0 0 1-.08-1.06.758.758 0 0 1 1.06-.08zm9.35-11.33c.26.32.23.79-.09 1.06L22.28 23.21c-.56.56-1.32.85-2.08.85-.78 0-1.56-.29-2.16-.89L4.93 12.05a.748.748 0 0 1-.09-1.06c.27-.31.74-.35 1.06-.09l13.16 11.16c.64.64 1.61.64 2.21.04l13.2-11.2a.758.758 0 0 1 1.06.09z" />
  </SvgIcon>
);

export default withRef(Email);