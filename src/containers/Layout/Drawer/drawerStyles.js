import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 1,
    marginTop: '0',
    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      zIndex: 1000,
    },
  },
  logo: {
    width: '6rem',
    height: '100%',
  },
}));

export default useStyles;
