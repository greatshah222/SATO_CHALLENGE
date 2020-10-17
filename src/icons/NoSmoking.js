import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const NoSmoking = props => (
  <SvgIcon {...props} variant="large">
    <path d="M26.44,21.6400502 L22.9826348,21.5911746 L24.8039045,23.4124443 C24.825417,23.4109392 24.8471738,23.4103441 24.869136,23.4106966 L26.44,23.4359091 L26.44,21.6400502 Z M18.9138392,23.3019994 L17.0460549,21.4342151 C16.9622109,21.4648419 16.8714428,21.4809104 16.776864,21.479405 L15.1628,21.4537145 L15.1628,23.2471536 L18.9138392,23.3019994 Z M20.4362596,24.8244198 L7.98883505,24.6424198 C7.57398108,24.6363541 7.24287241,24.2946209 7.24979776,23.8797823 L7.30590783,20.5777823 C7.31292647,20.1639335 7.65388013,19.8340078 8.06773597,19.840595 L15.5718755,19.9600357 L7.33586876,11.7240289 C5.69131255,14.1961101 4.796,17.0812599 4.796,20.0975 C4.796,28.4811389 11.617066,35.3025 20,35.3025 C23.0159377,35.3025 25.9019139,34.4065508 28.373576,32.7617362 L20.4362596,24.8244198 Z M20.7361948,21.466055 C20.6198531,21.3994979 20.5231695,21.3027134 20.456698,21.1865581 L8.41786991,9.14773009 C8.12107294,8.85093312 8.12561229,8.36834911 8.4279398,8.07718771 C11.526508,5.0930614 15.6338398,3.3934 20.0002,3.3934 C29.2115894,3.3934 36.7052,10.8863622 36.7052,20.0974 C36.7052,24.4632524 35.0049597,28.5706548 32.0204123,31.6696602 C31.7292509,31.9719877 31.2466669,31.9765271 30.9498699,31.6797301 L20.7361952,21.4660553 Z M21.4609737,20.0695135 L30.0317014,20.1906749 C30.4466116,20.1965404 30.7779067,20.5381966 30.770996,20.9530907 L30.715996,24.2550907 C30.7091005,24.6690693 30.3680466,24.9991479 29.954064,24.9925034 L26.3257284,24.9342682 L31.4568333,30.0653731 C33.8538268,27.3178728 35.2052,23.8110668 35.2052,20.0974 C35.2052,11.7148184 28.3831913,4.8934 20.0002,4.8934 C16.2860419,4.8934 12.7793203,6.2442713 10.0322342,8.64077402 L21.4609737,20.0695135 Z M13.6628,23.2252213 L13.6628,21.4298396 L8.79298768,21.3523285 L8.76243966,23.1535708 L13.6628,23.2252213 Z M19.9997,39.7041 C9.18848644,39.7041 0.3937,30.9093136 0.3937,20.0981 C0.3937,9.28604743 9.18832546,0.4911 19.9997,0.4911 C30.8112526,0.4911 39.6067,9.28622544 39.6067,20.0981 C39.6067,30.9091356 30.8110916,39.7041 19.9997,39.7041 Z M19.9997,38.2041 C29.982689,38.2041 38.1067,30.0806838 38.1067,20.0981 C38.1067,10.1146649 29.9828377,1.9911 19.9997,1.9911 C10.0167649,1.9911 1.8937,10.1144623 1.8937,20.0981 C1.8937,30.0808864 10.0169136,38.2041 19.9997,38.2041 Z M28.7953615,17.5683845 C29.0992923,17.8498076 29.1175385,18.3243306 28.8361155,18.6282615 C28.5546924,18.9321923 28.0801694,18.9504385 27.7762385,18.6690155 C27.6368895,18.539986 27.4503797,18.331001 27.2651909,18.0514357 C26.6264392,17.0871611 26.4941999,15.9941044 27.2628866,14.9850039 C27.5103057,14.6602022 27.843945,14.36349 28.2652921,14.0944964 C29.0148731,13.6160716 29.2953905,13.2381233 29.2983496,12.9811983 C29.3001678,12.8233342 29.1700219,12.6201327 28.9099973,12.4080124 C28.7197714,12.2528318 28.5237973,12.1408513 28.4124688,12.09084 C28.0346287,11.9211057 27.8659257,11.4772089 28.03566,11.0993688 C28.2053943,10.7215287 28.6492911,10.5528257 29.0271312,10.72256 C29.2479455,10.8217548 29.5501855,10.9944562 29.8581737,11.2457037 C30.4369229,11.7178298 30.8063565,12.2946402 30.7982501,12.9984733 C30.7884355,13.8506269 30.2060561,14.6352816 29.0723785,15.3588585 C28.7931292,15.537135 28.5909966,15.7168957 28.4561207,15.8939552 C28.1410399,16.3075804 28.1928257,16.7356289 28.5157138,17.2230683 C28.6270358,17.3911226 28.7370366,17.514379 28.7953615,17.5683845 Z M6.63667566,10.1149328 C6.91039008,9.74943142 7.44444402,9.71128384 7.76733009,10.0341699 L30.0633301,32.3301699 C30.3861777,32.6530175 30.3480838,33.1869957 29.9826754,33.4607433 C27.1057252,35.6160252 23.6382127,36.8025 20,36.8025 C10.7886243,36.8025 3.296,29.3095515 3.296,20.0975 C3.296,16.4590398 4.48165456,12.9926151 6.63667566,10.1149328 Z" />
  </SvgIcon>
);

export default withRef(NoSmoking);
