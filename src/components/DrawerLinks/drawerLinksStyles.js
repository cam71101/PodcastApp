import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  toolbar: {
    justifyContent: 'space-between',
  },
  logoContainer: {
    height: '6rem',
    width: '6rem',
    marginBottom: '-1rem',
    marginTop: '-1rem',
    flexGrow: 1,
  },
  logo: {
    width: '6rem',
    height: '100%',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
}));

export default useStyles;
