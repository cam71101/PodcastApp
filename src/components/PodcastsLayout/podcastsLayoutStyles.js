import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  rootPodcastsLayout: {
    width: '100%',
    gridRow: 1,
    rowGap: '2rem',
    columnGap: '1rem',
    marginBottom: '1.5rem',
    marginTop: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  loading: {
    margin: 'auto',
  },
}));
export default useStyles;
