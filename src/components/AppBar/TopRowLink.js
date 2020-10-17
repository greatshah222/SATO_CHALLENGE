import PropTypes from 'prop-types';
import React from 'react';
import { Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import * as tokens from '../../.generated/styles';
import Text from '../Text';

const styles = theme => ({
  top: {
    height: '4px',
  },
  activeLink: {
    borderBottom: `4px solid ${tokens.colorMorning}`,
    borderRadius: '0 0 4px 4px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
      cursor: 'pointer',
    },
  },
});

const TopRowLink = ({ classes, children, handler, active, route, className: classNameProp }) => (
  <div className={classNames(classes.container, classNameProp)}>
    <div className={classNames({ [classes.top]: !active, [classes.activeLink]: active })} />
    <Text component={'div'} className={classes.item} variant={'body1'}>
      {handler ? (
        <Link onClick={handler} className={classes.link}>
          {children}
        </Link>
      ) : (
        <a href={route} className={classes.link}>
          {children}
        </a>
      )}
    </Text>
  </div>
);

TopRowLink.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  handler: PropTypes.func,
  active: PropTypes.bool,
  route: PropTypes.string,
  className: PropTypes.string,
};

export default withStyles(styles)(TopRowLink);
