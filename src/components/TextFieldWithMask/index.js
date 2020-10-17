import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import NumberFormat from 'react-number-format';
import TextField from '../TextField';
import * as tokens from '../../.generated/styles';

const styles = theme => ({
  input: {
    fontFamily: 'Telefon Web Black',
    fontSize: '24px',
  },
});

const TextFieldWithMask = ({ InputProps, mask, format, classes, verificationCode, ...rest }) => {
  const maskedInput = props => (
    <NumberFormat
      getInputRef={props.inputRef}
      onValueChange={values => {
        props.onChange({
          target: {
            value: values.value,
          },
        });
      }}
      mask={mask}
      format={format}
      allowEmptyFormatting
      style={verificationCode && { letterSpacing: tokens.spacingMedium, textAlign: 'center' }}
      {...props}
    />
  );

  return (
    <TextField
      InputProps={{
        ...InputProps,
        inputComponent: maskedInput,
        className: classNames({ [classes.input]: verificationCode }),
      }}
      smallPadding={verificationCode}
      {...rest}
    />
  );
};

TextFieldWithMask.muiName = 'TextFieldWithMask';
TextFieldWithMask.propTypes = {
  ...TextField.propTypes,
  mask: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  verificationCode: PropTypes.bool,
};

export default withStyles(styles)(TextFieldWithMask);
