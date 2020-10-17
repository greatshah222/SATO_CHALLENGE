import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '../Paper';

import * as designTokens from '../../.generated/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: designTokens.borderRadiusMedium,
    padding: designTokens.spacingXl,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: designTokens.spacingMedium,
      paddingRight: designTokens.spacingMedium,
      marginLeft: designTokens.spacingMedium,
      marginRight: designTokens.spacingMedium,
    },
  },
  fullWidthMobile: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  biggerPadding: {
    padding: designTokens.spacing5Xl,
    [theme.breakpoints.down('xs')]: {
      padding: designTokens.spacingLarge,
    },
  },
  noBorderRadiusOnMobile: {
    [theme.breakpoints.down('xs')]: {
      borderRadius: 0,
    },
  },
}));

const CallToActionArea = ({
  contentFullWidthMobile,
  biggerPadding,
  elevation,
  noBorderRadiusOnMobile,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Paper
      elevation={elevation}
      classes={{
        root: classNames(classes.root, {
          [classes.fullWidthMobile]: contentFullWidthMobile,
          [classes.biggerPadding]: biggerPadding,
          [classes.noBorderRadiusOnMobile]: noBorderRadiusOnMobile,
        }),
      }}
      {...props}
    />
  );
};

CallToActionArea.defaultProps = {
  elevation: 3,
};

CallToActionArea.propTypes = {
  contentFullWidthMobile: PropTypes.bool,
  biggerPadding: PropTypes.bool,
  elevation: PropTypes.number,
  noBorderRadiusOnMobile: PropTypes.bool,
};

export default CallToActionArea;
