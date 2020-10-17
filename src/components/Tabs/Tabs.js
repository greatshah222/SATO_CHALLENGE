import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiTabs from '@material-ui/core/Tabs';
import NewMessageDot from '../../icons/NewMessageDot';

import Tab from './Tab';

const styles = theme => ({
  icon: {
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

const Tabs = ({ classes, tabs, handleChange, defaultValue, largePadding, children }) => (
  <MuiTabs
    value={defaultValue}
    variant="scrollable"
    indicatorColor="primary"
    onChange={handleChange}
    scrollButtons="off"
  >
    {!children
      ? tabs &&
        tabs.map(tab => (
          <Tab
            key={tab.key}
            label={tab.label}
            largePadding={largePadding}
            numOfNewMessages={tab.numOfNewMessages}
            icon={
              tab.numOfNewMessages && tab.numOfNewMessages > 0 ? (
                <NewMessageDot className={classes.icon}>{tab.numOfNewMessages}</NewMessageDot>
              ) : null
            }
            disableRipple
          />
        ))
      : children}
  </MuiTabs>
);

Tabs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  classes: PropTypes.object,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  largePadding: PropTypes.bool,
  children: PropTypes.node,
};

export default withStyles(styles)(Tabs);
