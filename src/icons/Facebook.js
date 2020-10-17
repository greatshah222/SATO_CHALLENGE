import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Facebook = props => (
  <SvgIcon {...props}>
    <path d="M20.935 1.957H3.065c-.612 0-1.108.496-1.108 1.108v17.87c0 .612.496 1.108 1.108 1.108h9.62v-7.778h-2.617v-3.032h2.618V8.998c0-2.595 1.584-4.008 3.899-4.008 1.108 0 2.061.083 2.339.12V7.82h-1.605c-1.259 0-1.503.599-1.503 1.477v1.935h3.002l-.39 3.032h-2.612v7.778h5.119c.612 0 1.108-.496 1.108-1.108V3.065c0-.612-.496-1.108-1.108-1.108" />
  </SvgIcon>
);

export default withRef(Facebook);
