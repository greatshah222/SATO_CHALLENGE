import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import MuiCardContent from '@material-ui/core/CardContent';
import * as designTokens from '../../.generated/styles';

const styles = theme => ({
  root: {
    borderRadius: designTokens.borderRadiusMedium,
    boxShadow: '0 0 0 0',
  },
  content: {
    overflow: 'visible',
    margin: designTokens.spacingXl,
    [theme.breakpoints.down('sm')]: {
      margin: designTokens.spacingLarge,
    },
    padding: 0,
    '&:last-child': {
      padding: 0,
    },
  },
  container: {
    textAlign: 'center', 
  },
  smallContent: {
    margin: designTokens.spacingMedium,
  },
});

const CardContent = ({
  classes,
  children,
  smallContent,
  container,
  contentClassName: contentClassNameProp,
  ...rest
}) => {
  const contentClassName = classNames(classes.content, {
    [classes.smallContent]: smallContent,
    [classes.container]: container,
  });
  return <MuiCardContent className={classNames(contentClassName, contentClassNameProp)}>{children}</MuiCardContent>;
};

CardContent.muiName = 'CardContent';
CardContent.propTypes = MuiCardContent.propTypes;

export default withStyles(styles)(CardContent);
