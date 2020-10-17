import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Text from '../Text';
import * as tokens from '../../.generated/styles';

const styles = theme => ({
  container: {
    background: theme.gradient.background,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: `${tokens.spacingXl} ${tokens.spacingMedium} ${tokens.spacingGargantual} ${tokens.spacingMedium}`,
    [theme.breakpoints.up('md')]: {
      padding: `${tokens.spacing3Xl} 10vw 6rem 10vw`,
    },
  },
  titleOnlyBottomPadding: {
    paddingBottom: '4.5rem',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '5.5rem',
    },
  },
  title: {
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
  icon: {
    width: tokens.sizingIconLarge,
    height: tokens.sizingIconLarge,
    color: tokens.colorWhite,
    margin: `0 auto ${tokens.spacingSmall} auto`,
    [theme.breakpoints.up('md')]: {
      width: tokens.sizingIconExtraLarge,
      height: tokens.sizingIconExtraLarge,
    },
  },
  buttonContainer: {
    margin: 'auto',
    marginTop: tokens.spacingMedium,
  },
});

const SmallHeader = ({ classes, title, subtitle, icon, button, className }) => (
  <div
    className={classNames(
      classes.container,
      { [classes.titleOnlyBottomPadding]: !icon && !subtitle && !button },
      className
    )}
  >
    {icon ? React.cloneElement(icon, { className: classes.icon }) : null}
    <Text variant="h3" className={classes.title}>
      {title}
    </Text>
    {subtitle ? (
      <Text variant="softyXL" className={classes.title}>
        {subtitle}
      </Text>
    ) : null}
    {button ? <div className={classes.buttonContainer}>{button}</div> : null}
  </div>
);

SmallHeader.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.element,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  button: PropTypes.element,
};

export default withStyles(styles)(SmallHeader);
