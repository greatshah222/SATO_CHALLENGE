import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Pet = props => (
  <SvgIcon variant="large" {...props}>
    <path d="M38.497 16.193c0 1.967-1.614 3.567-3.598 3.567-1.393 0-2.191-.574-3.067-1.848-.062-.09-.11-.16-.217-.321l-3.023-4.496a.749.749 0 0 1 .21-1.045.762.762 0 0 1 1.053.208l3.026 4.5c.802 1.2 1.157 1.495 2.018 1.495a2.072 2.072 0 0 0 2.079-2.06c0-.722-.26-1.742-.629-2.476-1.316-2.608-4.64-5.21-6.416-5.21-.547 0-2.25 1.265-3.87 2.761 2.533 2.92 3.92 7.894 3.92 13.365 0 6.523-2.901 9.194-9.983 9.194-7.082 0-9.983-2.671-9.983-9.194 0-5.47 1.387-10.445 3.924-13.296-1.623-1.564-3.328-2.83-3.874-2.83-1.776 0-5.1 2.602-6.415 5.21-.37.734-.63 1.753-.63 2.476 0 1.136.933 2.06 2.078 2.06.827 0 1.192-.299 1.97-1.435.126-.183.18-.261.247-.355l2.828-4.205a.762.762 0 0 1 1.053-.208c.35.23.444.698.21 1.045L8.57 17.316c-.065.092-.122.173-.232.333-1.045 1.526-1.767 2.111-3.237 2.111-1.984 0-3.598-1.6-3.598-3.567 0-.95.317-2.214.79-3.15C3.86 9.936 7.633 7 10.067 7c1.14 0 2.96 1.341 4.88 3.266 1.434-1.22 3.125-1.86 5.053-1.86s3.619.64 4.986 1.862C26.974 8.34 28.793 7 29.933 7c2.435 0 6.207 2.936 7.774 6.043.473.936.79 2.2.79 3.15zm-18.518-6.39c-5.328 0-8.512 6.322-8.512 14.763 0 5.7 2.217 7.71 8.512 7.71s8.512-2.01 8.512-7.71c0-8.44-3.185-14.763-8.512-14.763zm3.662 16.558a.716.716 0 0 1 .959-.303.7.7 0 0 1 .307.948c-.55 1.055-1.905 1.086-2.058 1.086-1.106 0-2.176-.625-2.849-1.518-.673.893-1.743 1.518-2.85 1.518-.15 0-1.49-.03-2.053-1.078a.7.7 0 0 1 .295-.952.716.716 0 0 1 .963.291c.13.243.596.328.8.33.83 0 1.693-.702 2.003-1.509-1.17-.262-2.007-1.047-2.007-2.011 0-1.185 1.251-2.113 2.85-2.113 1.597 0 2.848.928 2.848 2.113 0 .964-.836 1.75-2.007 2.011.311.807 1.173 1.51 2.007 1.51.194-.003.67-.088.792-.323zm-1.042-7.046c-.589 0-1.068-.76-1.068-1.693s.48-1.692 1.068-1.692c.59 0 1.069.76 1.069 1.692 0 .934-.48 1.693-1.069 1.693zm-5.074 0c-.589 0-1.068-.76-1.068-1.693s.479-1.692 1.068-1.692c.59 0 1.069.76 1.069 1.692 0 .934-.48 1.693-1.069 1.693z" />
  </SvgIcon>
);

export default withRef(Pet);