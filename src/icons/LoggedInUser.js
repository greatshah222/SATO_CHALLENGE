import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const LoggedInUser = ({ children, ...rest }) => (
  <SvgIcon {...rest} variant={'large'}>
    <path d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5zm0 1.5C9.507 39 1 30.493 1 20S9.507 1 20 1s19 8.507 19 19-8.507 19-19 19z" />
    <text fontFamily="Lato-Regular, Lato" fontSize="16">
      <tspan x="20" y="26" textAnchor={'middle'}>
        {children}
      </tspan>
    </text>
  </SvgIcon>
);

export default withRef(LoggedInUser);
