import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '85vw',
    display: 'grid',
    gridTemplateRows: '1fr',
    // gridTemplateColumns: '10rem 90rem',
    gridTemplateColumns: '1fr',
    marginLeft: '14rem',
    // border: ' 5px solid red;',
    '& body': {
      background: 'white',
      lineHeight: 1.5,
      fontSize: '0.875rem',
      marginTop: '5rem',
    },
  },
}));
export default useStyles;
