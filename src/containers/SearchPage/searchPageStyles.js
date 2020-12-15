import { makeStyles } from '@material-ui/styles';

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
    },
  },
  subtitle: {
    marginLeft: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
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
}));
export default useStyles;
