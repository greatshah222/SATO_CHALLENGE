import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const WarningBig = props => (
  <SvgIcon variant="large" {...props}>
    <path d="M20 4.103c.47 0 .93.241 1.19.71l8.32 15.29 8.42 15.47c.49.9-.16 2-1.19 2H3.26c-1.03 0-1.68-1.1-1.19-2l8.42-15.47 8.32-15.29c.26-.469.72-.71 1.19-.71zm0 1.66l-8.2 15.05-8.3 15.26h32.99l-8.3-15.26L20 5.763zm.22 24.35a1.561 1.561 0 1 1 0 3.122 1.561 1.561 0 0 1 0-3.122zm0-15.32c.41 0 .75.34.75.75v11.92c0 .42-.34.76-.75.76s-.75-.34-.75-.75v-11.93c0-.41.34-.75.75-.75z" />
  </SvgIcon>
);

export default withRef(WarningBig);
