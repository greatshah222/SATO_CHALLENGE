import React from 'react';
import propTypes from 'prop-types';
import Button from '../Button';
import Text from '../Text';
import { createStyles, withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = createStyles({
  textButton: { padding: 0, minWidth: 'auto' },
  textButtonText: { textTransform: 'initial' },
});

const TextButton = ({ onClick, bold, classes, label, color, align, className, ...rest }) => (
  <Button onClick={onClick} {...rest} className={classNames(className, classes.textButton)}>
    <Text bold={bold} className={classes.textButtonText} color={color}>
      {label}
    </Text>
  </Button>
);

TextButton.propTypes = {
  label: propTypes.string,
  onClick: propTypes.func,
  bold: propTypes.bool,
  color: propTypes.string,
};
export default withStyles(styles)(TextButton);
