import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const HomeSearch = props => (
  <SvgIcon {...props} variant="large">
    <path d="M2.19 8.132a.758.758 0 0 1 .17-.512l4.91-5.89c.14-.17.35-.27.58-.27h19.62c.247 0 .468.123.605.31l4.885 5.9c.11.13.17.3.17.48v5.17c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.9L27.47 3.4l-4.15 5.02.06 7.07c0 .4-.34.74-.76.74.01 0 .01 0 0 0-.41 0-.75-.33-.75-.74l-.06-7.34c0-.18.06-.35.17-.48l3.9-4.71H8.2L3.69 8.364V37.03h13.87a.749.749 0 1 1 0 1.5H2.94c-.41 0-.75-.34-.75-.75V8.14v-.008zm17.37.758H6.25a.749.749 0 1 1 0-1.5h13.31a.749.749 0 1 1 0 1.5zm7.91 6.18c-.41 0-.75-.34-.75-.75v-2.06c0-.41.34-.75.75-.75s.75.34.75.75v2.06c0 .41-.34.75-.75.75zm-19.63 1c-.41 0-.75-.34-.75-.75v-2.06c0-.41.34-.75.75-.75s.75.34.75.75v2.06c0 .41-.33.75-.75.75zm0 8.16c-.41 0-.75-.34-.75-.75v-2.06c0-.41.34-.75.75-.75s.75.34.75.75v2.06c0 .42-.33.75-.75.75zm4.91-8.16c-.41 0-.75-.34-.75-.75v-2.06c0-.41.34-.75.75-.75s.75.33.75.74v2.06c0 .42-.34.76-.75.76zm0 8.16c-.41 0-.75-.34-.75-.75v-2.06c0-.41.34-.75.75-.75s.75.34.75.75v2.06c0 .42-.34.75-.75.75zm4.91-8.16c-.41 0-.75-.34-.75-.75v-2.06c0-.41.34-.75.75-.75s.75.34.75.75v2.06c0 .41-.34.75-.75.75zm0 8.16c-.41 0-.75-.34-.75-.75v-2.06c0-.41.34-.75.75-.75s.75.34.75.75v2.06c0 .42-.34.75-.75.75zm0 8c-.41 0-.75-.34-.75-.75v-2.06c0-.41.34-.75.75-.75s.75.34.75.75v2.06c0 .42-.34.75-.75.75zm-5 6.3H7.75c-.41 0-.75-.34-.75-.75V29.2c0-.41.34-.75.75-.75h4.91c.41 0 .75.34.75.75v8.59c0 .41-.34.74-.75.74zm-4.16-1.5h3.41v-7.09H8.5v7.09zm11.605.237a.751.751 0 0 1-.195-1.067l4.702-6.522a7.962 7.962 0 0 1-2.142-5.438c0-4.41 3.59-7.99 7.99-7.99 4.41 0 7.99 3.59 7.99 7.99a7.994 7.994 0 0 1-10.133 7.698L23.47 38.67a.74.74 0 0 1-.61.31.791.791 0 0 1-.488-.177.773.773 0 0 1-.052-.033l-2.21-1.5a.743.743 0 0 1-.005-.003zm1.474-.81l1.095.743 4.194-5.824a8.004 8.004 0 0 1-1.127-.692l-4.162 5.773zM30.46 17.75c-3.58 0-6.49 2.91-6.49 6.49s2.91 6.49 6.49 6.49 6.49-2.91 6.49-6.49-2.91-6.49-6.49-6.49zm3.2 7.48c-.41 0-.75-.34-.75-.75 0-1.14-.93-2.07-2.07-2.07-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.97 0 3.57 1.6 3.57 3.57 0 .42-.34.75-.75.75z" />
  </SvgIcon>
);

export default withRef(HomeSearch);
