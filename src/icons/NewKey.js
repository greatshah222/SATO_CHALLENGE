import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const NewKey = props => (
  <SvgIcon variant="large" {...props}>
    <path
      fillRule="evenodd"
      d="M38.658 11.59c.54 1.03.16 2.31-.87 2.86l-11.89 5.93c-.53.32-1.11.47-1.69.47-.282 0-.558-.05-.83-.12l-9.77 9.78a.753.753 0 0 1-.53.22c-.2 0-.39-.08-.53-.22l-.56-.56-.86.86.56.56a.751.751 0 0 1 0 1.06l-2.42 2.41c-.29.29-.77.29-1.06 0l-.56-.56-.83.83.56.56c.29.29.29.77 0 1.06l-1.99 1.99a.707.707 0 0 1-.52.22.746.746 0 0 1-.53-.22l-3.12-3.12a.756.756 0 0 1 0-1.06l17.956-17.966a3.29 3.29 0 0 1 .343-2.564l5.931-11.89A2.098 2.098 0 0 1 27.318 1c.33 0 .67.08.99.24l3.14 1.65a11.47 11.47 0 0 1 5.56 5.56l1.65 3.14zm-25.58 17.33l8.77-8.78-2.06-2.06-16.99 16.99 2.06 2.06.93-.93-.56-.56a.756.756 0 0 1 0-1.06l1.89-1.89a.753.753 0 0 1 1.06 0l.56.56 1.36-1.35-.56-.56a.747.747 0 0 1 0-1.06l1.92-1.92c.29-.29.77-.29 1.06 0l.56.56zm14.39-24.41c-.47.48.96 2.68 3.21 4.93 1.96 1.96 3.88 3.3 4.66 3.3.12 0 .21-.03.27-.09.47-.48-.96-2.68-3.21-4.93-1.96-1.96-3.88-3.3-4.66-3.3-.12 0-.21.03-.27.09zM2.427 7.68c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.29V2.89c0-.41.34-.75.75-.75s.75.34.75.75v3.29h3.29c.41 0 .75.34.75.75s-.34.75-.75.75h-3.29v3.29c0 .42-.34.76-.75.76s-.75-.34-.75-.75v-3.3h-3.29z"
    />
  </SvgIcon>
);

export default withRef(NewKey);