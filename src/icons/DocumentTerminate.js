import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const DocumentTerminate = props => (
  <SvgIcon {...props} variant="large">
    <path
      fillRule="evenodd"
      d="M5.7 19.94a.746.746 0 0 1-.163-.62c-.015-.06-.037-.116-.037-.18V5.3C5.5 3.48 6.98 2 8.8 2h16.17c.017 0 .029.008.045.009a.743.743 0 0 1 .495.21l8.55 8.55c.034.035.05.079.077.117.029.043.064.08.085.129.012.028.01.06.018.089.018.064.04.127.04.196v7.91a.72.72 0 0 1-.335.727.752.752 0 0 1-.177.094l-5.018 1.74a.614.614 0 0 1-.27.059.77.77 0 0 1-.3-.06l-5.89-2.62-5.57 2.37a.762.762 0 0 1-.79-.13l-5.38-4.71-3.79 3.33c-.31.27-.78.24-1.06-.07zM8.8 3.5c-.99 0-1.8.81-1.8 1.8v12.502l3.06-2.682c.28-.25.71-.25.99 0l5.52 4.83 5.44-2.32c.19-.08.41-.08.6 0l5.92 2.63 4.25-1.47v-6.63h-7.69c-.41 0-.75-.34-.75-.75V3.5H8.8zm17.04 1.17v5.99h5.99l-5.99-5.99zm8.39 20.47c.015.045.01.091.017.137.006.038.024.073.024.112v9.971c.01 1.82-1.481 3.3-3.301 3.3H8.8c-1.82 0-3.3-1.48-3.3-3.3V24.08c0-.02.01-.038.012-.058a.777.777 0 0 1 .044-.213c.007-.018.018-.035.027-.053a.72.72 0 0 1 .13-.194c.01-.01.024-.018.035-.029.043-.039.079-.084.132-.113l4.29-2.39c.28-.15.62-.12.86.09l5.46 4.78 5.41-3.22c.24-.14.54-.14.77 0l5.89 3.57 4.72-1.58a.717.717 0 0 1 .234-.029l.007-.002v.001a.738.738 0 0 1 .664.422c.009.017.02.031.028.048.004.011.014.02.018.03zm-3.26 12.02c.99 0 1.8-.81 1.8-1.8v-8.938l-4.06 1.358c-.07.04-.15.05-.23.05a.766.766 0 0 1-.39-.11l-5.8-3.52-5.49 3.27a.756.756 0 0 1-.88-.08l-5.48-4.79L7 24.513V35.36c0 .99.81 1.8 1.8 1.8h22.17z"
    />
  </SvgIcon>
);

export default withRef(DocumentTerminate);