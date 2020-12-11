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
    h6: {
      fontWeight: 800,
      fontSize: '1.1rem',
    },
  },
});

// theme = responsiveFontSizes(theme);

export default theme;
