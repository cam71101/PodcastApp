import { makeStyles } from '@material-ui/styles';

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
      fontSize: '.95rem',
    },
    '& .rhap_footer': {
      textAlign: 'center',
      fontSize: '.75rem',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
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
    [theme.breakpoints.down('md')]: {
      width: '128px',
      height: '128px',
    },
  },
  loading: {
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  cover: {
    width: '100%',
    height: '100%',
  },
}));

export default useStyles;
