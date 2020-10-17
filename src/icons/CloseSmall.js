import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const CloseSmall = props => (
  <SvgIcon {...props}>
    <path d="M13.412 12.003l5.297-5.296a1 1 0 1 0-1.414-1.414l-5.297 5.295-5.294-5.295a1 1 0 1 0-1.415 1.414l5.295 5.295-5.295 5.293a1 1 0 0 0 1.415 1.414l5.294-5.292 5.291 5.292a1 1 0 0 0 1.415-1.414l-5.292-5.292z" />
  </SvgIcon>
);

export default withRef(CloseSmall);
