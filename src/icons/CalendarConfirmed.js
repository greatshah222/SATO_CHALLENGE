import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const CalendarConfirmed = props => (
  <SvgIcon variant="large" {...props}>
    <g fill="none" fillRule="evenodd">
      <g stroke="#494949" transform="translate(2 2)">
        <rect width="23" height="23.107" x=".5" y="1.393" rx="3" />
        <path strokeLinecap="square" strokeWidth=".75" d="M1.333 8.482h22.24M6.444 3.071V.254M18 3.071V.254" />
      </g>
      <g fill="#4A4A4A" transform="translate(6 13)">
        <ellipse cx="4.921" cy=".45" rx="1" ry="1" />
        <ellipse cx="8.5" cy=".45" rx="1" ry="1" />
        <ellipse cx="12.079" cy=".45" rx="1" ry="1" />
        <ellipse cx="16.553" cy=".45" rx="1" ry="1" />
        <ellipse cx="4.921" cy="4.95" rx="1" ry="1" />
        <ellipse cx="8.5" cy="4.95" rx="1" ry="1" />
        <ellipse cx="12.079" cy="4.95" rx="1" ry="1" />
        <ellipse cx="16.553" cy="4.95" rx="1" ry="1" />
        <ellipse cx=".447" cy="4.95" rx="1" ry="1" />
        <ellipse cx="4.921" cy="8.55" rx="1" ry="1" />
        <ellipse cx="8.5" cy="8.55" rx="1" ry="1" />
        <ellipse cx="12.079" cy="8.55" rx="1" ry="1" />
        <ellipse cx="16.553" cy="8.55" rx="1" ry="1" />
        <ellipse cx=".447" cy="8.55" rx="1" ry="1" />
      </g>
      <g transform="translate(14 17)">
        <circle cx="9" cy="7" r="7" fill="#00B7C6" />
        <path
          stroke="#FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.064 7.971l2.07 1.792 3.573-5.162"
        />
      </g>
    </g>
  </SvgIcon>
);

export default withRef(CalendarConfirmed);
