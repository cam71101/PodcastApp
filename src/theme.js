import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
// import 'typeface-cormorant';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Lato',
    subtitle1: {
      fontSize: '.8rem',
      fontWeight: 800,
    },
    subtitle2: {
      fontSize: '.8rem',
    },
    h4: {
      fontWeight: 800,
    },
  },
});

// theme = responsiveFontSizes(theme);

export default theme;
