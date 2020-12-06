import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    gridColumn: '2 / -1',
    gridRow: 1,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    border: ' 5px solid red;',
  },
}));
export default useStyles;
