import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '../Button';
import { makeStyles } from '@material-ui/core/styles';
import * as tokens from '../../.generated/styles';
import IconButton from '../IconButton';
import PersonOutline from '../../icons/PersonOutline';
import PersonFilled from '../../icons/PersonFilled';
import Menu from '../Menu';
import MenuButton from '../Menu/MenuButton';
import Logo from '../../icons/Logo';
import TopRowLink from './TopRowLink';
import ChevronUp from '../../icons/ChevronUp';
import ChevronDown from '../../icons/ChevronDown';
import Close from '../../icons/CloseSmall';
import Search from '../../icons/Search';
import classNames from 'classnames';
import Text from '../Text';
import NavigationListItem from '../NavigationList/NavigationListItem';
import { Dialog, ClickAwayListener } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import SearchResultsList from '../SiteSearch/SearchResultsList';
import Grid from '../Grid';
import HugeTextField from '../HugeTextField';
import InputAdornment from '../InputAdornment';
import SearchIcon from '../../icons/LargeSearch';

const btnRowHeight = 80;
const linkRowHeight = 45;
const totalHeight = btnRowHeight + linkRowHeight;
const indicatorHeight = 4;

const useStyles = makeStyles((theme) => ({
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
  search: {
    marginLeft: '2rem',
  },
  toolbar: {
    padding: `0 ${tokens.spacingXl}`,
  },
  linkBar: {
    display: 'flex',
    alignItems: 'stretch',
    height: `${linkRowHeight}px`,
    minHeight: `${linkRowHeight}px`,
  },
  btnBar: {
    height: `${btnRowHeight}px`,
    alignItems: 'stretch',
  },
  logoContainer: {
    alignSelf: 'center',
  },
  logo: {
    height: '2rem',
    cursor: 'pointer',
  },
  button: {
    padding: 0,
    margin: `0 ${tokens.spacingMedium}`,
    '&:hover': {
      color: theme.palette.primary.main,
    },
    height: `${btnRowHeight}px`,
    marginBottom: `-${indicatorHeight}px`,
    borderRadius: 0,
  },
  loginButton: {
    borderColor: 'rgba(51, 51, 51, 0.3)',
  },
  separator: {
    width: '2rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  bottom: {
    height: '4px',
  },
  activeButton: {
    borderTop: `${indicatorHeight}px solid ${tokens.colorMorning}`,
    borderRadius: `${indicatorHeight}px ${indicatorHeight}px 0 0`,
    margin: `0 ${tokens.spacingMedium}`,
  },
  backdrop: {
    top: `${totalHeight}px`,
  },
  paper: {
    padding: '1rem 0 2rem',
  },
  dialogPaper: {
    borderRadius: `0 0 ${tokens.borderRadiusMedium} ${
      tokens.borderRadiusMedium
    }`,
    top: `${totalHeight}px`,
    bottom: '10%', // TODO: bottom should adjust to content and be always positive or zero.
  },
  chevron: {
    marginLeft: '-4px',
  },
  smallerRightMargin: {
    marginRight: '12px',
  },
  marginRightXl: {
    marginRight: tokens.spacingXl,
  },
  dialogContainer: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100%',
  },
}));

