import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Shelter = props => (
  <SvgIcon {...props} variant="large">
    <path d="M3.4012,34.9888 C2.82636945,34.9888 2.4652219,34.3687044 2.7488618,33.8687259 L19.5098618,4.32372586 C19.7972398,3.81715805 20.5271602,3.81715805 20.8145382,4.32372586 L37.5755382,33.8687259 C37.8591781,34.3687044 37.4980306,34.9888 36.9232,34.9888 L3.4012,34.9888 Z M35.6354391,33.4888 L20.1622,6.21376569 L4.68896087,33.4888 L35.6354391,33.4888 Z" />
  </SvgIcon>
);

export default withRef(Shelter);
