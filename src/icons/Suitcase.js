import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Suitcase = props => (
  <SvgIcon variant="large" {...props}>
    <path
      fillRule="nonzero"
      d="M27.79 7.988h-5.709V6.5c0-1.367-1.149-2.5-2.534-2.5h-7.094c-1.385 0-2.534 1.133-2.534 2.5v1.488h-5.71C2.453 7.988 1 9.417 1 11.15v14.683C1 27.567 2.453 29 4.21 29h23.58c1.757 0 3.21-1.433 3.21-3.167V11.367c0-1.767-1.347-3.379-3.21-3.379zM11.193 6.406c0-.781.641-1.406 1.443-1.406h6.73c.802 0 1.443.625 1.443 1.406.004.916.004 1.447 0 1.594h-9.616V6.406zM30 25.81A2.19 2.19 0 0 1 27.802 28H4.198A2.19 2.19 0 0 1 2 25.81V11.19C2 9.977 2.98 9 4.198 9h23.604A2.19 2.19 0 0 1 30 11.19v14.62z"
    />
  </SvgIcon>
);

export default withRef(Suitcase);
