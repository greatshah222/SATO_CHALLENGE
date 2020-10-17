import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const LockSmall = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M10.917 16.585v2.457a1.083 1.083 0 0 0 2.166 0v-2.457A2.166 2.166 0 0 0 12 12.542a2.167 2.167 0 0 0-1.083 4.043zm7.543-6.57a8.667 8.667 0 1 1-12.92 0 6.571 6.571 0 0 1-.04-.723v-3.25a6.5 6.5 0 1 1 13 0v3.25c0 .244-.013.485-.04.722zm-2.127-1.73V6.041a4.333 4.333 0 1 0-8.666 0v2.242A8.627 8.627 0 0 1 12 7.125c1.579 0 3.059.422 4.333 1.16z" />
    </SvgIcon>
  );
};

export default withRef(LockSmall);
