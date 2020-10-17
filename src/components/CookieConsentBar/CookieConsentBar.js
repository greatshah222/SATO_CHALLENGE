import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import LazyImage from '../LazyImage';
import Text from '../Text';
import IconButton from '../IconButton';
import Grid from '../Grid';
import CloseSmall from '../../icons/CloseSmall';
import CookieImage from '../../../static/cookie-consent.svg';
import * as designTokens from '../../.generated/styles';

const styles = theme => ({
  container: {
    padding: `${designTokens.spacingMedium} ${designTokens.spacingXl}`,
    [theme.breakpoints.down('sm')]: {
      padding: designTokens.spacingMedium,
    },
    backgroundColor: designTokens.colorBlackLight,
    position: 'relative',
    // IE11 hack
    '@media all and (-ms-high-contrast:none)': {
      zIndex: 1,
    },
  },
  notVisible: {
    display: 'none',
  },
  icon: {
    paddingBottom: '80px', // Height of cookie-consent.svg
    [theme.breakpoints.up('xs')]: {
      paddingBottom: '0',
    },
  },
  image: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    [theme.breakpoints.up('xs')]: {
      right: '10%',
    },
  },
});

const CookieConsentBar = ({ classes, children, notVisible, onClose, theme }) => (
  <Grid
    container
    className={classNames(classes.container, { [classes.notVisible]: notVisible })}
    justify="space-between"
    alignItems={useMediaQuery(theme.breakpoints.up('sm')) ? 'center' : 'flex-start'}
  >
    <Grid item xs={9} className={classes.textContainer}>
      <Text variant="body1">{children}</Text>
    </Grid>
    <Grid item>
      <LazyImage className={classes.image} src={CookieImage} />
      <IconButton variant="noBG" size="xSmall" onClick={onClose} className={classes.icon}>
        <CloseSmall />
      </IconButton>
    </Grid>
  </Grid>
);

CookieConsentBar.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  notVisible: PropTypes.bool,
  onClose: PropTypes.func,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(CookieConsentBar);
