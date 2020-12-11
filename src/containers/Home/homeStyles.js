import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginLeft: '2rem',
    marginTop: '5rem',
  },
}));
export default useStyles;
