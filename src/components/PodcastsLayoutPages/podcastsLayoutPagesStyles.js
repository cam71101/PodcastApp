import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  loading: {
    margin: 'auto',
  },
}));
export default useStyles;
