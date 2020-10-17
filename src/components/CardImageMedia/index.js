import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

const aspectCommon = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  transform: 'translateZ(0)',
};

const styles = theme => ({
  aspect169: {
    ...aspectCommon,
    paddingBottom: '56.25%', //aspect ratio 16/9
  },
  aspect31: {
    ...aspectCommon,
    paddingBottom: '33.33%', //aspect ratio 3/1
  },
  aspect43: {
    ...aspectCommon,
    paddingBottom: '75%', //aspect ratio 4/3
  },
  aspect11: {
    ...aspectCommon,
    paddingBottom: '100%', //aspect ratio 1/1
  },
  picture: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    position: 'absolute',
    width: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& img': {
      width: '100%',
      height: '100%',
    },
    height: '7rem',
    [theme.breakpoints.up('sm')]: {
      height: '10rem',
    },
    [theme.breakpoints.up('md')]: {
      height: '7rem',
    },
  },
  bigTitle: {
    [theme.breakpoints.up('sm')]: {
      height: '10rem',
    },
    [theme.breakpoints.up('lg')]: {
      height: '12rem',
    },
  },
});

const getAspectClass = (classes, aspectRatio) => {
  switch (aspectRatio) {
    case '16:9':
      return classes.aspect169;
    case '4:3':
      return classes.aspect43;
    case '3:1':
      return classes.aspect31;
    case '1:1':
      return classes.aspect11;
  }
};

const CardImageMedia = ({ children, classes, url, aspectRatio, pictureClassName }) => {
  const aspectClass = getAspectClass(classes, aspectRatio);
  return (
    <div className={aspectClass}>
      <div className={classNames(classes.picture, pictureClassName)} style={{ backgroundImage: `url(${url})` }} />
      <div className={classNames(classes.title, { [classes.bigTitle]: aspectRatio === '16:9' })}>{children}</div>
    </div>
  );
};

CardImageMedia.propTypes = {
  url: PropTypes.string.isRequired,
  aspectRatio: PropTypes.oneOf(['16:9', '4:3', '3:1', '1:1']),
  classes: PropTypes.object,
  pictureClassName: PropTypes.string,
  children: PropTypes.object,
};

CardImageMedia.defaultProps = {
  aspectRatio: '16:9',
};

export default withStyles(styles)(CardImageMedia);
