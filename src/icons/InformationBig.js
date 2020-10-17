import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const InformationBig = props => (
  <SvgIcon variant="large" {...props}>
    <path d="M20.1 1.6c10.16 0 18.39 8.24 18.39 18.4 0 10.16-8.24 18.4-18.4 18.4-10.16 0-18.4-8.24-18.4-18.4C1.69 9.84 9.93 1.6 20.1 1.6zm0 1.5C10.78 3.1 3.2 10.68 3.2 20c0 9.32 7.58 16.9 16.9 16.9C29.42 36.9 37 29.32 37 20c0-9.32-7.58-16.9-16.9-16.9zm0 13c.41 0 .75.34.75.75v11.92c0 .42-.34.76-.75.76s-.75-.34-.75-.75V16.85c0-.41.34-.75.75-.75zm0-5.01a1.56 1.56 0 1 1 0 3.12 1.56 1.56 0 0 1 0-3.12z" />
  </SvgIcon>
);

export default withRef(InformationBig);
