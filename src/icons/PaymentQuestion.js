import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const PaymentQuestion = props => (
  <SvgIcon variant="large" {...props}>
    <path
      fillRule="evenodd"
      d="M38.357 16.23c.002.022.013.04.013.062v19.21a3.312 3.312 0 0 1-3.307 3.318H4.939a3.31 3.31 0 0 1-3.307-3.307V16.43c-.005-.026.001-.052 0-.079v-.06l.002-.013c.002-.057.002-.113.017-.17.007-.027.025-.051.035-.078a.604.604 0 0 1 .03-.065c.016-.034.023-.072.046-.105l.01-.009c.004-.007.005-.015.01-.02l3.378-4.38a.717.717 0 0 1 .3-.223V4.487A3.31 3.31 0 0 1 8.767 1.18h22.217a3.31 3.31 0 0 1 3.307 3.307v6.69c.21.012.414.103.55.285l3.379 4.38c.02.027.028.061.045.091.02.038.04.074.055.115a.72.72 0 0 1 .037.182zM5.46 13.52L3.44 16.142l12.835 9.27 1.512-1.283a2.986 2.986 0 0 1 2.105-.852c.811 0 1.573.32 2.144.89l1.347 1.145 13.17-9.177-2.26-2.93v2.366a.743.743 0 0 1-.743.751.758.758 0 0 1-.752-.751V4.487c0-.992-.81-1.804-1.803-1.804H8.767a1.81 1.81 0 0 0-1.804 1.804v11.084c0 .41-.34.751-.751.751a.757.757 0 0 1-.752-.751v-2.05zm31.407 21.983V17.74l-12.302 8.575 10.608 9.008c.32.27.351.741.09 1.062-.16.17-.37.26-.58.26a.781.781 0 0 1-.492-.18l-11.196-9.501a.74.74 0 0 1-.318-.25c-.008-.01-.008-.023-.015-.034l-1.649-1.399c-.671-.661-1.633-.621-2.215-.04L5.57 36.465a.751.751 0 0 1-1.062-.09.75.75 0 0 1 .09-1.062l10.492-8.897L3.135 17.78v17.722a1.81 1.81 0 0 0 1.804 1.804h30.124a1.81 1.81 0 0 0 1.804-1.804zM21.313 18.998c-2.89 0-5.341-1.888-6.2-4.49h-.844a.757.757 0 0 1-.751-.752c0-.41.34-.751.751-.751h.538a6.412 6.412 0 0 1-.028-.541c0-.187.013-.37.028-.551h-.538a.757.757 0 0 1-.751-.752c0-.41.34-.752.751-.752h.846c.865-2.6 3.317-4.48 6.198-4.48.673 0 1.333.101 1.975.301.39.13.61.552.49.942a.75.75 0 0 1-.94.492 5.028 5.028 0 0 0-6.096 2.746h2.026c.412 0 .751.34.751.75 0 .412-.34.753-.751.753h-2.42c-.02.183-.055.362-.055.55 0 .186.035.361.055.542h2.42c.412 0 .751.34.751.751s-.34.752-.751.752h-2.031a5.026 5.026 0 0 0 5.89 2.816c.411-.1.81.13.921.531a.75.75 0 0 1-.531.922c-.56.14-1.132.22-1.704.22z"
    />
  </SvgIcon>
);

export default withRef(PaymentQuestion);