import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  rootHome: {
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
  podcasts: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100%)',
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
