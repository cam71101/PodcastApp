import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    gridRow: 3,
    gridColumn: '2 / -1',
    border: ' 5px solid red;',
    display: 'flex',
    justifyContent: 'center',
  },
}));
export default useStyles;
