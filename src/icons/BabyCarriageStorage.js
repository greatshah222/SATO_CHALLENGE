import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const BabyCarriageStorage = props => (
  <SvgIcon {...props} variant="large">
    <path d="M14.8465849,36.4014 C14.2188127,37.3477961 13.1439926,37.9718 11.9231,37.9718 C9.98688644,37.9718 8.4161,36.4010136 8.4161,34.4648 C8.4161,32.5286929 9.98677982,30.9588 11.9231,30.9588 C13.1283513,30.9588 14.1911821,31.566505 14.8221619,32.4922 L23.8420382,32.4922 C24.4734458,31.566585 25.536694,30.9588 26.7415,30.9588 C28.6784103,30.9588 30.2475,32.5282831 30.2475,34.4648 C30.2475,36.4014237 28.6783039,37.9718 26.7415,37.9718 C25.5210572,37.9718 24.4458019,37.3477125 23.8175965,36.4014 L14.8465849,36.4014 Z M15.4021981,34.9014 L23.261438,34.9014 C23.2436582,34.758355 23.2345,34.6126428 23.2345,34.4648 C23.2345,34.3045296 23.2452631,34.1467687 23.2661056,33.9922 L15.3975365,33.9922 C15.4183518,34.1467647 15.4291,34.3045253 15.4291,34.4648 C15.4291,34.6126465 15.4199545,34.7583584 15.4021981,34.9014 Z M17.9491628,27.6549 L18.8447806,28.1475729 L19.7401262,27.6549 L17.9491628,27.6549 Z M14.8370079,27.6549 L11.2174,27.6549 C9.7709696,27.6549 8.5904,26.4738967 8.5904,25.0269 L8.5904,20.4849 C8.5904,20.3697295 8.59930358,20.2585996 8.61215783,20.1676416 C9.08450474,14.6748604 13.5907174,10.3533312 19.1190425,10.1145983 C19.5455561,10.0961799 19.9014,10.4369889 19.9014,10.8639 L19.9014,19.4819 L28.5434,19.4819 C28.9161575,19.4819 29.2323441,19.7556604 29.2856822,20.1245821 C29.3036952,20.2491722 29.3134,20.3659761 29.3134,20.4849 L29.3134,25.0269 C29.3134,26.4738967 28.1328304,27.6549 26.6864,27.6549 L22.8293528,27.6549 C22.7965863,27.6809629 22.7611869,27.7046257 22.7232703,27.7254898 L20.4007314,29.0034902 L23.0816859,30.4782638 C23.4446122,30.6779069 23.5769793,31.1339596 23.3773362,31.4968859 C23.1776931,31.8598122 22.7216404,31.9921793 22.3587141,31.7925362 L18.8448906,29.8596073 L15.6102703,31.6394898 C15.2473696,31.8391795 14.7913,31.7068709 14.5916102,31.3439703 C14.3919205,30.9810696 14.5242291,30.525 14.8871297,30.3253102 L17.2889398,29.00369 L14.8370079,27.6549 Z M34.599,17.2534 L32.4222588,17.2534 L30.7504962,19.0963087 C30.4721951,19.4031008 29.9978834,19.4261973 29.6910913,19.1478962 C29.3842992,18.8695951 29.3612027,18.3952834 29.6395038,18.0884913 L31.5345038,15.9994913 C31.6766659,15.8427754 31.878411,15.7534 32.09,15.7534 L34.599,15.7534 C35.0132136,15.7534 35.349,16.0891864 35.349,16.5034 C35.349,16.9176136 35.0132136,17.2534 34.599,17.2534 Z M27.8134,25.0269 L27.8134,20.9819 L19.1514,20.9819 C18.7371864,20.9819 18.4014,20.6461136 18.4014,20.2319 L18.4014,11.6792002 C13.9894546,12.2349609 10.4917016,15.8179059 10.1028989,20.330436 C10.094285,20.3954323 10.0904,20.4439224 10.0904,20.4849 L10.0904,25.0269 C10.0904,25.6455929 10.5995201,26.1549 11.2174,26.1549 L26.6864,26.1549 C27.3042799,26.1549 27.8134,25.6455929 27.8134,25.0269 Z M13.9291,34.4648 C13.9291,33.356626 13.031499,32.4588 11.9231,32.4588 C10.8150387,32.4588 9.9161,33.3572884 9.9161,34.4648 C9.9161,35.5725864 10.8153136,36.4718 11.9231,36.4718 C13.0312242,36.4718 13.9291,35.573249 13.9291,34.4648 Z M12.6449,34.5371 C12.6449,34.9362464 12.3210406,35.2591 11.9229,35.2591 C11.5232472,35.2591 11.2019,34.935738 11.2019,34.5371 C11.2019,34.1394607 11.5232387,33.8151 11.9229,33.8151 C12.3210424,33.8151 12.6449,34.1389576 12.6449,34.5371 Z M11.6449,34.5371 C11.6449,34.6912424 11.7687576,34.8151 11.9229,34.8151 C12.0776296,34.8151 12.2019,34.6896609 12.2019,34.5371 C12.2019,34.3848475 12.0769359,34.2591 11.9229,34.2591 C11.769451,34.2591 11.6449,34.3832642 11.6449,34.5371 Z M28.7475,34.4648 C28.7475,33.356626 27.849899,32.4588 26.7415,32.4588 C25.6334387,32.4588 24.7345,33.3572884 24.7345,34.4648 C24.7345,35.5725864 25.6337136,36.4718 26.7415,36.4718 C27.8496242,36.4718 28.7475,35.573249 28.7475,34.4648 Z M27.4633,34.5371 C27.4633,34.9362464 27.1394406,35.2591 26.7413,35.2591 C26.3416472,35.2591 26.0203,34.935738 26.0203,34.5371 C26.0203,34.1394607 26.3416387,33.8151 26.7413,33.8151 C27.1394424,33.8151 27.4633,34.1389576 27.4633,34.5371 Z M26.4633,34.5371 C26.4633,34.6912424 26.5871576,34.8151 26.7413,34.8151 C26.8960296,34.8151 27.0203,34.6896609 27.0203,34.5371 C27.0203,34.3848475 26.8953359,34.2591 26.7413,34.2591 C26.587851,34.2591 26.4633,34.3832642 26.4633,34.5371 Z M16.3647,19.4761 C16.7789136,19.4761 17.1147,19.8118864 17.1147,20.2261 C17.1147,20.6403136 16.7789136,20.9761 16.3647,20.9761 L11.9237,20.9761 C11.5094864,20.9761 11.1737,20.6403136 11.1737,20.2261 C11.1737,19.8118864 11.5094864,19.4761 11.9237,19.4761 L16.3647,19.4761 Z M19.6320123,2.68335098 L2.57468868,14.6895065 C2.23596884,14.9279216 1.76810855,14.8466085 1.52969348,14.5078887 C1.29127841,14.1691688 1.37259149,13.7013086 1.71131132,13.4628935 L19.2003113,1.15289348 C19.4592419,0.970639767 19.8047367,0.970635118 20.0636722,1.15288186 L37.5536722,13.4628819 C37.8923984,13.7012878 37.9737241,14.1691459 37.7353181,14.5078722 C37.4969122,14.8465984 37.0290541,14.9279241 36.6903278,14.6895181 L19.6320123,2.68335098 Z M12.1449,34.5371 C12.1449,34.6601 12.0449,34.7591 11.9229,34.7591 C11.7999,34.7591 11.7019,34.6601 11.7019,34.5371 C11.7019,34.4151 11.7999,34.3151 11.9229,34.3151 C12.0449,34.3151 12.1449,34.4151 12.1449,34.5371 Z M26.9633,34.5371 C26.9633,34.6601 26.8633,34.7591 26.7413,34.7591 C26.6183,34.7591 26.5203,34.6601 26.5203,34.5371 C26.5203,34.4151 26.6183,34.3151 26.7413,34.3151 C26.8633,34.3151 26.9633,34.4151 26.9633,34.5371 Z" />
  </SvgIcon>
);

export default withRef(BabyCarriageStorage);