import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const PhoneDialog = props => (
  <SvgIcon variant="large" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#4B4A4A"
        d="M18.525 27.808c-.004 0-.004.004 0 0-.167.179-.338.34-.522.52-.277.263-.56.54-.825.85-.432.46-.94.677-1.607.677-.064 0-.133 0-.197-.004-1.27-.081-2.45-.575-3.335-.996a18.98 18.98 0 0 1-6.31-4.92c-1.458-1.75-2.433-3.367-3.078-5.104-.398-1.06-.543-1.885-.48-2.664a1.95 1.95 0 0 1 .59-1.264L4.22 13.45c.21-.195.432-.302.65-.302.269 0 .487.162.624.298l.013.013c.26.243.508.494.77.762.132.136.269.272.405.413l1.168 1.162c.453.45.453.868 0 1.319-.124.123-.244.247-.368.366-.36.366-.701.707-1.073 1.039-.009.008-.017.012-.022.02-.367.367-.299.724-.222.967l.013.038c.303.732.731 1.422 1.38 2.243l.005.005c1.18 1.447 2.424 2.575 3.797 3.439.175.11.354.2.525.285.154.077.3.149.424.225.017.009.034.022.051.03a.93.93 0 0 0 .423.107c.355 0 .577-.222.65-.294l1.462-1.456c.146-.144.376-.319.646-.319.265 0 .483.166.616.31l.008.01 2.356 2.345c.44.434.44.88.004 1.332zm-1.53-4.482c-.415-.43-.915-.66-1.446-.66-.525 0-1.03.226-1.462.656l-1.35 1.34c-.112-.06-.223-.115-.33-.17-.154-.076-.3-.149-.423-.225-1.266-.8-2.416-1.843-3.519-3.193-.534-.672-.893-1.238-1.154-1.813.35-.319.675-.651.992-.97l.359-.362c.898-.894.898-2.052 0-2.945l-1.167-1.162c-.133-.132-.27-.268-.398-.405a20.143 20.143 0 0 0-.804-.791C5.88 12.217 5.383 12 4.861 12c-.521 0-1.026.217-1.454.626l-.008.008-1.454 1.46a3.108 3.108 0 0 0-.927 1.98c-.103 1.242.265 2.4.547 3.157.692 1.86 1.727 3.584 3.27 5.431a20.108 20.108 0 0 0 6.7 5.223c.983.464 2.296 1.013 3.762 1.107.09.004.184.008.27.008.987 0 1.817-.353 2.466-1.056.005-.008.013-.012.017-.02.223-.269.48-.512.749-.771.183-.175.372-.358.555-.55.424-.438.646-.948.646-1.472 0-.528-.227-1.034-.658-1.46l-2.348-2.345z"
      />
      <path
        stroke="#4A4848"
        d="M29.532 13.755h-2.581a.462.462 0 0 0-.468.456v2.739c0 .043-.053.066-.086.037l-3.47-3.112a.475.475 0 0 0-.316-.12h-9.143a.462.462 0 0 1-.468-.456V3.456c0-.252.21-.456.468-.456h16.064c.259 0 .468.204.468.456v9.843c0 .252-.21.456-.468.456z"
      />
      <g fill="#4A4848">
        <path d="M17 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M21.5 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M26 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
      </g>
    </g>
  </SvgIcon>
);

export default withRef(PhoneDialog);