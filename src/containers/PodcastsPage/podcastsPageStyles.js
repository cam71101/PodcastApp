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
    marginBottom: '5rem',
  },
}));
export default useStyles;
