import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const LockedContract = props => (
  <SvgIcon variant="large" {...props}>
    <g fill="none" fillRule="evenodd">
      <g stroke="#555353" transform="translate(7 3)">
        <rect width="18" height="25" x=".5" y=".5" rx="2" />
        <path strokeLinecap="round" d="M3 22h6.52M3 19h13M3 16h13M3 13h13" />
      </g>
      <g transform="translate(17 17)">
        <circle cx="7" cy="7" r="7" fill="#4A4A4A" />
        <path
          fill="#FFF"
          d="M10 9.979c0 .286-.192.521-.427.521H4.427c-.235 0-.427-.235-.427-.521V6.548c0-.287.192-.52.427-.52h.152v-.684C4.579 4.08 5.624 3.022 6.928 3h.144c1.304.022 2.35 1.08 2.35 2.344v.684h.15c.236 0 .428.233.428.52v3.43zM7.071 7.19H6.93a.628.628 0 0 0-.6.625c0 .174.069.331.188.444v1.037c0 .118.104.218.23.218h.509c.123 0 .227-.1.227-.218V8.26a.605.605 0 0 0 .188-.444.628.628 0 0 0-.6-.625zM7 3.968c-.781 0-1.42.623-1.42 1.377v.684H8.42v-.684c0-.754-.636-1.377-1.42-1.377z"
        />
      </g>
    </g>
  </SvgIcon>
);

export default withRef(LockedContract);
