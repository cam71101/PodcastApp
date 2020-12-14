import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '85vw',
    display: 'flex',
    '& .rhap_header': {
      textAlign: 'center',
      fontSize: '.95rem',
    },
    '& .rhap_footer': {
      textAlign: 'center',
      fontSize: '.75rem',
    },
  },
  mediaPlayer: {
    width: '100%',
    border: 'none',
    outline: 'none',
    zIndex: 1,
  },
  picture: {
    width: '8.2rem',
    height: '7.5rem',
    position: 'relative',
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
