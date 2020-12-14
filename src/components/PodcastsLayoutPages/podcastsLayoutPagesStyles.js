import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    gridRow: 2,
    rowGap: '2rem',
    columnGap: '1rem',
    marginBottom: '1rem',
    marginTop: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },
  loading: {
    margin: 'auto',
  },
}));
export default useStyles;
