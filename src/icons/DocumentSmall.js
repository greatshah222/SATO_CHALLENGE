import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const DocumentSmall = props => (
  <SvgIcon {...props}>
    <path d="M16 0l5 6v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h11zm-1.501 1.5H5a.5.5 0 0 0-.492.41L4.5 2v20a.5.5 0 0 0 .41.492L5 22.5h14a.5.5 0 0 0 .492-.41L19.5 22V7.5h-4a1 1 0 0 1-1-1l-.001-5zM12.25 16a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 1 1 0-1.5h4.5zm4-3a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5zm0-3a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5zm-.251-7.658v3.657L19.046 6l-3.047-3.658z" />
  </SvgIcon>
);

export default withRef(DocumentSmall);
