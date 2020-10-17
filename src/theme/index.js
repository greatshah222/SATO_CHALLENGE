import { createMuiTheme } from '@material-ui/core/styles';
import * as styles from '../.generated/styles';

import orangeNoise from '../images/orangeNoise.png';
import pinkNoise from '../images/pinkNoise.png';
import cyanNoise from '../images/cyanNoise.png';
import purpleNoise from '../images/purpleNoise.png';

let htmlFontSize = 18;
if (typeof window !== 'undefined') {
  const htmlEl = window.document.querySelector('html');
  const style = window
    .getComputedStyle(htmlEl, null)
    .getPropertyValue('font-size');
  htmlFontSize = parseFloat(style);
}

const textBase = {
  color: styles.textBlack,
  fontFamily: styles.fontTelefonWeb,
};

const headingBase = {
  ...textBase,
  fontFamily: styles.fontTelefonWebBlack,
  textTransform: 'uppercase',
  letterSpacing: styles.spacingLetterSmall,
  lineHeight: styles.lineHeightMini,
  fontWeight: 900,
};

const softy = {
  fontFamily: styles.fontTelefonWebBlack,
  fontStyle: 'italic',
  fontWeight: 600,
  letterSpacing: styles.spacingLetterSmall,
  lineHeight: styles.lineHeightMini,
};

