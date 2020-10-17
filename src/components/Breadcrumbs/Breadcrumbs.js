import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Text from '../Text';
import Popper from '../Popper';
import MenuItem from '../MenuItem';
import { Desktop, Mobile } from '../MediaQueries';
import ChevronRight from '../../icons/ChevronRight';
import More from '../../icons/More';
import * as designTokens from '../../.generated/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  separator: {
    color: designTokens.colorBlackMedium,
  },
  more: {
    cursor: 'pointer',
  },
});

const Breadcrumbs = ({ children, classes, className }) => {
  const popperId = uuid();
  return (
    <React.Fragment>
      <Desktop>
        <div className={classNames(classes.container, className)}>
          {React.Children.toArray(children).map(item => (
            <div key={uuid()} className={classes.container}>
              <Text variant="labelSmall" color="primary">
                {item}
              </Text>
              <ChevronRight className={classes.separator} />
            </div>
          ))}
        </div>
      </Desktop>
      <Mobile>
        <div className={classNames(classes.container, className)}>
          {children.length > 1 ? (
            <React.Fragment>
              <Popper
                closeOnClick
                placement={'bottom'}
                popperId={popperId}
                paperNoSidePadding
                button={(setAnchorEl, open, handleClick, popperId) => {
                  return (
                    <More
                      color="primary"
                      className={classes.more}
                      onClick={handleClick}
                      aria-owns={open ? popperId : undefined}
                    />
                  );
                }}
              >
                {children.map((item, index) => index < children.length - 1 && <MenuItem key={uuid()}>{item}</MenuItem>)}
              </Popper>
              <ChevronRight className={classes.separator} />
            </React.Fragment>
          ) : null}
          <Text variant="labelSmall" color="primary">
            {Array.isArray(children) ? children[children.length - 1] : children}
          </Text>
          <ChevronRight className={classes.separator} />
        </div>
      </Mobile>
    </React.Fragment>
  );
};

Breadcrumbs.propTypes = {
  children: PropTypes.array,
  classes: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default withStyles(styles)(Breadcrumbs);
