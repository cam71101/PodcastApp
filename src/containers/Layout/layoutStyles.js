import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  layoutRoot: {
    width: '85vw',
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '100%',
    marginLeft: 240,
    '& body': {
      background: 'white',
      lineHeight: 1.5,
      fontSize: '0.875rem',
      marginTop: '5rem',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '1rem',
      width: '100vw',
    },
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      width: '100vw',
    },
  },
}));
export default useStyles;
