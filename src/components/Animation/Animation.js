import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { templates } from '../../animationTemplates/index';
import * as designTokens from '../../.generated/styles';

const styles = theme => ({
  rise: templates.rise,
  parent: { display: 'inline-flex' },
});

const Animation = ({ classes, animationStyle, ...props }) => (
  <div className={`${classes[animationStyle]} ${classes.parent}`} {...props}>
    {props.children}
  </div>
);

export default withStyles(styles)(Animation);
