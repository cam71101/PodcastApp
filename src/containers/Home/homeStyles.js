import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rootHome: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem',
    marginTop: '6rem',
    [theme.breakpoints.down('lg')]: {
      marginBottom: '7rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '10rem',
    },
  },
  podcasts: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100%)',
  },
}));
export default useStyles;
