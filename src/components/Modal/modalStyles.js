import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rootModal: {
    maxWidth: 800,
    maxHeight: 900,
    display: 'flex',
    padding: '1.5rem',
    outline: 'none',
    overflow: 'auto',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 300,
      maxHeight: 450,
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1rem',
      paddingTop: 0,
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  artWork: {
    height: '12rem',
    width: '12rem',
    [theme.breakpoints.down('xs')]: {
      height: '10rem',
      width: '10rem',
    },
  },
  cardContent: {
    paddingTop: 0,
  },
  date: {
    marginTop: '1rem',
  },
  close: {
    position: 'absolute',
    margin: 'auto',
    right: 0,
    top: 0,
    [theme.breakpoints.down('xs')]: {
      position: 'static',
      alignSelf: 'flex-end',
      paddingLeft: '5rem',
      margin: 0,
    },
  },
}));

export default useStyles;
