import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Send = props => (
  <SvgIcon {...props} variant="large">
    <path d="M38.216 1.784c.22.22.28.56.15.84l-16.06 35.37a.746.746 0 0 1-.68.44h-.04a.73.73 0 0 1-.67-.51l-4.86-14.11-13.98-4.73a.766.766 0 0 1-.51-.67c-.02-.3.16-.59.44-.72l34.908-15.85c.012-.006.023-.012.036-.017l.426-.193a.743.743 0 0 1 .84.15zm-16.49 33.88L35.513 5.287 17.484 23.315l4.243 12.348zM33.759 4.921L4.357 18.273l12 4.05 17.4-17.4z" />
  </SvgIcon>
);

export default withRef(Send);
