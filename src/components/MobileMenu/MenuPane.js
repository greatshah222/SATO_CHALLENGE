import PropTypes from 'prop-types';
import React from 'react';
import Text from '../Text';
import Slide from '@material-ui/core/Slide';
import ChevronRight from '../../icons/ChevronRight';
import ArrowLeft from '../../icons/ArrowLeft';
import { withStyles } from '@material-ui/core/styles';
import * as tokens from '../../.generated/styles';
import classNames from 'classnames';
import NavigationList, { NavigationListItem } from '../NavigationList';
import Home from '../../icons/Home';
import HomeSearch from '../../icons/HomeSearch';
import Message from '../../icons/Message';
import Benefit from '../../icons/Benefit';
import LoggedInUser from '../../icons/LoggedInUser';
import Logout from '../../icons/Logout';

import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  list: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  button: {
    fontSize: tokens.fontSize5,
    width: '100%',
  },
  buttonSmallFont: {
    fontSize: tokens.fontSize2,
  },
  space: {
    width: tokens.spacingMedium,
    display: 'inline-block',
  },
  listItem: {
    paddingLeft: tokens.spacing4Xl,
    paddingRight: 0,
  },
  icon: {
    paddingRight: '1rem',
    color: theme.palette.primary.main,
  },
});

const icons = {
  home: Home,
  message: Message,
  benefit: Benefit,
  loggedInUser: LoggedInUser,
  logout: Logout,
  homeSearch: HomeSearch,
};

class MenuPane extends React.Component {
  handleClick = link => () => {
    if (link.executeHandler) {
      link.handler();
    }
    this.props.goToChild(link.id);
  };

  handleLinkClick = cb => () => {
    this.props.toggleMenu();
    cb();
  };

  getIcon = (icon, content) => {
    const Icon = icons[icon];
    return Icon ? <Icon className={this.props.classes.icon}>{content}</Icon> : null;
  };

  getItem = link => {
    if (link.items) {
      return (
        <NavigationListItem onClick={this.handleClick(link)} type={link.type} key={link.id} active={link.active}>
          <Text
            variant={link.variant}
            className={classNames(this.props.classes.button, {
              [this.props.classes.buttonSmallFont]: link.small,
            })}
            color={'inherit'}
          >
            {`${link.small ? '\u00A0' : ''}${link.label}`}
            <ChevronRight style={{ float: 'right' }} />
          </Text>
        </NavigationListItem>
      );
    }
    return (
      <NavigationListItem
        onClick={this.handleLinkClick(link.handler)}
        type={link.type}
        key={link.id}
        active={link.active}
      >
        {this.getIcon(link.icon, link.iconContent)}&nbsp;
        <Text variant={link.variant || 'body1'} className={classNames({ [this.props.classes.button]: !!link.variant })}>
          {link.label}
        </Text>
      </NavigationListItem>
    );
  };

  getItems = items => items.map(link => this.getItem(link));

  render() {
    const {
      visible,
      direction,
      goBack,
      hasParent,
      classes,
      currentItem: { label, handler, id, items, lazy },
      backLabel,
      animate,
      className,
      ...rest
    } = this.props;

    const navItems = this.getItems(items || []);
    const isEmpty = navItems.length === 0;
    if (label) {
      navItems.unshift(this.getItem({ label, handler, id, variant: 'button' }));
    }

    const List = (
      <NavigationList className={classNames(classes.list, className)} {...rest}>
        {hasParent && (
          <NavigationListItem onClick={goBack} key={'back'} leftAligned noLeftMargin>
            <Text variant={'body1'}>
              <ArrowLeft style={{ float: 'left' }} />
              <span className={classes.space} />
              {backLabel}
            </Text>
          </NavigationListItem>
        )}
        {navItems}
        {lazy && isEmpty && (
          <NavigationListItem>
            <CircularProgress color="primary" />
          </NavigationListItem>
        )}
      </NavigationList>
    );

    if (!animate) {
      return List;
    }
    return (
      <Slide direction={direction} in={visible} unmountOnExit={true}>
        {List}
      </Slide>
    );
  }
}

MenuPane.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  visible: PropTypes.bool.isRequired,
  hasParent: PropTypes.bool.isRequired,
  goToChild: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  classes: PropTypes.object,
  toggleMenu: PropTypes.func.isRequired,
  currentItem: PropTypes.object.isRequired,
  backLabel: PropTypes.string.isRequired,
  animate: PropTypes.bool.isRequired,
};

export default withStyles(styles)(MenuPane);
