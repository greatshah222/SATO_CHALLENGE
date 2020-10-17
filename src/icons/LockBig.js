import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const LockBig = props => (
  <SvgIcon {...props} variant="large">
    <path
      fillRule="evenodd"
      d="M28.6 15.6c2.57 2.44 4.18 5.88 4.18 9.69 0 7.38-6.01 13.39-13.39 13.39C12.01 38.68 6 32.67 6 25.29c0-3.81 1.61-7.24 4.17-9.68 0-.03-.02-.06-.02-.1V9.94c0-.07 0-.13.02-.19A9.205 9.205 0 0 1 19.39 1c4.95 0 8.99 3.86 9.22 8.8.01.04.01.09.01.13v.13c.01.08.01.13.01.18 0 .02-.01.13-.01.15v5.11c0 .04-.02.07-.02.1zm-9.21 21.58c6.55 0 11.89-5.33 11.89-11.89 0-6.56-5.33-11.89-11.89-11.89-6.56 0-11.89 5.33-11.89 11.89 0 6.56 5.33 11.89 11.89 11.89zm.09-17.63a3.55 3.55 0 0 1 3.55 3.55 3.54 3.54 0 0 1-1.5 2.88v3.45a2.1 2.1 0 1 1-4.2 0v-3.52a3.57 3.57 0 0 1-1.4-2.81 3.55 3.55 0 0 1 3.55-3.55zm.95 5.35c.68-.36 1.1-1.05 1.1-1.81 0-1.13-.92-2.05-2.05-2.05s-2.05.92-2.05 2.05c0 .73.39 1.39 1.03 1.76.23.14.37.38.37.65v3.92a.6.6 0 0 0 1.2 0v-3.86c0-.28.15-.53.4-.66zm3.64-13.85v1.7c-1.46-.55-3.03-.86-4.68-.86-1.58 0-3.09.29-4.5.79v-1.83c0-.03.01-.06.01-.09.09-2.48 2.1-4.42 4.58-4.42s4.49 1.94 4.58 4.42v.18c.01.03.01.1.01.11zm-12.43-.97c.01-.04.01-.08.01-.13a7.714 7.714 0 0 1 7.73-7.46c4.18 0 7.58 3.28 7.73 7.46 0 .03 0 .05.01.07v.04l.01.21c0 .02-.01.12-.01.14v3.95c-.5-.36-1.03-.68-1.58-.97.01-.04.02-.07.02-.1v-2.57c0-.04 0-.08-.01-.12a6.065 6.065 0 0 0-6.08-5.78c-3.25 0-5.89 2.51-6.08 5.74-.01.05-.02.1-.02.16v2.58c-.61.31-1.2.66-1.75 1.05v-4.27h.02z"
    />
  </SvgIcon>
);

export default withRef(LockBig);
