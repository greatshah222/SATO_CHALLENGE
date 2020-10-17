import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';

import * as tokens from '../../.generated/styles';

import Paper from '../Paper';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  popper: {
    zIndex: 10000,
  },
  paper: {
    borderRadius: tokens.borderRadiusMedium,
    padding: tokens.spacingMedium,
  },
  paperNoSidePadding: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});

class SatoPopper extends React.Component {
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

  setAnchorEl = node => (this.anchorEl = node);

  render() {
    const { classes, button, items, popperId, closeOnClick, paperNoSidePadding, ...rest } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        {button(this.setAnchorEl, open, this.handleToggle, this.handleClose, popperId)}
        <Popper
          className={classes.popper}
          open={open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
          placement={'top'}
          {...rest}
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps} id={popperId} style={{ transformOrigin: 'center top' }}>
              <ClickAwayListener onClickAway={this.handleClose}>
                <Paper
                  className={classNames(classes.paper, { [classes.paperNoSidePadding]: paperNoSidePadding })}
                  onClick={closeOnClick ? this.handleClose : null}
                >
                  {this.props.children}
                </Paper>
              </ClickAwayListener>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

SatoPopper.propTypes = {
  classes: PropTypes.object,
  button: PropTypes.func.isRequired,
  popperId: PropTypes.string,
  closeOnClick: PropTypes.bool,
  paperNoSidePadding: PropTypes.bool,
};

export default withStyles(styles)(SatoPopper);
