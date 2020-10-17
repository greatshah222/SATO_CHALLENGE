import React from 'react';
import PropTypes from 'prop-types';
import MuiTypography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import className from 'classnames';
import * as tokens from '../../.generated/styles';

const MuiVariants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline',
  'srOnly',
  'inherit',
];

const MuiColors = [
  'default',
  'error',
  'inherit',
  'primary',
  'secondary',
  'textPrimary',
  'textSecondary',
];

const styles = (theme) => ({
  softy: theme.typography.softy,
  softyL: theme.typography.softyL,
  softyXL: theme.typography.softyXL,
  buttonMenuItem: theme.typography.buttonMenuItem,
  label: theme.typography.label,
  labelSmall: theme.typography.labelSmall,
  colorGrey: {
    color: tokens.textGrey,
  },
  colorBlue: {
    color: tokens.textWhite,
  },
  link: {
    fontWeight: '900',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  bold: {
    fontWeight: '900',
  },
});

const Text = ({
  variant: variantProp,
  classes,
  className: classNameProp,
  color: colorProp,
  link,
  bold,
  ...props
}) => {
  const variant = MuiVariants.includes(variantProp) ? variantProp : undefined;
  const color = MuiColors.includes(colorProp) ? colorProp : undefined;
  return (
    <MuiTypography
      variant={variant}
      color={color}
      className={className(
        {
          [classes[variantProp]]: variantProp !== 'inherit',
          [classes.colorGrey]: colorProp === 'grey',
          [classes.link]: link,
          [classes.bold]: bold,
        },
        classNameProp
      )}
      {...props}
    />
  );
};

Text.propTypes = {
  ...MuiTypography.propTypes,
  variant: PropTypes.oneOf([
    ...MuiVariants,
    'softy',
    'softyL',
    'softyXL',
    'buttonMenuItem',
    'label',
    'labelSmall',
  ]),
  color: PropTypes.oneOf([...MuiColors, 'grey']),
};
Text.muiName = 'Typography';

export default withStyles(styles)(Text);
