import React from 'react';
import Button from './components/Button';
import './App.css';
import theme from './theme';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import DesktopBar from './components/AppBar/DesktopBar';
import ImageHeader from './components/ImageHeader';
import BannerImage from './images/helsinki.jpg';
import PageContent from './components/PageContent';
import Box from './components/Box/index';
import CallToActionArea from './components/CallToActionArea/CallToActionArea';
import Text from './components/Text';
import ArrowRight from './icons/ArrowRight';

import Grid from './components/Grid/index';
import CardContent from './components/CardContent';
import Card from './components/Card/index';
import CardMedia from './components/CardMedia/index';

import Key from './icons/Key';
import Benefit from './icons/Benefit';
import Broadband from './icons/Broadband';
import Sauna from './icons/Sauna';
import Pet from './icons/Pet';
import NoSmoking from './icons/NoSmoking';

function App() {
  const links = [
    { label: 'Front Page', active: true },
    { label: 'Investors' },
    { label: 'Media' },
    { label: 'About SATO' },
  ];
  const localeLink = { label: 'In English ' };

  const buttons = [
    {
      label: 'LÖYDÄ KOTI',
    },
    {
      label: 'TIETOA ASUMISESTA',
      active: true,
      items: [
        { label: 'Usein Kysyttyä' },

        {
          active: true,
          label: 'Ajankohtaista',
        },
        { label: 'kotona' },
      ],
    },
    {
      label: 'OTA YHTEYTTÄ',
    },
  ];
  const accountBtnHandler = () => {};
  const SearchHandler = () => {};
  return (
    <MuiThemeProvider theme={createMuiTheme(theme.morning)}>
      <DesktopBar
        links={links}
        buttons={buttons}
        accountBtnLabel='kirjaudu'
        localeLink={localeLink}
        loggedIn={false}
        accountBtnHandler={accountBtnHandler}
        handleSearch={SearchHandler}
      />
      <ImageHeader src={BannerImage} alt='hib' />
      <PageContent contentFullWidthMobile transparent>
        <Box variant='pageSectionLarge' negativeTopMargin>
          <CallToActionArea contentFullWidthMobile biggerPadding>
            <Text variant='h4' color={'primary'}>
              Lorem ipsum dolor consectetur adipisicing elit. In, et!
            </Text>
            <br />
            <Text variant='softyL' color={'textPrimary'}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              aspernatur quasi blanditiis tempore dolorem! Iure voluptatibus
              dolorem explicabo dolor id? aspernatur quasi blanditiis tempore
              dolorem! Iure voluptatibus dolorem explicabo dolor id?
            </Text>
            <br />
            <Button variant={'contained'} color={'secondary'} size={'small'}>
              <ArrowRight />
              VAPAATVUOKRA-ASUNNOT
            </Button>
            <br />
            <br />
            <Text variant='label' color={'primary'}>
              Lorem ipsum dolor, sit amet
            </Text>
            <br />
            <Text variant='body2'>
              Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja
              ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden
              normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon
              tulostaja otti kaljuunan ja sekoitti sen tehdäkseen
              esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta
              myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein
              muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun
              Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin
              ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus
              PageMaker joissa oli versioita Lorem Ipsumista.
            </Text>
            <br />
            <br />

            <Text variant='body2'>
              Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja
              ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden
              normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon
              tulostaja otti kaljuunan ja sekoitti sen tehdäkseen
              esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta
              myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein
              muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun
              Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin
              ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus
              PageMaker joissa oli versioita Lorem Ipsumista.
            </Text>
          </CallToActionArea>
        </Box>
      </PageContent>
      <ImageHeader src={BannerImage} alt='hib' />
      <PageContent contentFullWidthMobile>
        <Box variant='pageSectionLarge' negativeTopMargin>
          <CallToActionArea contentFullWidthMobile biggerPadding>
            <Text variant='label' color={'primary'}>
              Lorem ipsum dolor, sit amet
            </Text>
            <br />
            <Text variant='body2'>
              Vastoin yleistä uskomusta, Lorem Ipsum ei ole vain
              sattumanvarainen teksti. Sillä on pitkät juuret klassisesta
              latinalaisesta kirjallisuudesta vuonna 45 eKr alkaen, tehden siitä
              yli 2000 vuotta vanhan. Richard McClintock, latinalainen
              professori Hampden-Sydneyn yliopistossa Virginiassa, etsi yhden
              vaikeaselkoisimmista latinalaisista sanoista, consectetur, Lorem
              Ipsumin kappaleesta ja etsi lainauksia sanasta klassisessa
              kirjallisuudessa löytäen varman lähteen. Lorem Ipsum tulee osista
              1.10.32 ja 1.10.33 "de Finibus Bonorum et Malorum":ksesta (The
              Extremes of Good and Evil), jonka teki Cicero vuonna 45 eKr. Tämä
              kirja on tutkielma etiikasta, joka oli hyvin yleistä Renesanssin
              aikana. Ensimmäinen Lorem Ipsumin rivi, "Lorem ipsum dolor sit
              amet..", tulee rivistä joka on osassa 1.10.32.
            </Text>
            <br />
            <br />
            <Text variant='label' color={'primary'}>
              Lorem ipsum dolor, sit amet
            </Text>
            <br />
            <Text variant='body2'>
              Vastoin yleistä uskomusta, Lorem Ipsum ei ole vain
              sattumanvarainen teksti. Sillä on pitkät juuret klassisesta
              latinalaisesta kirjallisuudesta vuonna 45 eKr alkaen, tehden siitä
              yli 2000 vuotta vanhan. Richard McClintock, latinalainen
              professori Hampden-Sydneyn yliopistossa Virginiassa, etsi yhden
              vaikeaselkoisimmista latinalaisista sanoista, consectetur, Lorem
              Ipsumin kappaleesta ja etsi lainauksia sanasta klassisessa
              kirjallisuudessa löytäen varman lähteen. Lorem Ipsum tulee osista
              1.10.32 ja 1.10.33 "de Finibus Bonorum et Malorum":ksesta (The
              Extremes of Good and Evil), jonka teki Cicero vuonna 45 eKr. Tämä
              kirja on tutkielma etiikasta, joka oli hyvin yleistä Renesanssin
              aikana. Ensimmäinen Lorem Ipsumin rivi, "Lorem ipsum dolor sit
              amet..", tulee rivistä joka on osassa 1.10.32.
            </Text>{' '}
            <br />
            <br />
          </CallToActionArea>
        </Box>
      </PageContent>
      <PageContent contentFullWidthMobile>
        <Text variant='h4' color={'primary'}>
          Vacant Apartment In Helsinki
        </Text>
        <br />
        <br />
      </PageContent>
      <PageContent contentFullWidthMobile transparent>
        <CardContent container>
          <Grid container spacing={10}>
            <Grid item xs={4}>
              <Text variant='h1' color={'secondary'}>
                39{' '}
              </Text>{' '}
              <Text variant='softy' color={'textPrimary'}>
                Studio
              </Text>
              <br />
              <Button variant={'contained'} color={'primary'} size={'small'}>
                ASUNNOT
                <ArrowRight />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Text variant='h1' color={'secondary'}>
                83{' '}
              </Text>{' '}
              <Text variant='softy' color={'textPrimary'}>
                Shared Apartment
              </Text>
              <br />
              <Button variant={'contained'} color={'primary'} size={'small'}>
                ASUNNOT <ArrowRight />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Text variant='h1' color={'secondary'}>
                23{' '}
              </Text>{' '}
              <Text variant='softy' color={'textPrimary'}>
                Family Apartment
              </Text>
              <br />
              <Button variant={'contained'} color={'primary'} size={'small'}>
                KATSO <ArrowRight />
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={10}>
            <Grid item xs={4}>
              <Text variant='h1' color={'secondary'}>
                6{' '}
              </Text>{' '}
              <Text variant='softy' color={'textPrimary'}>
                4 bedroom
              </Text>
              <br />
              <Button variant={'contained'} color={'primary'} size={'small'}>
                ASUNNOT
                <ArrowRight />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Text variant='h1' color={'secondary'}>
                4{' '}
              </Text>{' '}
              <Text variant='softy' color={'textPrimary'}>
                2 bedroom
              </Text>
              <br />
              <Button variant={'contained'} color={'primary'} size={'small'}>
                ASUNNOT <ArrowRight />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </PageContent>

      <PageContent contentFullWidthMobile largeTopPadding>
        <Text variant='h4' color={'primary'}>
          Customer Review Lorem
        </Text>
        <br />
        <br />
        <CallToActionArea contentFullWidthMobile>
          <CardContent>
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <Text variant='h6'>
                  {' '}
                  <Text variant='softy' color={'textPrimary'}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel aspernatur quasi blanditiis tempore dolorem! Iure
                    voluptatibus dolorem explicabo dolor id? aspernatur quasi
                    blanditiis tempore dolorem! Iure voluptatibus dolorem
                    explicabo dolor id?
                  </Text>
                  <br />
                  <Button
                    variant={'contained'}
                    color={'secondary'}
                    size={'small'}
                  >
                    <ArrowRight />
                    VAPAATVUOKRA-ASUNNOT
                  </Button>
                </Text>
              </Grid>
              <Grid item xs={6}>
                <Card>
                  <CardMedia
                    component='img'
                    alt='House'
                    style={{
                      height: '340px',
                      maxWidth: '100%',
                      width: '100%',
                      margin: '30px auto 0 0 ',
                      position: 'absolute',
                    }}
                    height='340'
                    width='100%'
                    image={BannerImage}
                    title='My House'
                  />
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </CallToActionArea>{' '}
        <br />
        <br />
        <br />
        <Text variant='h4' color={'primary'}>
          CUSTOMER BENEFITS
        </Text>
        <br />
        <br />
        <br />
      </PageContent>
      <PageContent contentFullWidthMobile transparent>
        <CardContent>
          <Grid container spacing={10}>
            <Grid item xs={6}>
              <Grid container spacing={10}>
                <Grid item xs={2}>
                  <Text variant='h4' color={'primary'}>
                    {' '}
                    <Benefit />
                  </Text>
                </Grid>
                <Grid item xs={10}>
                  <Text variant='h6' color={'primary'}>
                    Lorem ipsum dolor sit.
                  </Text>
                  <Text variant='body1' color={'textPrimary'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam!
                  </Text>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={10}>
                <Grid item xs={2}>
                  <Text variant='h4' color={'primary'}>
                    {' '}
                    <Broadband />
                  </Text>
                </Grid>
                <Grid item xs={10}>
                  <Text variant='h6' color={'primary'}>
                    Lorem ipsum dolor sit.
                  </Text>
                  <Text variant='body1' color={'textPrimary'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam!
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={10}>
            <Grid item xs={6}>
              <Grid container spacing={10}>
                <Grid item xs={2}>
                  <Text variant='h4' color={'primary'}>
                    {' '}
                    <Pet />
                  </Text>
                </Grid>
                <Grid item xs={10}>
                  <Text variant='h6' color={'primary'}>
                    Lorem ipsum dolor sit.
                  </Text>
                  <Text variant='body1' color={'textPrimary'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam!
                  </Text>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={10}>
                <Grid item xs={2}>
                  <Text variant='h4' color={'primary'}>
                    {' '}
                    <NoSmoking />
                  </Text>
                </Grid>
                <Grid item xs={10}>
                  <Text variant='h6' color={'primary'}>
                    Lorem ipsum dolor sit.
                  </Text>
                  <Text variant='body1' color={'textPrimary'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam!
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={10}>
            <Grid item xs={6}>
              <Grid container spacing={10}>
                <Grid item xs={2}>
                  <Text variant='h4' color={'primary'}>
                    {' '}
                    <Key />
                  </Text>
                </Grid>
                <Grid item xs={10}>
                  <Text variant='h6' color={'primary'}>
                    Lorem ipsum dolor sit.
                  </Text>
                  <Text variant='body1' color={'textPrimary'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam!
                  </Text>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={10}>
                <Grid item xs={2}>
                  <Text variant='h4' color={'primary'}>
                    {' '}
                    <Sauna variant='large' />
                  </Text>
                </Grid>
                <Grid item xs={10}>
                  <Text variant='h6' color={'primary'}>
                    Lorem ipsum dolor sit.
                  </Text>
                  <Text variant='body1' color={'textPrimary'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam!
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </PageContent>
    </MuiThemeProvider>
  );
}

export default App;
