import React from 'react';
import Button from '../Button';
import { withStyles } from '@material-ui/core/styles';
import { colorWhite } from '../../.generated/styles';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    padding: '0 1rem',
    zIndex: 1000,
    '&:hover': {
      backgroundColor: colorWhite,
    },
  },
  open: {
    backgroundColor: colorWhite,
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    border: 'none',
    boxShadow: 'none',
    '&:hover': {
      border: 'none',
    },
    opacity: 0.3,
  },
});

const MenuButton = ({ setAnchorEl, open, handleClick, classes, children, className: classNameProp, ...rest }) => (
  <Button
    {...rest}
    buttonRef={setAnchorEl}
    aria-owns={open ? 'menu-list-grow' : undefined}
    aria-haspopup="true"
    onClick={handleClick}
    className={classNames(classNameProp, classes.root, { [classes.open]: open })}
  >
    {children}
  </Button>
);

export default withStyles(styles)(MenuButton);
