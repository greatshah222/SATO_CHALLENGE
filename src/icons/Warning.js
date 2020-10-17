import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Warning = props => (
  <SvgIcon {...props}>
    <path d="M12 1.71c.41 0 .785.217.993.592l5.408 9.939 5.473 10.055a1.13 1.13 0 0 1-.993 1.67H1.119a1.13 1.13 0 0 1-.993-1.67l5.473-10.055 5.409-9.94c.207-.374.583-.59.992-.59zm0 1.852l-5.11 9.38-5.194 9.549h20.602l-5.194-9.55L12 3.562zm.143 13.327a.741.741 0 0 1-.738-.738V8.397c0-.405.333-.738.738-.738.404 0 .737.333.737.738v7.748c0 .41-.331.744-.737.744zm0 1.728a1.265 1.265 0 1 1 0 2.53 1.265 1.265 0 0 1 0-2.53z" />
  </SvgIcon>
);

export default withRef(Warning);
