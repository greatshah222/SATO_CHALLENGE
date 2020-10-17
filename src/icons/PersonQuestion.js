import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const PersonQuestion = props => (
  <SvgIcon variant="large" {...props}>
    <defs>
      <path id="a" d="M.632.592h29.22V18H.632z" />
      <path id="c" d="M0 .72h6.715v9.79H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#4A4848"
        d="M21.242 2.5c3.93 0 6.57 2.75 6.57 6.85 0 4.57-3.19 8.89-6.57 8.89-3.38 0-6.57-4.32-6.57-8.89 0-4.1 2.64-6.85 6.57-6.85m0 17.24c4.62 0 8.07-5.48 8.07-10.39 0-4.92-3.32-8.35-8.07-8.35s-8.07 3.44-8.07 8.35 3.45 10.39 8.07 10.39"
      />
      <g transform="translate(6 19.34)">
        <path
          fill="#4A4848"
          d="M2.142 11.93c.1-5.87 1.64-8.14 6.63-9.75 2.28 1.68 4.31 2.44 6.55 2.44 2.2 0 4.51-.85 6.53-2.4 4.8 1.59 6.31 3.78 6.49 9.37-8.28 6.41-17.79 6.53-26.2.34M21.932.67a.798.798 0 0 0-.7.13c-1.83 1.49-3.93 2.31-5.91 2.31-1.99 0-3.82-.73-5.95-2.36a.72.72 0 0 0-.68-.12C2.632 2.49.682 5.32.632 12.29c0 .24.11.46.3.6 4.51 3.41 9.32 5.11 14.12 5.11 4.97 0 9.92-1.83 14.52-5.47.18-.15.29-.37.28-.6-.14-6.68-2.07-9.41-7.92-11.26"
          mask="url(#b)"
        />
      </g>
      <g transform="translate(3 1.34)">
        <mask id="d" fill="#fff">
          <use href="#c" />
        </mask>
        <path
          fill="#4A4848"
          d="M3.982 2.32c.57.18.99.53 1.15.95.14.37.08.79-.18 1.21-.23.39-.63.73-1.06 1.09-.29.24-.59.49-.84.76-1.14 1.21-1.11 2-1.04 3.33l.01.13c.02.4.35.72.75.72h.04c.41-.02.73-.37.71-.78l-.01-.13c-.06-1.24-.07-1.5.63-2.24.21-.23.47-.44.72-.65.5-.42 1.02-.86 1.38-1.45.5-.82.61-1.71.3-2.52-.32-.86-1.09-1.54-2.1-1.86-1.27-.4-2.84-.03-3.73.88-.68.69-.88 1.6-.57 2.51.13.39.56.6.95.47.39-.13.6-.56.47-.95-.13-.38-.06-.69.21-.97.5-.51 1.48-.73 2.21-.5"
          mask="url(#d)"
        />
      </g>
      <path fill="#4A4848" d="M5.882 12.84a1.03 1.03 0 1 1 0 2.06 1.03 1.03 0 0 1 0-2.06" />
    </g>
  </SvgIcon>
);

export default withRef(PersonQuestion);
