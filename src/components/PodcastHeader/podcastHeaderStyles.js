import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  rootPodcastHeader: {
    gridRow: 1,
    width: '65vw',
    display: 'grid',
    gridTemplateRows: 'max-content',
    gridTemplateColumns: '250 1fr',
    padding: '5rem',
    paddingBottom: '1rem',
    margin: 'auto',
    marginTop: 0,
    [theme.breakpoints.down('md')]: {
      width: '95vw',
      paddingLeft: '.2rem',
      paddingRight: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      paddingTop: '3rem',
      width: '100%',
    },
  },
  media: {
    width: 250,
    height: 250,
    gridColumn: 1,
  },
  cardContent: {
    gridColumn: 2,
    paddingTop: '.1rem',
  },
  tag: {
    display: 'flex',
    marginTop: '1rem',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));
export default useStyles;
