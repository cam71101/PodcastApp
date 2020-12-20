import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.down('xs')]: {
      left: 0,
    },
    boxShadow: 'none',
  },
  toolbar: theme.mixins.toolbar,
  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    justifyContent: 'flex-start',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
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
}));

export default useStyles;
