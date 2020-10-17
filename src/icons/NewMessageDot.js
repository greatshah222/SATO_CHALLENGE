import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { withRef } from '../hocs/withRef';
import Text from '../../src/components/Text';
import * as tokens from '../.generated/styles';

const styles = theme => ({
  icon: {
    width: '27px',
    height: '27px',
    background: tokens.colorNight,
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: '8px',
  },
  text: {
    color: tokens.textWhite,
    fontSize: tokens.fontSize3,
  },
});

const NewMessageDot = ({ children, classes, className, ...props }) => (
  <div className={classNames(classes.icon, className)} {...props}>
    <Text variant="h6" className={classes.text}>
      {children}
    </Text>
  </div>
);

export default withStyles(styles)(withRef(NewMessageDot));
