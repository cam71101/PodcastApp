import { makeStyles } from '@material-ui/styles';
import { colors } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    gridRow: '1 / -1',
    border: ' 5px solid red;',
  },
  drawer: {
    paddingTop: '20px',
    width: '250px',
    positon: 'static',
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
  },
  btnRoot: {
    paddingLeft: '25px',
    justifyContent: 'left !important',
  },
  subMenu: {
    paddingLeft: '50px !important',
  },
}));
export default useStyles;
