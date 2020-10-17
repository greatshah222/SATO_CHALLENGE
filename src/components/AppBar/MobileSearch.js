import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import SearchIcon from '../../icons/Search';
import CloseSmall from '../../icons/CloseSmall';
import IconButton from '../IconButton';
import { InputBase, withStyles } from '@material-ui/core';
import * as tokens from '../../.generated/styles';

const styles = () => ({
  input: {
    marginLeft: tokens.spacingSmall,
    flex: 1,
  },
  icon: {
    marginLeft: tokens.spacingSmall,
  },
});

const MobileSearch = ({ closeSearch, handleSearch, searchPlaceholder, searchTerm, classes }) => {
  const onSearch = event => handleSearch(event.target.value);

  return (
    <Fragment>
      <SearchIcon className={classes.icon} />
      <InputBase placeholder={searchPlaceholder} value={searchTerm} onChange={onSearch} className={classes.input} />
      <IconButton onClick={closeSearch} variant={'toolbar'}>
        <CloseSmall />
      </IconButton>
    </Fragment>
  );
};

MobileSearch.propTypes = {
  closeSearch: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string,
  searchTerm: PropTypes.string,
  classes: PropTypes.object,
};

export default withStyles(styles)(MobileSearch);
