import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';
import Text from '../Text';
import * as tokens from '../../.generated/styles';
import { withStyles } from '@material-ui/core/styles';
import Check from '../../icons/Check';
import Edit from '../../icons/Edit';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    '& disabled': {
      backgroundColor: 'transparent',
      color: theme.palette.action.disabled,
    },
  },
  phase: {
    color: tokens.textWhite,
    backgroundColor: theme.palette.primary.main,
    width: tokens.spacing3Xl,
    height: tokens.spacing3Xl,
    borderRadius: tokens.borderRadiusFull,
    display: 'flex',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    marginRight: tokens.spacingMedium,
  },
  vertical: {
    display: 'flex',
    flexDirection: 'column',
  },
  pureVertical: {
    marginRight: 0,
  },
  verticalPhase: {
    width: tokens.spacing2Xl,
    height: tokens.spacing2Xl,
    marginRight: 0,
    marginBottom: tokens.spacingSmall,
  },
  verticalLabel: {
    color: theme.palette.primary.main,
  },
  disabledPhase: {
    backgroundColor: tokens.colorBlackLight,
    color: tokens.textBlackMedium,
  },
  disabledLabel: {
    color: tokens.textBlackMedium,
  },
});

const PhaseButton = ({ label, phase, variant, disabled, vertical, pureVertical, classes, className, ...rest }) => {
  let phaseContent = phase;
  if (variant === 'checked') {
    phaseContent = <Check />;
  } else if (variant === 'edit') {
    phaseContent = <Edit />;
  }

  return (
    <ButtonBase
      {...rest}
      className={classNames(classes.root, { [classes.vertical]: vertical || pureVertical }, className)}
      disabled={disabled}
      disableRipple
      disableTouchRipple
    >
      <Text
        variant={'button'}
        className={classNames(classes.phase, {
          [classes.disabledPhase]: disabled || variant === 'checked',
          [classes.verticalPhase]: vertical,
          [classes.pureVertical]: pureVertical,
        })}
      >
        {phaseContent}
      </Text>
      <Text
        variant={vertical ? 'h5' : 'button'}
        className={classNames({
          [classes.verticalLabel]: vertical,
          [classes.disabledLabel]: disabled || variant === 'checked',
        })}
      >
        {label}
      </Text>
    </ButtonBase>
  );
};

PhaseButton.propTypes = {
  ...ButtonBase.propTypes,
  label: PropTypes.string,
  phase: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  classes: PropTypes.object,
  variant: PropTypes.oneOf(['phase', 'checked', 'edit']),
  vertical: PropTypes.bool,
};

PhaseButton.defaultProps = {
  variant: 'phase',
  disabled: false,
  vertical: false,
  phase: '',
};

export default withStyles(styles)(PhaseButton);
