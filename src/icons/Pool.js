import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Pool = props => (
  <SvgIcon {...props} variant="large">
    <path d="M10.4451,12.3779 L23.0681,12.3779 L23.0681,9.1788 C23.0681,5.87580156 25.5127553,3.1688 28.5681,3.1688 C31.6002768,3.1688 34.0309905,5.83490419 34.0676791,9.10376631 C34.0679594,9.12874266 34.0681,9.22536619 34.0681,9.25614929 C34.0681,9.53962723 34.0681,9.96484413 34.0681,10.5318 C34.0681,10.9460136 33.7323136,11.2818 33.3181,11.2818 C32.9038864,11.2818 32.5681,10.9460136 32.5681,10.5318 L32.5681,9.1788 C32.5681,6.67205582 30.7589877,4.6688 28.5681,4.6688 C26.3772123,4.6688 24.5681,6.67205582 24.5681,9.1788 L24.5681,12.3779 L37.2297,12.3779 C37.6439136,12.3779 37.9797,12.7136864 37.9797,13.1279 C37.9797,13.5421136 37.6439136,13.8779 37.2297,13.8779 L24.5681,13.8779 L24.5681,29.2368 C24.5681,29.6510136 24.2323136,29.9868 23.8181,29.9868 C23.4038864,29.9868 23.0681,29.6510136 23.0681,29.2368 L23.0681,24.8662 L10.4451,24.8662 L10.4451,29.2368 C10.4451,29.6510136 10.1093136,29.9868 9.6951,29.9868 C9.28088644,29.9868 8.9451,29.6510136 8.9451,29.2368 L8.9451,13.8779 L4.1707,13.8779 C3.75648644,13.8779 3.4207,13.5421136 3.4207,13.1279 C3.4207,12.7136864 3.75648644,12.3779 4.1707,12.3779 L8.9451,12.3779 L8.9451,9.1788 C8.9451,5.87580156 11.3897553,3.1688 14.4451,3.1688 C17.4535517,3.1688 19.8699157,5.79334586 19.9433791,9.02714695 C19.9445241,9.07755249 19.9451,9.23809202 19.9451,9.27523804 C19.9451,9.55447403 19.9451,9.97332802 19.9451,10.5318 C19.9451,10.9460136 19.6093136,11.2818 19.1951,11.2818 C18.7808864,11.2818 18.4451,10.9460136 18.4451,10.5318 C18.4451,9.98063867 18.4451,9.56726768 18.4451,9.29168701 C18.4451,9.24905801 18.4447357,9.10775924 18.4440112,9.07239523 C18.39368,6.6156062 16.6048987,4.6688 14.4451,4.6688 C12.2542123,4.6688 10.4451,6.67205582 10.4451,9.1788 L10.4451,12.3779 Z M10.4451,13.8779 L10.4451,18.0791 L23.0681,18.0791 L23.0681,13.8779 L10.4451,13.8779 Z M10.4451,19.5791 L10.4451,23.3662 L23.0681,23.3662 L23.0681,19.5791 L10.4451,19.5791 Z M2.9773,30.5879 C2.56308644,30.5879 2.2273,30.2521136 2.2273,29.8379 C2.2273,29.4236864 2.56308644,29.0879 2.9773,29.0879 C4.49121578,29.0879 5.2887592,29.3832956 6.61154593,30.1999566 C7.71832233,30.8832574 8.2707949,31.0879 9.4563,31.0879 C10.6419631,31.0879 11.1944577,30.8832029 12.301466,30.1995479 C13.6232696,29.3832418 14.4203561,29.0879 15.9333,29.0879 C17.4469849,29.0879 18.2444392,29.3831957 19.5673329,30.1996707 C20.6747512,30.8831568 21.2277113,31.0879 22.4143,31.0879 C23.6022769,31.0879 24.1559353,30.8830879 25.2649061,30.1992767 C26.5884972,29.3831267 27.3865033,29.0879 28.9013,29.0879 C30.4162981,29.0879 31.214232,29.3831577 32.5379879,30.199535 C33.646482,30.8831577 34.1997981,31.0879 35.3873,31.0879 C35.8015136,31.0879 36.1373,31.4236864 36.1373,31.8379 C36.1373,32.2521136 35.8015136,32.5879 35.3873,32.5879 C33.8723019,32.5879 33.074368,32.2926423 31.7506121,31.476265 C30.642118,30.7926423 30.0888019,30.5879 28.9013,30.5879 C27.7139439,30.5879 27.1605403,30.7926347 26.0518189,31.4762921 C24.7279772,32.2925965 23.9296981,32.5879 22.4143,32.5879 C20.9000137,32.5879 20.1022864,32.2925275 18.7791421,31.4758978 C17.6719732,30.7925657 17.1192679,30.5879 15.9333,30.5879 C14.7482577,30.5879 14.1960179,30.7925196 13.089259,31.4760205 C11.7672048,32.2924814 10.9698453,32.5879 9.4563,32.5879 C7.94298561,32.5879 7.14571523,32.2925813 5.82317907,31.4760749 C4.71615324,30.7926202 4.16342588,30.5879 2.9773,30.5879 Z M2.9773,34.7876 C2.56308644,34.7876 2.2273,34.4518136 2.2273,34.0376 C2.2273,33.6233864 2.56308644,33.2876 2.9773,33.2876 C4.49121578,33.2876 5.2887592,33.5829956 6.61154593,34.3996566 C7.71832233,35.0829574 8.2707949,35.2876 9.4563,35.2876 C10.6419631,35.2876 11.1944577,35.0829029 12.301466,34.3992479 C13.6232696,33.5829418 14.4203561,33.2876 15.9333,33.2876 C17.4469849,33.2876 18.2444392,33.5828957 19.5673329,34.3993707 C20.6747512,35.0828568 21.2277113,35.2876 22.4143,35.2876 C23.6022769,35.2876 24.1559353,35.0827879 25.2649061,34.3989767 C26.5884972,33.5828267 27.3865033,33.2876 28.9013,33.2876 C30.4162981,33.2876 31.214232,33.5828577 32.5379879,34.399235 C33.646482,35.0828577 34.1997981,35.2876 35.3873,35.2876 C35.8015136,35.2876 36.1373,35.6233864 36.1373,36.0376 C36.1373,36.4518136 35.8015136,36.7876 35.3873,36.7876 C33.8723019,36.7876 33.074368,36.4923423 31.7506121,35.675965 C30.642118,34.9923423 30.0888019,34.7876 28.9013,34.7876 C27.7139439,34.7876 27.1605403,34.9923347 26.0518189,35.6759921 C24.7279772,36.4922965 23.9296981,36.7876 22.4143,36.7876 C20.9000137,36.7876 20.1022864,36.4922275 18.7791421,35.6755978 C17.6719732,34.9922657 17.1192679,34.7876 15.9333,34.7876 C14.7482577,34.7876 14.1960179,34.9922196 13.089259,35.6757205 C11.7672048,36.4921814 10.9698453,36.7876 9.4563,36.7876 C7.94298561,36.7876 7.14571523,36.4922813 5.82317907,35.6757749 C4.71615324,34.9923202 4.16342588,34.7876 2.9773,34.7876 Z" />
  </SvgIcon>
);

export default withRef(Pool);
