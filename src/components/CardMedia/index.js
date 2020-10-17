import React from 'react';
import MuiCardMedia from '@material-ui/core/CardMedia';

const CardMedia = props => <MuiCardMedia {...props} />;

CardMedia.muiName = 'CardMedia';
CardMedia.propTypes = MuiCardMedia.propTypes;

export default CardMedia;
