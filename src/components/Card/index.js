import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import MuiCard from '@material-ui/core/Card';
import * as designTokens from '../../.generated/styles';

const square = {
  borderRadius: '0',
};

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: designTokens.borderRadiusMedium,
    boxShadow: 'none',
  },
  square: {
    ...square,
  },
  smallCard: {
    borderRadius: designTokens.borderRadiusLow,
    [theme.breakpoints.down('xs')]: {
      ...square,
    },
  },
  mouseEvents: {
    '&:hover': {
      boxShadow: designTokens.shadowMedium,
    },
    '&:active': {
      boxShadow: designTokens.shadowLow,
    },
    '&:focus': {
      boxShadow: `0 0 0 2px ${theme.palette.background.componentUltraDark}`,
      outline: 'none',
    },
  },
  fullHeight: {
    height: '100%',
  },
}));

const Card = ({ className: classNameProp, children, square, smallCard, mouseEvents, fullHeight, ...rest }) => {
  const classes = useStyles();
  return (
    <MuiCard
      classes={{
        root: classNames(classes.root, {
          [classes.square]: square,
          [classes.smallCard]: smallCard,
          [classes.mouseEvents]: mouseEvents,
          [classes.fullHeight]: fullHeight,
        }),
      }}
      className={classNameProp}
      {...rest}
    >
      {children}
    </MuiCard>
  );
};

Card.muiName = 'Card';
Card.propTypes = MuiCard.propTypes;

export default Card;
