import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95vw',
    display: 'grid',

    gridTemplateRows: '100px 1fr 100px',
    // gridTemplateColumns: '10rem 90rem',
    gridTemplateColumns: 'max-content 1fr',

    border: ' 5px solid red;',
    '& body': {
      background: 'white',
      lineHeight: 1.5,
      fontSize: '0.875rem',
      marginTop: '5rem',
    },
  },
}));
export default useStyles;
