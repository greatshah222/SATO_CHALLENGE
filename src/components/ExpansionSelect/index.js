import React from 'react';

import ChevronDownIcon from '../../icons/ChevronDown';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary';
import PropTypes from 'prop-types';
import Text from '../Text';
import Chip from '../Chip/Chip';

const useStyles = makeStyles(theme => ({
  select: {
    '& :focus, & :active': {
      backgroundColor: 'transparent',
    },
  },
  chevronDownIcon: {
    right: '7px',
    color: 'rgba(0, 0, 0, 0.54)',
    position: 'absolute',
    pointerEvents: 'none',
    backgroundColor: 'transparent',
  },
  content: {
    justifyContent: 'space-between',
  },
}));

const ExpansionSelect = ({ title, selectedCount, children, ...rest }) => {
  const classes = useStyles();
  return (
    <ExpansionPanel {...rest}>
      <ExpansionPanelSummary
        expandIcon={<ChevronDownIcon />}
        classes={{ expandIcon: classes.chevronDownIcon, content: classes.content }}
      >
        <Text>{title}</Text>
        {selectedCount ? (
          <Chip style={{ paddingRight: 0, marginRight: 32 }} variant={'display'} label={selectedCount} />
        ) : (
          <React.Fragment />
        )}
      </ExpansionPanelSummary>
      {children}
    </ExpansionPanel>
  );
};

ExpansionSelect.propTypes = {
  title: PropTypes.string,
  selectedCount: PropTypes.number,
};

export default ExpansionSelect;