const DesktopBar = ({
  loggedIn,
  accountItems,
  links = [],
  localeLink = {},
  buttons,
  accountBtnLabel,
  accountBtnHandler,
  searchSuggestions,
  handleSearch,
  searchPlaceholder,
  searchTerm,
  logoBtnHandler,
  isSearching,
  noResultsText,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const classes = useStyles();

  const searchInput = React.createRef();

  const topRowLinks = links.map((link) => (
    <TopRowLink
      handler={link.handler}
      active={link.active}
      key={link.label}
      route={link.route}
      className={classes.link}
    >
      {link.label}
    </TopRowLink>
  ));
  const accountBtn = loggedIn ? (
    <Button
      variant='outlined'
      size={'small'}
      color='primary'
      onClick={accountBtnHandler}
    >
      {accountBtnLabel}&nbsp;
      <PersonFilled />
    </Button>
  ) : (
    <Button
      variant='outlined'
      size={'small'}
      onClick={accountBtnHandler}
      className={classes.loginButton}
    >
      {accountBtnLabel}&nbsp;
      <PersonOutline />
    </Button>
  );

  const handleSearchClick = () => {
    window.scrollTo(0, 0);
    setSearchOpen(!searchOpen);
    handleSearch('');
  };
  const closeSearchDialog = () => {
    setSearchOpen(false);
    handleSearch('');
  };

  const focusOnSearchInput = () => {
    if (searchInput && searchInput.current) {
      searchInput.current.focus();
    }
  };

  const onSearch = (event) => handleSearch(event.target.value);

  const linkBtns = buttons.map((btn) => {
    let button;
    if (btn.items) {
      const items = [].concat(btn, btn.items);
      button = (
        <Menu
          button={(setAnchorEl, open, handleClick) => (
            <MenuButton
              setAnchorEl={setAnchorEl}
              handleClick={handleClick}
              open={open}
              color='inherit'
              size={'small'}
              className={classNames(classes.button, classes.smallerRightMargin)}
            >
              {btn.label}&nbsp;
              {open ? (
                <ChevronUp className={classes.chevron} />
              ) : (
                <ChevronDown className={classes.chevron} />
              )}
            </MenuButton>
          )}
          items={(handleClick) =>
            items.map((item) => (
              <NavigationListItem
                onClick={handleClick(item.handler)}
                type={item.type}
                key={item.id}
                active={item.active}
              >
                <Text variant={item.variant} color={'inherit'}>
                  {item.label}
                </Text>
              </NavigationListItem>
            ))
          }
        />
      );
    } else {
      button = (
        <Button
          color='inherit'
          onClick={btn.handler}
          size={'small'}
          className={classes.button}
        >
          {btn.label}
        </Button>
      );
    }
    return (
      <div className={classes.container} key={btn.label}>
        {button}
        <div
          className={classNames({
            [classes.bottom]: !btn.active,
            [classes.activeButton]: btn.active,
            [classes.marginRightXl]: btn.items,
          })}
        />
      </div>
    );
  });

  return (
    <Fragment>
      <MuiAppBar position='static' className={classes.root}>
        <Toolbar className={classNames(classes.toolbar, classes.linkBar)}>
          {topRowLinks}
          <div className={classes.grow} />
          <TopRowLink handler={localeLink.handler}>
            {localeLink.label}
          </TopRowLink>
        </Toolbar>
        <Toolbar className={classNames(classes.toolbar, classes.btnBar)}>
          <div onClick={logoBtnHandler} className={classes.logoContainer}>
            <Logo className={classes.logo} />
          </div>
          <div className={classes.grow} />
          {linkBtns}
          <div className={classes.separator} />
          <div className={classes.container}>{accountBtn}</div>
          <div className={classes.container}>
            <IconButton
              className={classNames(classes.search, classes.loginButton)}
              variant={'outlined'}
              size={'small'}
              onClick={handleSearchClick}
              color={searchOpen ? 'primary' : 'default'}
            >
              {searchOpen ? <Close /> : <Search />}
            </IconButton>
          </div>
        </Toolbar>
      </MuiAppBar>
      <Dialog
        onEntered={focusOnSearchInput}
        classes={{ container: classes.dialogContainer }}
        fullScreen={true}
        open={searchOpen}
        TransitionComponent={Slide}
        PaperProps={{ elevation: 0, className: classes.dialogPaper }}
        BackdropProps={{ className: classes.backdrop }}
      >
        <ClickAwayListener onClickAway={closeSearchDialog} mouseEvent='onClick'>
          <Grid container justify={'center'} className={classes.paper}>
            <Grid item xs={12} md={6}>
              <HugeTextField
                inputRef={searchInput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                value={searchTerm}
                onChange={onSearch}
                placeholder={searchPlaceholder}
              />
              <SearchResultsList
                noResults={
                  typeof isSearching !== 'undefined' &&
                  !isSearching &&
                  searchTerm.length > 2 &&
                  searchSuggestions.length === 0
                }
                noResultsText={noResultsText}
                suggestions={searchSuggestions}
                closeSearchDialog={closeSearchDialog}
              />
            </Grid>
          </Grid>
        </ClickAwayListener>
      </Dialog>
    </Fragment>
  );
};

const suggestionPropType = PropTypes.arrayOf(
  PropTypes.shape({
    header: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
  })
);

DesktopBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  localeLink: PropTypes.shape({
    label: PropTypes.node.isRequired,
    handler: PropTypes.func.isRequired,
  }).isRequired,
  accountItems: PropTypes.arrayOf(PropTypes.object),
  accountBtnLabel: PropTypes.string.isRequired,
  accountBtnHandler: PropTypes.func.isRequired,
  logoBtnHandler: PropTypes.func,
  searchSuggestions: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        suggestions: PropTypes.oneOfType([
          suggestionPropType,
          PropTypes.object,
        ]),
      })
    ),
    PropTypes.object,
  ]),
  handleSearch: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string,
  searchTerm: PropTypes.string,
  isSearching: PropTypes.bool,
  noResultsText: PropTypes.string,
};

export default DesktopBar;
