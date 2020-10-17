import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const ArrowRight = props => (
  <SvgIcon {...props}>
    <path d="M18.336 11.25l-3.318-3.317a.75.75 0 0 1 1.061-1.06l4.773 4.772a.5.5 0 0 1 0 .707l-4.773 4.773a.75.75 0 0 1-1.06-1.06l3.314-3.315H2.59a.75.75 0 1 1 0-1.5h15.746z" />
  </SvgIcon>
);

export default withRef(ArrowRight);
