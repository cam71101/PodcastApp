import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1ED760',
    },
    secondary: {
      main: '#eeeeee',
    },
    text: {
      secondary: 'white',
    },
  },
  typography: {
    fontFamily: 'Lato',
    subtitle2: {},
    h4: {
      fontWeight: 800,
    },
    h6: {
      fontWeight: 800,
      fontSize: '1.1rem',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 2150,
    },
  },
});

theme = responsiveFontSizes(theme);

theme.typography.subtitle1 = {
  fontSize: '.8rem',
  fontWeight: 500,
  [theme.breakpoints.down('sm')]: {
    fontSize: '.6rem',
  },
};

theme.typography.subtitle2 = {
  fontSize: '.8rem',
  fontWeight: 600,
  [theme.breakpoints.down('xs')]: {
    fontSize: '.7rem',
  },
};

theme.typography.h3 = {
  fontSize: '.9rem',
  fontWeight: 300,
  // [theme.breakpoints.down('sm')]: {
  //   fontSize: '.6rem',
  // },
};

console.log(theme);

export default theme;
