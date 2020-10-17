import React from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';
import NavigationList from '../NavigationList';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  dropDown: {
    zIndex: 2500,
  },
});

class Menu extends React.Component {
  state = {
    open: false,
  };

  anchorEl;

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl && this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  handleItemClick = cb => event => {
    this.handleClose(event);
    cb();
  };

  setAnchorEl = node => (this.anchorEl = node);

  render() {
    const { classes, button, items } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        {button(this.setAnchorEl, open, this.handleToggle)}
        <Popper
          className={classes.dropDown}
          open={open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
          placement={'top'}
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps} id="menu-list-grow" style={{ transformOrigin: 'center top' }}>
              <ClickAwayListener onClickAway={this.handleClose}>
                <NavigationList inDropdown elevation={1}>
                  {items(this.handleItemClick)}
                </NavigationList>
              </ClickAwayListener>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object,
  items: PropTypes.func.isRequired,
  button: PropTypes.func.isRequired,
};

export default withStyles(styles)(Menu);
