import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  rootSearchPage: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem',
    marginTop: '6rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  pages: {
    alignSelf: 'center',
  },
}));
export default useStyles;
