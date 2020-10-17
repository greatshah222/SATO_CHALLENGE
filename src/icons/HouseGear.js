import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const HouseGear = props => (
  <SvgIcon {...props} variant="large">
    <path d="M13.41,37.03 L17.56,37.03 C17.97,37.03 18.31,37.37 18.31,37.78 C18.31,38.19 17.98,38.53 17.56,38.53 L2.94,38.53 C2.53,38.53 2.19,38.19 2.19,37.78 L2.19,8.14 C2.19,8.13739341 2.19001374,8.13478964 2.19004116,8.13218877 C2.18230065,7.95252552 2.23826939,7.76982229 2.36,7.62 L7.27,1.73 C7.41,1.56 7.62,1.46 7.85,1.46 L27.47,1.46 C27.6376547,1.46 27.7936046,1.51685158 27.9193887,1.61209358 C27.9672982,1.64534645 28.0113179,1.68464859 28.05,1.73 L32.96,7.66 C33.07,7.79 33.13,7.96 33.13,8.14 L33.13,14.78 C33.13,15.19 32.79,15.53 32.38,15.53 C31.97,15.53 31.63,15.19 31.63,14.78 L31.63,8.41 L27.47,3.39 L23.32,8.41 L23.38,17.48 C23.38,17.89 23.04,18.23 22.62,18.23 C22.63,18.23 22.63,18.23 22.62,18.23 C22.21,18.23 21.87,17.9 21.87,17.48 L21.81,8.14 C21.81,7.96 21.87,7.79 21.98,7.66 L25.8715683,2.96 L8.2,2.96 L3.69,8.36430704 L3.69,37.03 L7,37.03 L7,29.2 C7,28.79 7.34,28.45 7.75,28.45 L12.66,28.45 C13.07,28.45 13.41,28.79 13.41,29.2 L13.41,37.03 Z M19.56,8.89 L6.25,8.89 C5.84,8.89 5.5,8.56 5.5,8.14 C5.5,7.72 5.84,7.39 6.25,7.39 L19.56,7.39 C19.97,7.39 20.31,7.73 20.31,8.14 C20.31,8.55 19.98,8.89 19.56,8.89 Z M27.47,15.07 C27.06,15.07 26.72,14.73 26.72,14.32 L26.72,12.26 C26.72,11.85 27.06,11.51 27.47,11.51 C27.88,11.51 28.22,11.85 28.22,12.26 L28.22,14.32 C28.22,14.73 27.88,15.07 27.47,15.07 Z M7.84,16.07 C7.43,16.07 7.09,15.73 7.09,15.32 L7.09,13.26 C7.09,12.85 7.43,12.51 7.84,12.51 C8.25,12.51 8.59,12.85 8.59,13.26 L8.59,15.32 C8.59,15.73 8.26,16.07 7.84,16.07 Z M7.84,24.23 C7.43,24.23 7.09,23.89 7.09,23.48 L7.09,21.42 C7.09,21.01 7.43,20.67 7.84,20.67 C8.25,20.67 8.59,21.01 8.59,21.42 L8.59,23.48 C8.59,23.9 8.26,24.23 7.84,24.23 Z M12.75,16.07 C12.34,16.07 12,15.73 12,15.32 L12,13.26 C12,12.85 12.34,12.51 12.75,12.51 C13.16,12.51 13.5,12.84 13.5,13.25 L13.5,15.31 C13.5,15.73 13.16,16.07 12.75,16.07 Z M12.75,24.23 C12.34,24.23 12,23.89 12,23.48 L12,21.42 C12,21.01 12.34,20.67 12.75,20.67 C13.16,20.67 13.5,21.01 13.5,21.42 L13.5,23.48 C13.5,23.9 13.16,24.23 12.75,24.23 Z M17.66,16.07 C17.25,16.07 16.91,15.73 16.91,15.32 L16.91,13.26 C16.91,12.85 17.25,12.51 17.66,12.51 C18.07,12.51 18.41,12.85 18.41,13.26 L18.41,15.32 C18.41,15.73 18.07,16.07 17.66,16.07 Z M8.5,37.03 L11.91,37.03 L11.91,29.94 L8.5,29.94 L8.5,37.03 Z M27.35,38.51 C26.15,38.51 25.15,37.53 25.12,36.33 L25.11,35.77 C25.11,35.68 25,35.5 24.92,35.45 L23.14,34.42 C23.06,34.38 22.85,34.37 22.77,34.41 L22.28,34.68 C21.23,35.25 19.88,34.87 19.28,33.83 L18.53,32.53 C17.93,31.49 18.28,30.13 19.3,29.51 L19.77,29.22 C19.84,29.17 19.95,28.98 19.95,28.9 L19.95,26.84 C19.95,26.75 19.85,26.56 19.77,26.52 L19.3,26.23 C18.27,25.6 17.93,24.24 18.53,23.21 L19.28,21.91 C19.88,20.87 21.23,20.49 22.28,21.07 L22.77,21.34 C22.85,21.38 23.07,21.38 23.14,21.34 L24.92,20.31 C25,20.27 25.11,20.08 25.11,19.99 L25.12,19.44 C25.15,18.24 26.15,17.26 27.35,17.26 L28.86,17.26 C30.06,17.26 31.06,18.24 31.09,19.44 L31.1,20 C31.1,20.09 31.21,20.27 31.29,20.32 L33.07,21.35 C33.15,21.4 33.36,21.4 33.44,21.35 L33.93,21.08 C34.99,20.51 36.33,20.89 36.93,21.93 L37.68,23.24 C38.28,24.28 37.93,25.64 36.91,26.26 L36.44,26.55 C36.36,26.6 36.26,26.78 36.26,26.87 L36.26,28.93 C36.26,29.02 36.36,29.21 36.44,29.25 L36.91,29.54 C37.93,30.17 38.28,31.52 37.68,32.56 L36.93,33.86 C36.33,34.9 34.98,35.28 33.92,34.7 L33.43,34.43 C33.35,34.39 33.13,34.39 33.06,34.43 L31.28,35.46 C31.2,35.5 31.09,35.69 31.09,35.78 L31.07,36.34 C31.04,37.54 30.04,38.52 28.84,38.52 L27.35,38.51 Z M22.93,32.89 C23.27,32.89 23.6,32.97 23.87,33.13 L25.65,34.16 C26.18,34.47 26.57,35.13 26.59,35.74 L26.6,36.3 C26.61,36.69 26.94,37.02 27.33,37.02 L28.84,37.02 C29.24,37.02 29.56,36.7 29.58,36.3 L29.59,35.74 C29.61,35.13 30,34.47 30.53,34.16 L32.31,33.13 C32.84,32.83 33.61,32.82 34.15,33.11 L34.64,33.38 C34.99,33.57 35.43,33.44 35.63,33.1 L36.38,31.8 C36.58,31.46 36.46,31.01 36.12,30.8 L35.65,30.51 C35.13,30.19 34.75,29.52 34.75,28.91 L34.75,26.85 C34.75,26.24 35.13,25.56 35.65,25.25 L36.12,24.96 C36.46,24.75 36.57,24.31 36.38,23.96 L35.63,22.66 C35.43,22.32 34.99,22.19 34.64,22.38 L34.15,22.65 C33.61,22.94 32.84,22.93 32.31,22.63 L30.53,21.6 C30,21.3 29.61,20.63 29.59,20.02 L29.58,19.46 C29.57,19.07 29.24,18.75 28.85,18.75 L27.34,18.75 C26.94,18.75 26.62,19.07 26.6,19.47 L26.59,20.03 C26.57,20.64 26.18,21.3 25.65,21.61 L23.87,22.64 C23.34,22.95 22.57,22.95 22.03,22.66 L21.54,22.39 C21.19,22.2 20.75,22.32 20.55,22.67 L19.8,23.97 C19.6,24.31 19.72,24.76 20.06,24.97 L20.53,25.26 C21.05,25.58 21.43,26.25 21.43,26.86 L21.43,28.92 C21.43,29.53 21.05,30.2 20.53,30.52 L20.06,30.81 C19.72,31.02 19.61,31.46 19.8,31.81 L20.55,33.11 C20.75,33.45 21.19,33.58 21.54,33.39 L22.03,33.12 C22.3,32.96 22.62,32.89 22.93,32.89 Z M28.1,31.33 C26.19,31.33 24.64,29.78 24.64,27.87 C24.64,25.96 26.19,24.41 28.1,24.41 C30.01,24.41 31.56,25.96 31.56,27.87 C31.56,29.78 30.01,31.33 28.1,31.33 Z M28.1,25.91 C27.02,25.91 26.14,26.79 26.14,27.87 C26.14,28.95 27.02,29.83 28.1,29.83 C29.18,29.83 30.06,28.95 30.06,27.87 C30.06,26.79 29.18,25.91 28.1,25.91 Z" />
  </SvgIcon>
);

export default withRef(HouseGear);