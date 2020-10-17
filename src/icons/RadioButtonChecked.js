import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const RadioButtonChecked = props => (
  <SvgIcon {...props}>
    <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zM12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z" />
  </SvgIcon>
);

export default withRef(RadioButtonChecked);
