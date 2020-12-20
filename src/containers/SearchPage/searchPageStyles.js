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
  error: {
    margin: 'auto',
    marginTop: '15rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '8rem',
    },
  },
}));
export default useStyles;
