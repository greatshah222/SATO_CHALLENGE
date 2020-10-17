import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Search = props => (
  <SvgIcon {...props}>
    <path d="M9.537 13.45a5.5 5.5 0 1 1 .835.835l-.462-.373-.373-.463zM3.22 19.54a.75.75 0 0 0 1.06 1.061l5.15-5.15a7 7 0 1 0-1.06-1.06l-5.15 5.15z" />
  </SvgIcon>
);

export default withRef(Search);
