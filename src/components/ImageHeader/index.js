import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles } from '@material-ui/core';
import * as tokens from '../../.generated/styles';
import LazyImage from '../LazyImage';

const styles = (theme) => {
  return createStyles({
    liftImageContainer: {
      width: '100%',

      backgroundColor: theme.palette.background.pageContent,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: 'auto',
      maxHeight: '60vh',
    },
    liftImage: {
      width: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },
    title: {
      position: 'absolute',
      width: '100%',
      paddingBottom: tokens.spacing3Xl,
      '& img': {
        width: '100%',
        height: '100%',
      },
      height: '7rem',
      [theme.breakpoints.up('sm')]: {
        height: '10rem',
      },
      [theme.breakpoints.up('lg')]: {
        height: '12rem',
      },
    },
  });
};

const ImageHeader = ({ children, classes, src, alt, ...rest }) => {
  return (
    <div className={classes.liftImageContainer}>
      {src && (
        <LazyImage
          src={src}
          alt={alt}
          className={classes.liftImage}
          {...rest}
        />
      )}
      <div className={classes.title}>{children}</div>
    </div>
  );
};

ImageHeader.propTypes = {
  classes: PropTypes.object,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  children: PropTypes.object,
};

export default withStyles(styles)(ImageHeader);
