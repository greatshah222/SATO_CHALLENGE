import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MuiRadio from '@material-ui/core/Radio';
import MuiFormControlLabel from '@material-ui/core/FormControlLabel';

import RadioButtonChecked from '../../icons/RadioButtonChecked';
import RadioButtonUnchecked from '../../icons/RadioButtonUnChecked';

import * as designTokens from '../../.generated/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '24px',
    height: '24px',
    padding: 0,
    paddingRight: designTokens.spacingSmall,
    color: theme.palette.primary.main,
    background: 'transparent',
    '&$checked': {
      color: theme.palette.primary.main,
    },
  },
  checked: {},
  labelRoot: {
    marginLeft: 0,
    '&:not(:last-child)': {
      marginBottom: designTokens.spacingMedium,
    },
  },
  label: {
    fontSize: designTokens.fontSize3,
    fontFamily: designTokens.fontLato,
  },
}));

const Radio = ({ label, small, ...rest }) => {
  const classes = useStyles();
  return (
    <MuiFormControlLabel
      classes={{ root: classes.labelRoot, label: classes.label }}
      control={
        <MuiRadio
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
          checkedIcon={<RadioButtonChecked color="primary" />}
          icon={<RadioButtonUnchecked color="primary" />}
          disableRipple
          {...rest}
        />
      }
      label={label}
    />
  );
};

Radio.propTypes = {
  label: PropTypes.string,
  classes: PropTypes.object,
  error: PropTypes.bool,
};

export default Radio;
