import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Balcony = props => (
  <SvgIcon {...props} variant="large">
    <path d="M6.97718433,21.4999 C6.97719477,21.5015321 6.9772,21.5031654 6.9772,21.5048 L6.9772,31.5778 C6.9772,31.9920136 6.64141356,32.3278 6.2272,32.3278 C5.81298644,32.3278 5.4772,31.9920136 5.4772,31.5778 L5.4772,21.5048 C5.4772,21.5031654 5.47720523,21.5015321 5.47721567,21.4999 L2.9918,21.4999 C2.57758644,21.4999 2.2418,21.1641136 2.2418,20.7499 C2.2418,20.3356864 2.57758644,19.9999 2.9918,19.9999 L36.7038,19.9999 C37.1180136,19.9999 37.4538,20.3356864 37.4538,20.7499 C37.4538,21.1641136 37.1180136,21.4999 36.7038,21.4999 L34.5015843,21.4999 C34.5015948,21.5015321 34.5016,21.5031654 34.5016,21.5048 L34.5016,31.5778 C34.5016,31.9920136 34.1658136,32.3278 33.7516,32.3278 C33.3373864,32.3278 33.0016,31.9920136 33.0016,31.5778 L33.0016,21.5048 C33.0016,21.5031654 33.0016052,21.5015321 33.0016157,21.4999 L27.6206843,21.4999 C27.6206948,21.5015321 27.6207,21.5031654 27.6207,21.5048 L27.6207,31.5778 C27.6207,31.9920136 27.2849136,32.3278 26.8707,32.3278 C26.4564864,32.3278 26.1207,31.9920136 26.1207,31.5778 L26.1207,21.5048 C26.1207,21.5031654 26.1207052,21.5015321 26.1207157,21.4999 L20.7388843,21.4999 C20.7388948,21.5015321 20.7389,21.5031654 20.7389,21.5048 L20.7389,31.5778 C20.7389,31.9920136 20.4031136,32.3278 19.9889,32.3278 C19.5746864,32.3278 19.2389,31.9920136 19.2389,31.5778 L19.2389,21.5048 C19.2389,21.5031654 19.2389052,21.5015321 19.2389157,21.4999 L13.8579843,21.4999 C13.8579948,21.5015321 13.858,21.5031654 13.858,21.5048 L13.858,31.5778 C13.858,31.9920136 13.5222136,32.3278 13.108,32.3278 C12.6937864,32.3278 12.358,31.9920136 12.358,31.5778 L12.358,21.5048 C12.358,21.5031654 12.3580052,21.5015321 12.3580157,21.4999 L6.97718433,21.4999 Z M2.992,37.667 C2.57778644,37.667 2.242,37.3312136 2.242,36.917 L2.242,34.112 C2.242,33.6977864 2.57778644,33.362 2.992,33.362 L36.704,33.362 C37.1182136,33.362 37.454,33.6977864 37.454,34.112 L37.454,36.917 C37.454,37.3312136 37.1182136,37.667 36.704,37.667 L2.992,37.667 Z M3.742,36.167 L35.954,36.167 L35.954,34.862 L3.742,34.862 L3.742,36.167 Z M14.1149,5.1508 L14.1149,18.2938 C14.1149,18.7080136 13.7791136,19.0438 13.3649,19.0438 C12.9506864,19.0438 12.6149,18.7080136 12.6149,18.2938 L12.6149,4.4008 C12.6149,3.98658644 12.9506864,3.6508 13.3649,3.6508 L26.3689,3.6508 C26.7831136,3.6508 27.1189,3.98658644 27.1189,4.4008 L27.1189,18.2938 C27.1189,18.7080136 26.7831136,19.0438 26.3689,19.0438 C25.9546864,19.0438 25.6189,18.7080136 25.6189,18.2938 L25.6189,5.1508 L14.1149,5.1508 Z M16.4537,18.5526 C16.0394864,18.5526 15.7037,18.2168136 15.7037,17.8026 C15.7037,17.3883864 16.0394864,17.0526 16.4537,17.0526 L18.6907,17.0526 C19.1049136,17.0526 19.4407,17.3883864 19.4407,17.8026 C19.4407,18.2168136 19.1049136,18.5526 18.6907,18.5526 L16.4537,18.5526 Z" />
  </SvgIcon>
);

export default withRef(Balcony);