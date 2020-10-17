import React from 'react';
import {
  MuiPickersUtilsProvider,
  DatePicker as MuiDatepicker,
  TimePicker as MuiTimePicker,
} from '@material-ui/pickers';
import TextField from '../TextField';
import IconButton from '../IconButton';
import CalendarSmall from '../../icons/CalendarSmall';
import ClockSmall from '../../icons/ClockSmall';
import PropTypes from 'prop-types';
import utils from '@date-io/moment';

import { withStyles } from '@material-ui/core/styles';
import { withRef } from '../../hocs/withRef';
import * as designTokens from '../../.generated/styles';

const styles = theme => ({
  iconButton: {
    color: designTokens.textBlack,
  },
});

const Datepicker = ({
  inline,
  disabled,
  classes,
  value,
  handleDateChange,
  label,
  error,
  helperText,
  forwardedRef,
  className,
  time,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const renderInput = props => {
    return (
      <TextField
        variant="outlined"
        type="text"
        value={props.value}
        label={props.label}
        disabled={props.disabled}
        onChange={props.onChange}
        error={error}
        helperText={helperText}
        className={className}
        InputProps={{
          endAdornment: (
            <IconButton onClick={props.onClick} disabled={props.disabled} className={classes.iconButton}>
              {time ? <ClockSmall /> : <CalendarSmall />}
            </IconButton>
          ),
        }}
        onClick={e => {
          props.onClick();
          setAnchorEl(e.currentTarget);
        }}
        {...props.inputProps}
      />
    );
  };

  const Picker = time ? MuiTimePicker : MuiDatepicker;

  return (
    <Picker
      ref={forwardedRef}
      label={label}
      value={value}
      onChange={handleDateChange}
      disabled={disabled}
      TextFieldComponent={renderInput}
      format={time ? 'HH:mm' : 'DD/MM/YYYY'}
      ampm={false}
      variant={'dialog'}
      PopoverProps={{
        anchorEl: anchorEl,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      }}
      {...props}
    />
  );
};

Datepicker.defaultProps = {
  disabled: false,
  inline: false,
};

Datepicker.propTypes = {
  value: PropTypes.object,
  handleDateChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  classes: PropTypes.object,
  label: PropTypes.string,
};

export default withStyles(styles)(withRef(Datepicker));

export const PickerUtils = ({ children, ...props }) => {
  return (
    <MuiPickersUtilsProvider utils={utils} {...props}>
      {children}
    </MuiPickersUtilsProvider>
  );
};
