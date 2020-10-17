import React from 'react';
import { withRef } from '../hocs/withRef';
import SvgIcon from './SvgIcon';

const Feedback = props => (
  <SvgIcon variant="large" {...props}>
    <path
      fillRule="evenodd"
      d="M26.37 14.012c6.19.228 10 3.59 10 8.888 0 2.51-.88 4.63-2.54 6.19l1.65 3.75c.129.3.06.64-.19.86a.73.73 0 0 1-.5.19c-.13 0-.26-.03-.371-.1l-4.479-2.57c-1.29.38-2.721.58-4.261.58C19.089 31.8 15 28.39 15 22.9v-.114a14.708 14.708 0 0 1-3.57-.566l-4.479 2.57a.692.692 0 0 1-.371.1.73.73 0 0 1-.5-.19.74.74 0 0 1-.19-.86l1.65-3.75C5.88 18.53 5 16.41 5 13.9 5 8.41 9.09 5 15.68 5c6.591 0 10.681 3.41 10.69 8.9v.112zm-11.242 7.279c.704-4.324 4.278-7.026 9.732-7.272l.001-.109c0-4.63-3.431-7.4-9.181-7.4-5.75 0-9.18 2.77-9.18 7.4 0 2.25.84 4.11 2.42 5.4.26.21.351.57.21.88l-.95 2.17 2.78-1.6c.191-.1.41-.12.611-.06 1.068.35 2.267.547 3.557.59zM25.69 30.3c1.5 0 2.89-.2 4.109-.6.201-.06.42-.04.611.06l2.78 1.6-.95-2.17a.738.738 0 0 1 .21-.88c1.58-1.29 2.42-3.15 2.42-5.4 0-4.63-3.43-7.4-9.18-7.4s-9.181 2.77-9.181 7.4c0 4.63 3.431 7.39 9.181 7.39zM21.23 22a1.23 1.23 0 1 1-.001 2.46A1.23 1.23 0 0 1 21.23 22zm7.999 0a1.23 1.23 0 1 1 0 2.46 1.23 1.23 0 0 1 0-2.46zm-3.999 0c.68 0 1.229.551 1.229 1.23a1.228 1.228 0 1 1-2.459 0c0-.679.55-1.23 1.23-1.23z"
    />
  </SvgIcon>
);

export default withRef(Feedback);