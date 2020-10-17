import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Information = props => (
  <SvgIcon {...props}>
    <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zm-1.354 5.163c0-.37.133-.688.4-.954.267-.267.585-.4.954-.4.37 0 .687.133.954.4.267.266.4.584.4.954s-.133.687-.4.954c-.267.267-.585.4-.954.4-.37 0-.687-.133-.954-.4a1.303 1.303 0 0 1-.4-.954zm.27 3.151h2.167v8.667h-2.166V9.814z" />
  </SvgIcon>
);

export default withRef(Information);
