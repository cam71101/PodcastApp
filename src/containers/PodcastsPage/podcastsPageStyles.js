import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '2rem',
    },
  },
  title: {
    marginLeft: '2rem',
    marginTop: '5rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}));
export default useStyles;
