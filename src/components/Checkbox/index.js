import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import MuiCheckbox from '@material-ui/core/Checkbox';
import MuiFormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '../FormHelperText';

import CheckboxChecked from '../../icons/CheckboxChecked';
import CheckboxUnchecked from '../../icons/CheckboxUnchecked';

import * as designTokens from '../../.generated/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '24px',
    height: '24px',
    color: theme.palette.primary.main,
    padding: 0,
    paddingRight: designTokens.spacingSmall,
    background: 'transparent',
    '&$checked': {
      color: theme.palette.primary.main,
    },
  },
  checked: {},
  labelRoot: {
    marginLeft: 0,
  },
  label: {
    fontSize: designTokens.fontSize3,
    fontFamily: designTokens.fontLato,
  },
}));

const Checkbox = ({ label, helperText, helperTextClass, error, ...checkboxProps }) => {
  const classes = useStyles();
  return (
    <FormControl>
      <MuiFormControlLabel
        classes={{ root: classes.labelRoot, label: classes.label }}
        control={
          <MuiCheckbox
            classes={{
              root: classNames(classes.root, { [classes.error]: error }),
              checked: classes.checked,
            }}
            icon={<CheckboxUnchecked color={error ? 'error' : 'primary'} />}
            checkedIcon={<CheckboxChecked color={error ? 'error' : 'primary'} />}
            disableRipple
            {...checkboxProps}
          />
        }
        label={label}
      />
      {helperText && (
        <FormHelperText helperTextClass={helperTextClass} error={error}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

Checkbox.muiName = 'Checkbox';
Checkbox.propTypes = MuiCheckbox.propTypes;

export default Checkbox;
