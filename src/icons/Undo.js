import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Undo = props => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M5.95 12.95l1.343 1.343A1 1 0 0 1 6.586 16H3a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 1.707-.707l1.18 1.18A10.224 10.224 0 0 1 12.5 8.5a10.25 10.25 0 0 1 9.157 5.639c.056.112.12.252.194.42a.748.748 0 1 1-1.375.596 6.507 6.507 0 0 0-.136-.295A8.75 8.75 0 0 0 12.5 10a8.729 8.729 0 0 0-6.55 2.95z" />
  </SvgIcon>
);

export default withRef(Undo);
