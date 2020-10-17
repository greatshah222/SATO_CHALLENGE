import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Text from '../Text';
import Grid from '../Grid';
import * as tokens from '../../.generated/styles';

const styles = theme => ({
  captionItem: {
    paddingTop: tokens.spacing2Xl,
  },
  captionText: {
    textTransform: 'uppercase',
    fontSize: tokens.fontSize1,
    color: tokens.textBlackMedium,
  },
  noResultsCaption: {
    paddingTop: tokens.spacing2Xl,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  noResults: {
    fontSize: tokens.fontSize3,
    color: tokens.textBlackMedium,
  },
  listItemLink: {
    cursor: 'pointer',
  },
  subtitleText: {
    color: tokens.textGrey,
  },
});

const SearchResultsList = ({ suggestions, closeSearchDialog, classes, noResults, noResultsText }) => {
  const handleClick = cb => () => {
    closeSearchDialog();
    cb();
  };

  const generateSuggestions = (suggestion, i) => (
    <ListItem
      onClick={handleClick(suggestion.handler)}
      className={classes.listItemLink}
      key={`${suggestion.header}_${i}`}
    >
      <Grid container item>
        <Grid item xs={12}>
          <ListItemText primary={suggestion.header} primaryTypographyProps={{ variant: 'body2' }} />
        </Grid>
        {suggestion.subtitle && (
          <Grid item xs={12}>
            <ListItemText disableTypography>
              <Text variant="body1" className={classes.subtitleText}>
                {suggestion.subtitle}
              </Text>
            </ListItemText>
          </Grid>
        )}
      </Grid>
    </ListItem>
  );

  const generateCategories = (category, i) => (
    <Fragment key={`${category.title}_${i}`}>
      <ListItem className={classes.captionItem}>
        <ListItemText
          primary={category.title}
          primaryTypographyProps={{ variant: 'caption', className: classes.captionText }}
        />
      </ListItem>
      {category.suggestions.map(generateSuggestions)}
    </Fragment>
  );

  return noResults ? (
    <List>
      <ListItem className={classes.noResultsCaption}>
        <ListItemText
          primary={noResultsText}
          primaryTypographyProps={{ variant: 'caption', className: classes.noResults }}
        />
      </ListItem>
    </List>
  ) : (
    <List>{suggestions.map(generateCategories)}</List>
  );
};

const suggestionPropType = PropTypes.arrayOf(
  PropTypes.shape({
    header: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
  })
);

SearchResultsList.propTypes = {
  suggestions: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        suggestions: PropTypes.oneOfType([suggestionPropType, PropTypes.object]),
      })
    ),
    PropTypes.object,
  ]),
  closeSearchDialog: PropTypes.func.isRequired,
  classes: PropTypes.object,
  noResults: PropTypes.bool,
  noResultsText: PropTypes.string,
};

export default withStyles(styles)(SearchResultsList);
