import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    marginTop: '2rem',
    width: '100%',
  },
  section: {
    width: '100%',
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, auto)',

    'slideInner___2mfX9 carousel__inner-slide': {
      background: 'red',
    },
  },
  link: {
    position: 'absolute',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '6em',
    background: 'rgb(0,0,0)',
    width: '80px',
    padding: '20px',
    textAlign: 'center',
    zIndex: 1,
  },
  provider: {
    width: '100%',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    margin: 'auto',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#fafafa',
    outline: 'none',
    border: 'none',
  },
  nextButton: {
    position: 'absolute',
    margin: 'auto',
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#fafafa',
    outline: 'none',
    border: 'none',
  },
  img: {
    height: 200,
    width: 200,
  },
  slide: {
    marginLeft: '1.5rem',
    textDecoration: 'none',
    width: '14rem',
  },
  slideComponent: {
    height: '18rem',
  },
  text: {
    textDecoration: 'none',
    color: 'black',
  },
}));
export default useStyles;
