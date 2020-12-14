import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    maxHeight: 900,
    display: 'flex',
    padding: '1.5rem',
    outline: 'none',
    overflow: 'auto',
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
  },
  cardContent: {
    paddingTop: 0,
  },
  date: {
    marginTop: '1rem',
  },
}));

export default useStyles;
