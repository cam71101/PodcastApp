import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    marginLeft: 240,
    display: 'flex',
    '& .rhap_header': {
      textAlign: 'center',
      fontSize: '.8rem',
    },
    '& .rhap_footer': {
      textAlign: 'center',
      fontSize: '.75rem',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
    },
    '& svg': {
      color: theme.palette.primary.main,
    },
  },
  mediaPlayer: {
    width: '90%',
    border: 'none',
    outline: 'none',
    zIndex: 0,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  picture: {
    width: '128px',
    height: '128px',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      width: '128px',
      height: '128px',
    },
  },
  loading: {
    zIndex: 100,
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    [theme.breakpoints.down('xs')]: {
      bottom: 0,
      marginBottom: 27,
    },
  },
  cover: {
    width: '100%',
    height: '100%',
  },
  container: {
    display: 'flex',
    width: '100%',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    bottom: 100,
    right: '3%',
    zIndex: 30000,
    [theme.breakpoints.up('xl')]: {
      right: '5%',
    },
    [theme.breakpoints.down('md')]: {
      right: 0,
    },
    [theme.breakpoints.down('xs')]: {
      bottom: 100,
    },
    padding: 0,
    margin: 0,
    minWidth: 0,
  },
  closeButtonMargin: {
    padding: 0,
    margin: 0,
  },
}));

export default useStyles;
