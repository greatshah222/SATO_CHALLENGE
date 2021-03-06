import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Message = ({ ...props }) => (
  <SvgIcon {...props} variant={'large'}>
    <path d="M20.5 3c11.41 0 18.49 5.87 18.49 15.32S31.9 33.64 20.5 33.64c-2.78 0-5.36-.36-7.68-1.08L4.6 37.27a.72.72 0 0 1-.37.1c-.18 0-.36-.07-.5-.19a.754.754 0 0 1-.19-.86l3.12-7.1C3.61 26.53 2 22.78 2 18.32 2.01 8.87 9.09 3 20.5 3zm0 29.13c10.48 0 16.99-5.29 16.99-13.82 0-8.52-6.51-13.81-16.99-13.81-10.48 0-16.99 5.29-16.99 13.81 0 4.2 1.57 7.7 4.54 10.11.26.21.35.57.21.88l-2.43 5.53 6.53-3.75c.18-.11.4-.13.61-.06 2.25.74 4.78 1.11 7.53 1.11zm-7.92-14.77a1.51 1.51 0 1 1 0 3.02 1.51 1.51 0 0 1 0-3.02zm7.33 0a1.51 1.51 0 1 1 0 3.02 1.51 1.51 0 0 1 0-3.02zm7.33 0a1.51 1.51 0 1 1 0 3.02 1.51 1.51 0 0 1 0-3.02z" />
  </SvgIcon>
);

export default withRef(Message);
