import React from 'react';
import { withRef } from '../hocs/withRef';
import { withStyles, SvgIcon as MuiSvgIcon } from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import NewMessageDot from './NewMessageDot';
import * as designTokens from '../.generated/styles';

const styles = () => ({
  large: { fontSize: designTokens.sizingIconLarge },
  small: { fontSize: designTokens.sizingIcon },
  relative: { position: 'relative' },
});

const SvgIcon = ({
  classes,
  className: classNameProp,
  variant,
  numOfNewMessages,
  ...rest
}) => {
  const className = classNames(
    classes.root,
    {
      [classes.large]: variant === 'large',
      [classes.small]: variant === 'small',
    },
    classNameProp
  );
  const viewBox =
    variant === 'large' || variant === 'small' ? '0 0 40 40' : '0 0 24 24';
  if (numOfNewMessages) {
    return (
      <div className={classes.relative}>
        {numOfNewMessages > 0 && (
          <NewMessageDot>{numOfNewMessages}</NewMessageDot>
        )}
        <MuiSvgIcon className={className} {...rest} viewBox={viewBox} />
      </div>
    );
  } else {
    return <MuiSvgIcon className={className} {...rest} viewBox={viewBox} />;
  }
};

SvgIcon.propTypes = {
  ...MuiSvgIcon.propTypes,
  variant: PropTypes.oneOf(['default', 'large', 'small']).isRequired,
  numOfNewMessages: PropTypes.number,
};

SvgIcon.defaultProps = {
  variant: 'default',
  numOfNewMessages: 0,
};

SvgIcon.muiName = './SvgIcon';

export default withStyles(styles)(withRef(SvgIcon));
