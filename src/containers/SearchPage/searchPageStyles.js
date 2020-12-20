import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rootSearchPage: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '6rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  pages: {
    alignSelf: 'center',
    marginBottom: '10rem',
  },
  title: {
    marginLeft: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      padding: '.5rem',
      textAlign: 'center',
    },
  },
  subtitle: {
    marginLeft: '4rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  error: {
    margin: 'auto',
    marginTop: '15rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '8rem',
    },
  },
  link: {
    textDecoration: 'none',
  },
  loading: {
    position: 'absolute',
    margin: 'auto',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: '10rem',
    height: '50%',
  },
}));
export default useStyles;