const baseTheme = {
  typography: {
    useNextVariants: true,
    htmlFontSize,
    fontFamily: styles.fontTelefonWeb,
    button: {
      ...headingBase,
      fontSize: styles.fontSize3,
      lineHeight: styles.lineHeightNormal,
      letterSpacing: styles.spacingLetterSmall,
      color: 'inherit',
    },
    h1: {
      ...headingBase,
      fontSize: styles.fontSize12,
      [`@media (min-width: ${styles.desktopMinWidth}px)`]: {
        fontSize: styles.fontSize15,
      },
      [`@media (min-width: ${styles.desktopMaxWidth}px)`]: {
        fontSize: styles.fontSize17,
      },
    },
    h2: {
      ...headingBase,
      fontSize: styles.fontSize10,
      [`@media (min-width: ${styles.desktopMinWidth}px)`]: {
        fontSize: styles.fontSize13,
      },
      [`@media (min-width: ${styles.desktopMaxWidth}px)`]: {
        fontSize: styles.fontSize15,
      },
    },
    h3: {
      ...headingBase,
      fontSize: styles.fontSize8,
      [`@media (min-width: ${styles.desktopMinWidth}px)`]: {
        fontSize: styles.fontSize11,
      },
      [`@media (min-width: ${styles.desktopMaxWidth}px)`]: {
        fontSize: styles.fontSize13,
      },
    },
    h4: {
      ...headingBase,
      fontSize: styles.fontSize6,
      [`@media (min-width: ${styles.desktopMinWidth}px)`]: {
        fontSize: styles.fontSize8,
      },
      [`@media (min-width: ${styles.desktopMaxWidth}px)`]: {
        fontSize: styles.fontSize10,
      },
    },
    h5: {
      ...headingBase,
      fontSize: styles.fontSize5,
      [`@media (min-width: ${styles.desktopMinWidth}px)`]: {
        fontSize: styles.fontSize6,
      },
      [`@media (min-width: ${styles.desktopMaxWidth}px)`]: {
        fontSize: styles.fontSize8,
      },
    },
    h6: {
      ...headingBase,
      fontSize: styles.fontSize4,
    },
    subtitle1: {
      ...textBase,
      fontSize: styles.fontSize5,
      letterSpacing: styles.spacingLetterSmall,
      lineHeight: styles.lineHeightSmall,
      fontWeight: 900,
      [`@media (min-width: ${styles.desktopMinWidth}px)`]: {
        fontSize: styles.fontSize6,
      },
    },
    subtitle2: {
      ...textBase,
      fontSize: styles.fontSize3,
      letterSpacing: styles.spacingLetterGenerous,
      lineHeight: styles.lineHeightNormal,
      fontWeight: 900,
    },
    body2: {
      ...textBase,
      fontSize: styles.fontSize3,
      fontWeight: 'normal',
      lineHeight: styles.lineHeightNormal,
    },
    body1: {
      ...textBase,
      fontSize: styles.fontSize2,
      fontWeight: 'normal',
      lineHeight: styles.lineHeightNormal,
    },
    caption: {
      ...textBase,
      fontSize: styles.fontSize1,
      lineHeight: styles.lineHeightSmall,
      letterSpacing: styles.spacingLetterSmall,
    },
    softy: {
      ...textBase,
      ...softy,
      fontSize: styles.fontSize4,
      fontWeight: 600,
      [`@media (min-width: ${styles.desktopMinWidth}px)`]: {
        fontSize: styles.fontSize4,
      },
      lineHeight: '30px',
    },
    softyL: {
      ...textBase,
      ...softy,
      fontSize: styles.fontSize5,
      fontWeight: 600,
      [`@media (min-width: ${styles.desktopMinWidth}px)`]: {
        fontSize: styles.fontSize6,
      },
      lineHeight: '30px',
    },
    softyXL: {
      ...textBase,
      ...softy,
      fontSize: styles.fontSize6,
      fontWeight: 600,
      [`@media (min-width: ${styles.desktopMinWidth}px)`]: {
        fontSize: styles.fontSize8,
      },
    },
    buttonMenuItem: {
      fontFamily: styles.fontTelefonWeb,
      fontSize: styles.fontSize5,
      fontWeight: 'bold',
      lineHeight: styles.lineHeightEven,
      letterSpacing: styles.spacingLetterSmall,
      [`@media (min-width: ${styles.desktopMinWidth}px)`]: {
        fontSize: styles.fontSize3,
      },
    },
    label: {
      fontFamily: styles.fontTelefonWeb,
      fontWeight: 900,
      fontSize: styles.fontSize3,
    },
    labelSmall: {
      fontFamily: styles.fontTelefonWeb,
      fontWeight: 900,
      fontSize: styles.fontSize2,
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        ...textBase,
        fontSize: styles.fontSize3,
        fontWeight: 'normal',
        lineHeight: styles.lineHeightNormal,
      },
    },
    MuiInputLabel: {
      outlined: {
        '&$marginDense': {
          transform: `translate(${styles.spacingMedium}, 15px)`,
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: styles.borderRadiusFull,
        padding: `0 ${styles.spacingLarge}`,
        fontSize: styles.fontSize3,
        letterSpacing: styles.spacingLetterGenerous,
        minWidth: styles.buttonMinWidth,
        height: '3rem',
        alignItems: 'center',
      },
      text: {
        padding: `0 ${styles.spacingLarge}`,
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      outlined: {
        padding: `0 ${styles.spacingLarge}`,
      },
      contained: {
        boxShadow: 'none',
        '&$focusVisible': {
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
        },
      },
      sizeSmall: {
        padding: `0 ${styles.spacingLarge}`,
        height: '2.5rem',
        fontSize: '1rem',
      },
      sizeLarge: {
        padding: `0 ${styles.spacingLarge}`,
        height: '3.5rem',
        fontSize: '1rem',
      },
      label: {
        marginTop: '.15rem',
      },
    },
    MuiIconButton: {
      root: {
        height: styles.buttonHeight,
        width: styles.iconButtonWidth,
        backgroundColor: styles.colorWhite,
        boxShadow: 'none',
        '&[focusVisible]': {
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiMenuItem: {
      root: {
        whiteSpace: 'normal',
      },
    },
    MuiPrivateTabIndicator: {
      root: {
        height: '4px',
        borderRadius: '4px 4px 0 0',
      },
    },
    MuiPickersYear: {
      root: {
        '&:focus': {
          fontWeight: 900,
        },
      },
      yearSelected: {
        fontFamily: styles.fontTelefonWeb,
        fontWeight: 900,
        fontSize: styles.fontSize6,
      },
    },
    MuiPickersMonth: {
      root: {
        '&:focus': {
          fontWeight: 900,
        },
      },
      monthSelected: {
        fontFamily: styles.fontTelefonWeb,
        fontWeight: 900,
        fontSize: styles.fontSize6,
        textTransform: 'inherit',
      },
    },
    MuiPickersTimePickerToolbar: {
      hourMinuteLabel: {
        alignItems: 'normal',
      },
    },
    PrivateNotchedOutline: {
      legendLabelled: {
        display: 'block',
      },
    },
  },
  transitions: {
    duration: {
      enteringScreen: 300,
      leavingScreen: 265,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1279,
      xl: 1500,
    },
  },
};
/**
const evening = createMuiTheme({
  ...baseTheme,
  themeName: 'Evening',
  palette: {
    primary: {
      main: styles.colorEvening,
      light: styles.colorEveningLight,
      dark: styles.colorEveningDark,
      ultraLight: styles.colorEveningUltraLight,
      ultraDark: styles.colorEveningUltraDark,
      contrastText: styles.textWhite,
    },
    secondary: {
      main: styles.colorDay,
      light: styles.colorDayLight,
      dark: styles.colorDayDark,
      ultraLight: styles.colorDayUltraLight,
      ultraDark: styles.colorDayUltraDark,
      contrastText: styles.textWhite,
    },
    error: {
      main: styles.error,
      light: styles.errorLight,
    },
    background: {
      pageContent: styles.colorEveningUltraLight,
      componentLight: styles.colorEveningLight,
      componentUltraLight: styles.colorEveningUltraLight,
      componentDark: styles.colorEveningDark,
      componentUltraDark: styles.colorEveningUltraDark,
    },
    action: {
      hover: styles.colorEveningLight,
      selected: styles.colorBlackLight,
    },
  },
  gradient: {
    background: `linear-gradient(90deg,  #ffe06a 0%, #f1667c 70%)`,
  },
});

const morning = createMuiTheme({
  ...baseTheme,
  themeName: 'Morning',
  palette: {
    primary: {
      main: styles.colorMorning,
      light: styles.colorMorningLight,
      dark: styles.colorMorningDark,
      ultraLight: styles.colorMorningUltraLight,
      ultraDark: styles.colorMorningUltraDark,
      contrastText: styles.textWhite,
    },
    secondary: {
      main: styles.colorNight,
      light: styles.colorNightLight,
      dark: styles.colorNightDark,
      ultraLight: styles.colorNightUltraLight,
      ultraDark: styles.colorNightUltraDark,
      contrastText: styles.textWhite,
    },
    error: {
      main: styles.error,
      light: styles.errorLight,
    },
    background: {
      pageContent: styles.colorMorningUltraLight,
      componentLight: styles.colorMorningLight,
      componentUltraLight: styles.colorMorningUltraLight,
      componentDark: styles.colorMorningDark,
      componentUltraDark: styles.colorMorningUltraDark,
    },
    action: {
      hover: styles.colorMorningLight,
      selected: styles.colorBlackLight,
    },
  },
  gradient: {
    background: `linear-gradient(90deg, #ffe17f, #faa61a 70%)`,
  },
});

const day = createMuiTheme({
  ...baseTheme,
  themeName: 'Day',
  palette: {
    primary: {
      main: styles.colorDay,
      light: styles.colorDayLight,
      dark: styles.colorDayDark,
      ultraLight: styles.colorDayUltraLight,
      ultraDark: styles.colorDayUltraDark,
      contrastText: styles.textWhite,
    },
    secondary: {
      main: styles.colorEvening,
      light: styles.colorEveningLight,
      dark: styles.colorEveningDark,
      ultraLight: styles.colorEveningUltraLight,
      ultraDark: styles.colorEveningUltraDark,
      contrastText: styles.textWhite,
    },
    error: {
      main: styles.error,
      light: styles.errorLight,
    },
    background: {
      pageContent: styles.colorDayUltraLight,
      componentLight: styles.colorDayLight,
      componentUltraLight: styles.colorDayUltraLight,
      componentDark: styles.colorDayDark,
      componentUltraDark: styles.colorDayUltraDark,
    },
    action: {
      hover: styles.colorDayLight,
      selected: styles.colorBlackLight,
    },
  },
  gradient: {
    background: `linear-gradient(90deg, #cadb44, #00b7c6 70%)`,
  },
});

const night = createMuiTheme({
  ...baseTheme,
  themeName: 'Night',
  palette: {
    primary: {
      main: styles.colorNight,
      light: styles.colorNightLight,
      dark: styles.colorNightDark,
      ultraLight: styles.colorNightUltraLight,
      ultraDark: styles.colorNightUltraDark,
      contrastText: styles.textWhite,
    },
    secondary: {
      main: styles.colorMorning,
      light: styles.colorMorningLight,
      dark: styles.colorMorningDark,
      ultraLight: styles.colorMorningUltraLight,
      ultraDark: styles.colorMorningUltraDark,
      contrastText: styles.textWhite,
    },
    error: {
      main: styles.error,
      light: styles.errorLight,
    },
    background: {
      pageContent: styles.colorNightUltraLight,
      componentLight: styles.colorNightLight,
      componentUltraLight: styles.colorNightUltraLight,
      componentDark: styles.colorNightDark,
      componentUltraDark: styles.colorNightDark,
    },
    action: {
      hover: styles.colorNightLight,
      selected: styles.colorBlackLight,
    },
  },
  gradient: {
    background: `linear-gradient(90deg,  #ffcd67, #9f6eaf 70%)`,
  },
});
 */
const morning = createMuiTheme({
  ...baseTheme,
  themeName: 'Morning',
  palette: {
    primary: {
      main: styles.mainBlue,
      light: styles.colorOrangeLight,
      dark: styles.colorOrangeDark,
      ultraLight: styles.colorOrangeLight,
      ultraDark: styles.colorOrangeDark,
      contrastText: styles.textWhite,
    },
    secondary: {
      main: styles.colorPink,
      light: styles.colorPinkLight,
      dark: styles.colorPinkDark,
      ultraLight: styles.colorEveningUltraLight,
      ultraDark: styles.colorEveningUltraDark,
      contrastText: styles.textWhite,
    },

    error: {
      main: styles.error,
      light: styles.errorLight,
    },
    background: {
      pageContent: styles.backgorundDemo,
      componentLight: styles.colorMorningLight,
      componentUltraLight: styles.colorMorningUltraLight,
      componentDark: styles.colorOrangeDark,
      componentUltraDark: styles.colorMorningUltraDark,
    },
    action: {
      hover: styles.colorMorningLight,
      selected: styles.colorBlackLight,
    },
  },
  gradient: {
    background: `url(${orangeNoise}),linear-gradient(135deg,${
      styles.colorOrangeLight
    }, ${styles.colorOrangeDark})`,
    backgroundMirror: `url(${orangeNoise}),linear-gradient(225deg,${
      styles.colorOrangeLight
    }, ${styles.colorOrangeDark})`,
  },
});
const evening = createMuiTheme({
  ...baseTheme,
  themeName: 'Evening',
  palette: {
    primary: {
      main: styles.colorPink,
      light: styles.colorPinkLight,
      dark: styles.colorPinkDark,
      ultraLight: styles.colorEveningUltraLight,
      ultraDark: styles.colorDayUltraDark,
      contrastText: styles.textWhite,
    },
    secondary: {
      main: styles.colorOrange,
      light: styles.colorOrangeLight,
      dark: styles.colorOrangeDark,
      ultraLight: styles.colorMorningUltraLight,
      ultraDark: styles.colorMorningUltraDark,
      contrastText: styles.textWhite,
    },
    error: {
      main: styles.error,
      light: styles.errorLight,
    },
    background: {
      pageContent: styles.colorEveningUltraLight,
      componentLight: styles.colorEveningLight,
      componentUltraLight: styles.colorEveningUltraLight,
      componentDark: styles.colorPinkDark,
      componentUltraDark: styles.colorEveningUltraDark,
    },
    action: {
      hover: styles.colorEveningLight,
      selected: styles.colorBlackLight,
    },
  },
  gradient: {
    background: `url(${pinkNoise}) repeat,linear-gradient(135deg, ${
      styles.colorPinkLight
    }, ${styles.colorPinkDark})`,
    backgroundMirror: `url(${pinkNoise}) repeat,repeat,linear-gradient(225deg, ${
      styles.colorPinkLight
    }, ${styles.colorPinkDark})`,
  },
});

const day = createMuiTheme({
  ...baseTheme,
  themeName: 'Day',
  palette: {
    primary: {
      main: styles.colorCyan,
      light: styles.colorCyanLight,
      dark: styles.colorCyanDark,
      ultraLight: styles.colorDayUltraLight,
      ultraDark: styles.colorDayUltraDark,
      contrastText: styles.textWhite,
    },
    secondary: {
      main: styles.colorPurple,
      light: styles.colorPurpleLight,
      dark: styles.colorPurpleDark,
      ultraLight: styles.colorNightUltraLight,
      ultraDark: styles.colorNightUltraDark,
      contrastText: styles.textWhite,
    },
    error: {
      main: styles.error,
      light: styles.errorLight,
    },
    background: {
      pageContent: styles.colorDayUltraLight,
      componentLight: styles.colorDayLight,
      componentUltraLight: styles.colorDayUltraLight,
      componentDark: styles.colorCyanDark,
      componentUltraDark: styles.colorDayUltraDark,
    },
    action: {
      hover: styles.colorDayLight,
      selected: styles.colorBlackLight,
    },
  },
  gradient: {
    background: `url(${cyanNoise}) repeat, linear-gradient(135deg,${
      styles.colorCyanLight
    }, ${styles.colorCyanDark})`,
    backgroundMirror: `url(${cyanNoise}) repeat, linear-gradient(225deg,${
      styles.colorCyanLight
    }, ${styles.colorCyanDark})`,
  },
});

const night = createMuiTheme({
  ...baseTheme,
  themeName: 'Night',
  palette: {
    primary: {
      main: styles.colorPurple,
      light: styles.colorPurpleLight,
      dark: styles.colorPurpleDark,
      ultraLight: styles.colorPurpleLight,
      ultraDark: styles.colorPurpleDark,
      contrastText: styles.textWhite,
    },
    secondary: {
      main: styles.colorCyan,
      light: styles.colorCyanLight,
      dark: styles.colorCyanDark,
      ultraLight: styles.colorDayUltraLight,
      ultraDark: styles.colorDayUltraDark,
      contrastText: styles.textWhite,
    },
    error: {
      main: styles.error,
      light: styles.errorLight,
    },
    background: {
      pageContent: styles.colorNightUltraLight,
      componentLight: styles.colorNightLight,
      componentUltraLight: styles.colorNightUltraLight,
      componentDark: styles.colorPurpleDark,
      componentUltraDark: styles.colorNightUltraDark,
    },
    action: {
      hover: styles.colorNightLight,
      selected: styles.colorBlackLight,
    },
  },
  gradient: {
    background: `url(${purpleNoise}) repeat, linear-gradient(135deg,${
      styles.colorPurpleLight
    }, ${styles.colorPurpleDark})`,
    backgroundMirror: `url(${purpleNoise}) repeat,repeat,linear-gradient(225deg, ${
      styles.colorPurpleLight
    }, ${styles.colorPurpleDark})`,
  },
});
export default { morning, evening, day, night };
