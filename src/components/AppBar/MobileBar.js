import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import * as tokens from '../../.generated/styles';
import Search from '../../icons/Search';
import MenuIcon from '../../icons/Menu';
import MenuClose from '../../icons/CloseSmall';
import IconButton from '../IconButton';
import Button from '../Button';
import TextButton from '../TextButton';
import Logo from '../../icons/Logo';
import MobileMenu from '../MobileMenu';

import { Dialog } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import MobileSearch from './MobileSearch';
import Grid, { MainGridContainer } from '../Grid';
import SearchResultsList from '../SiteSearch/SearchResultsList';
import { clone } from '../../utils';
import memoizeOne from 'memoize-one';
import CloseSmall from '../../icons/CloseSmall';
import Menu from '../../icons/Menu';

import isEqual from 'lodash/isEqual';

const styles = theme => ({
  root: {
    backgroundColor: tokens.colorWhite,
    color: tokens.textBlack,
    boxShadow: 'none',
    zIndex: 5000,
    // IE11 hack
    '@media all and (-ms-high-contrast:none)': {
      position: 'relative',
    },
  },
  link: {
    marginRight: tokens.spacingMedium,
  },
  grow: {
    flexGrow: 1,
  },
  logoContainer: {
    alignSelf: 'center',
  },
  logo: {
    height: tokens.sizingIcon,
    cursor: 'pointer',
  },
  toolbar: {
    padding: `0 ${tokens.spacingSmall}`,
  },
  separator: {
    display: 'inline-block',
    marginLeft: tokens.spacingMedium,
  },
  accountBtn: {
    padding: 0,
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: tokens.colorWhite,
    },
  },
  top: {
    top: 56,
    bottom: 0,
    '@media (min-width:0px) and (orientation: landscape)': {
      top: 48,
    },
    [`@media (min-width:${theme.breakpoints.values.sm}px)`]: {
      top: 64,
    },
  },
  paper: {
    padding: '1rem 0 2rem',
  },

  localeLink: {
    paddingRight: tokens.spacingSmall,
  },
  dialog: {
    // IE11 hack
    '@media all and (-ms-high-contrast:none)': {
      zIndex: 5001,
    },
  },
});

class MobileBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      searchOpen: false,
    };
    // Avoid creating menu items array on every render.
    this.getMemoizedMenuItems = memoizeOne(this.getMenuItems, isEqual);
  }

  toggleMenu = () => {
    const { toggleMobileMenu } = this.props;
    if (toggleMobileMenu) toggleMobileMenu();
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  };

  openSearch = () => this.setState({ searchOpen: true });
  closeSearch = () => {
    this.setState({ searchOpen: false });
    this.props.handleSearch('');
  };

  getMenuItems = (buttons, links, accountItems, loggedIn) => {
    const frontPage = clone(links[0]);
    frontPage.variant = buttons[0].variant;
    const menuItems = [].concat(frontPage, buttons, links.slice(1));
    if (loggedIn) {
      menuItems.unshift(...accountItems);
    }
    return menuItems;
  };

  render() {
    const {
      classes,
      loggedIn,
      accountItems,
      buttons,
      links,
      localeLink,
      defaultBackLabel,
      accountBtnLabel,
      accountBtnHandler,
      searchSuggestions,
      handleSearch,
      searchPlaceholder,
      searchTerm,
      logoBtnHandler,
      isSearching,
      noResultsText,
    } = this.props;
    const { menuOpen, searchOpen } = this.state;
    const menuItems = this.getMemoizedMenuItems(buttons, links, accountItems, loggedIn);

    const muiAppBar = position => (
      <MuiAppBar position={position} className={classes.root}>
        {!searchOpen && (
          <Toolbar className={classes.toolbar}>
            <Fragment>
              <IconButton variant={'toolbar'} onClick={this.toggleMenu} className={classes.iconButton}>
                {menuOpen ? <MenuClose /> : <MenuIcon />}
              </IconButton>
              <div className={classes.separator} />
              <div onClick={logoBtnHandler} className={classes.logoContainer}>
                <Logo className={classes.logo} />
              </div>
              <div className={classes.grow} />
              {menuOpen ? (
                <TextButton
                  className={classes.localeLink}
                  onClick={() => {
                    localeLink.handler();
                    this.toggleMenu();
                  }}
                  label={localeLink.label}
                />
              ) : (
                <Fragment>
                  <Button
                    size={'small'}
                    color={loggedIn ? 'primary' : 'default'}
                    onClick={accountBtnHandler}
                    className={classes.accountBtn}
                  >
                    {accountBtnLabel}
                  </Button>

                  <div className={classes.separator} />
                  <IconButton variant={'toolbar'} onClick={this.openSearch}>
                    <Search />
                  </IconButton>
                </Fragment>
              )}
            </Fragment>
          </Toolbar>
        )}
      </MuiAppBar>
    );

    return (
      <Fragment>
        {muiAppBar('static')}
        <Dialog
          open={menuOpen}
          fullScreen={true}
          TransitionComponent={Slide}
          PaperProps={{ elevation: 0 }}
          className={classes.dialog}
        >
          {muiAppBar('fixed')}
          <MobileMenu
            content={{ items: menuItems, id: 'root' }}
            open={menuOpen}
            toggleMenu={this.toggleMenu}
            defaultBackLabel={defaultBackLabel}
            className={classes.top}
          />
        </Dialog>
        <Dialog fullScreen={true} open={searchOpen} TransitionComponent={Slide} PaperProps={{ elevation: 0 }}>
          <Toolbar className={classes.toolbar}>
            <MobileSearch
              closeSearch={this.closeSearch}
              handleSearch={handleSearch}
              searchPlaceholder={searchPlaceholder}
              searchTerm={searchTerm}
            />
          </Toolbar>
          <MainGridContainer justify={'flex-end'} className={classes.paper}>
            <Grid item xs={11}>
              <SearchResultsList
                noResults={
                  typeof isSearching !== 'undefined' &&
                  !isSearching &&
                  searchTerm.length > 2 &&
                  searchSuggestions.length === 0
                }
                noResultsText={noResultsText}
                suggestions={searchSuggestions}
                closeSearchDialog={this.closeSearch}
              />
            </Grid>
          </MainGridContainer>
        </Dialog>
      </Fragment>
    );
  }
}

const suggestionPropType = PropTypes.arrayOf(
  PropTypes.shape({
    header: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
  })
);

MobileBar.propTypes = {
  classes: PropTypes.object,
  loggedIn: PropTypes.bool.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  localeLink: PropTypes.shape({
    label: PropTypes.node.isRequired,
    handler: PropTypes.func.isRequired,
  }).isRequired,
  accountItems: PropTypes.arrayOf(PropTypes.object),
  defaultBackLabel: PropTypes.string.isRequired,
  accountBtnLabel: PropTypes.string.isRequired,
  accountBtnHandler: PropTypes.func.isRequired,
  logoBtnHandler: PropTypes.func,
  searchSuggestions: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        suggestions: PropTypes.oneOfType([suggestionPropType, PropTypes.object]),
      })
    ),
    PropTypes.object,
  ]),
  handleSearch: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string,
  searchTerm: PropTypes.string,
  toggleMobileMenu: PropTypes.func,
  isSearching: PropTypes.bool,
  noResultsText: PropTypes.string,
};

MobileBar.defaultProps = {
  defaultBackLabel: '',
};

export default withStyles(styles)(MobileBar);
