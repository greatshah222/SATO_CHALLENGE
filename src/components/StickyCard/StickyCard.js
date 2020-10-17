import PropTypes from 'prop-types';
import React from 'react';
import Sticky from 'react-stickynode';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import CallToActionArea from '../CallToActionArea';
import * as designTokens from '../../.generated/styles';

const styles = theme => ({
  animContainer: {
    transition: 'padding .5s, margin .5s, border-radius .5s, height 5s',
  },
  animContainerNormal: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: designTokens.spacingMedium,
      marginRight: designTokens.spacingMedium,
    },
  },
  animContainerSticky: {
    padding: `${designTokens.spacingMedium} calc(10vw + ${designTokens.spacingXl})`,
    borderRadius: '0',
    boxShadow: designTokens.shadowHigh,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      margin: 0,
    },
  },
  content: {
    transition: 'margin .5s',
  },
});

const StickyCard = ({ classes, innerZ, cardProps, render, ...props }) => (
  <Sticky innerZ={innerZ} {...props}>
    {status => (
      <CallToActionArea
        {...cardProps}
        className={classNames(
          classes.animContainer,
          status.status === Sticky.STATUS_FIXED ? classes.animContainerSticky : classes.animContainerNormal
        )}
      >
        {render(status.status === Sticky.STATUS_FIXED)}
      </CallToActionArea>
    )}
  </Sticky>
);

StickyCard.propTypes = {
  ...Sticky.propTypes,
  children: PropTypes.node,
  classes: PropTypes.object,
  innerZ: PropTypes.number,
  cardProps: PropTypes.object,
  render: PropTypes.func,
};

StickyCard.defaultProps = {
  innerZ: 2000,
};
export default withStyles(styles)(StickyCard);
