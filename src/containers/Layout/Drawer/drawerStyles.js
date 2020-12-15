import { makeStyles, fade } from '@material-ui/core/styles';

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
  appBar: {
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.down('xs')]: {
      left: 0,
    },
    boxShadow: 'none',
  },
  menuButton: {
    // flexGrow: 1,
    marginRight: theme.spacing(2),
    justifyContent: 'flex-start',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  toolbar: {
    justifyContent: 'space-between',
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: {
    minWidth: '56px',
    flexShrink: 0,
    display: 'inline-flex',
    paddingRight: '1.5rem',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    // marginLeft: '85%',
    width: 'auto',
    marginRight: '1rem',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '12ch',
    '&:focus': {
      width: '20ch',
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
