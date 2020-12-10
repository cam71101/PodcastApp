import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    gridRow: 1,
    rowGap: '2rem',
    columnGap: '1rem',
    marginBottom: '1rem',
    marginTop: '7rem',
    display: 'flex',
    flexWrap: 'wrap',

    marginBottom: '6rem',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    // alignContent: 'flex-start',
  },
}));
export default useStyles;
