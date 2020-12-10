import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    display: 'grid',
    gridTemplateRows: '100px',
    gridTemplateColumns: '250 1fr',
    // height: '40vh',
    // flexGrow: 1,
    // flexWrap: 'wrap',
    // border: '5px solid green',
    // gridRow: 1,
    padding: '5rem',
    margin: 'auto',
    marginBottom: '4rem',
  },
  media: {
    // margin: 0,
    width: 250,
    height: 250,
    gridColumn: 1,
    // maxHeight: '100%',
    // minWidth: '10%',
    // objectFit: 'cover',
    // verticalAlign: 'bottom',
  },
  cardContent: {
    gridColumn: 2,
    paddingTop: '.1rem',
  },
  tag: {
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));
export default useStyles;
