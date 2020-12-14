import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    gridRow: 2,
    width: '70vw',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '85vw',
      marginLeft: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: 'auto',
    },
  },
  table: {
    width: '100%',
    // minWidth: 100,
  },
  btn: {
    textTransform: 'none',
    textAlign: 'left',
  },
}));

export default useStyles;
