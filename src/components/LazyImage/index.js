import React from 'react';
import PropTypes from 'prop-types';

const LazyImage = ({ ...props }) => <img {...props} loading="lazy" />;

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LazyImage;
