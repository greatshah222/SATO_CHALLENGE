import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//import uuidv1 from 'uuid/v1';
import { withStyles } from '@material-ui/core/styles';
import Text from '../Text';
import Grid from '../Grid';
import PageContent from '../PageContent';
import Box from '../Box';
import { Desktop } from '../MediaQueries';
import LinkColumn from './LinkColumn';
import PhoneDialog2 from '../../icons/PhoneDialog2';
import Facebook from '../../icons/Facebook';
import Instagram from '../../icons/Instagram';
import Twitter from '../../icons/Twitter';
import LinkedIn from '../../icons/LinkedIn';
import * as designTokens from '../../.generated/styles';

const styles = theme => ({
  footer: {
    marginTop: 'auto',
  },
  pageContent: {
    background: theme.palette.primary.main,
    paddingTop: designTokens.spacingGargantual,
    '& a': {
      textDecoration: 'none',
    },
  },
  middle: {
    border: 'solid 1px rgba(255, 255, 255, 0.5)',
    paddingTop: designTokens.spacingMedium,
    paddingBottom: designTokens.spacingLarge,
    borderRadius: designTokens.borderRadiusMedium,
    textAlign: 'center',
  },
  footerText: {
    color: theme.palette.primary.contrastText,
  },
  marginRightMedium: {
    marginRight: designTokens.spacingMedium,
  },
  marginBottomMedium: {
    marginBottom: designTokens.spacingMedium,
  },
  marginBottomSmall: {
    marginBottom: designTokens.spacingSmall,
  },
  clickable: {
    cursor: 'pointer',
  },
  columnContainer: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: designTokens.spacingLarge,
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
  bottomContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
    },
  },
  socialContainer: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: designTokens.spacingXl,
    },
  },
  // Override the grid justify content when breakpoint larger than mobile..
  dynamicJustifyContainer: {
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
});

const Footer = ({ classes, columns, customerService, middleRow, companyInfo, hide, className, ...rest }) => {
  if (hide) return null;

  return (
    <footer className={classNames(classes.footer, className)} {...rest}>
      <PageContent className={classes.pageContent}>
        <Box variant="pageSectionLarge">
          <Grid container>
            <Desktop>
              {columns.map((item, i) => (
                <Grid xs={12} md={4} item className={classes.columnContainer} key={i}>
                  {item}
                </Grid>
              ))}
            </Desktop>
            <Grid xs={12} md={4} item className={classes.columnContainer}>
              <LinkColumn header={customerService.title}>
                <Grid container className={classes.dynamicJustifyContainer}>
                  <Grid item>
                    <PhoneDialog2 className={classNames(classes.footerText, classes.marginRightMedium)} />
                  </Grid>
                  <Grid item>
                    <a href="mailto:asiakaspalvelu@sato.fi">
                      <Text variant="body2" className={classNames(classes.footerText, classes.marginBottomSmall)}>
                        asiakaspalvelu@sato.fi
                      </Text>
                    </a>
                    <a href="tel://020334443">
                      <Text variant="body2" className={classes.footerText}>
                        {customerService.phoneNumber}
                      </Text>
                    </a>
                    <Text
                      variant="body2"
                      className={classNames(classes.footerText, classes.clickable)}
                      onClick={() => customerService.callRatesHandler()}
                    >
                      {customerService.callRatesLabel}
                    </Text>
                  </Grid>
                </Grid>
              </LinkColumn>
            </Grid>
          </Grid>
        </Box>
        <Box variant="pageSection">
          <Grid container>
            <Grid
              xs={12}
              item
              className={classNames(classes.middle, classes.clickable)}
              onClick={() => middleRow.handler()}
            >
              <Text variant="h3" className={classes.footerText}>
                {middleRow.title}
              </Text>
              <Text variant="softy" className={classes.footerText}>
                {middleRow.subtitle}
              </Text>
            </Grid>
          </Grid>
        </Box>
        <Box variant="pageSectionLarge">
          <Grid container justify="space-between" className={classes.bottomContainer}>
            <Grid item>
              <Text variant="body2" className={classNames(classes.footerText, classes.marginBottomMedium)}>
                {companyInfo}
              </Text>
            </Grid>
            <Grid item className={classes.socialContainer}>
              <a href="https://www.instagram.com/satokoti/" target="_blank" rel="noopener noreferrer">
                <Instagram className={classNames(classes.footerText, classes.marginRightMedium)} />
              </a>
              <a href="https://twitter.com/satokoti" target="_blank" rel="noopener noreferrer">
                <Twitter className={classNames(classes.footerText, classes.marginRightMedium)} />
              </a>
              <a href="https://fi-fi.facebook.com/SATO" target="_blank" rel="noopener noreferrer">
                <Facebook className={classNames(classes.footerText, classes.marginRightMedium)} />
              </a>
              <a href="https://www.linkedin.com/company/sato-oyj" target="_blank" rel="noopener noreferrer">
                <LinkedIn className={classes.footerText} />
              </a>
            </Grid>
          </Grid>
        </Box>
      </PageContent>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object,
  middleRow: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
  }).isRequired,
  hide: PropTypes.bool,
  companyInfo: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  customerService: PropTypes.shape({
    title: PropTypes.string.isRequired,
    titleHandler: PropTypes.func.isRequired,
    callRatesLabel: PropTypes.string.isRequired,
    callRatesHandler: PropTypes.func.isRequired,
    phoneNumber: PropTypes.string,
  }).isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default withStyles(styles)(Footer);
