import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  rootPodcastsLayout: {
    width: '100%',
    gridRow: 1,
    rowGap: '2rem',
    columnGap: '1rem',
    marginBottom: '1rem',
    marginTop: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '6rem',
    marginLeft: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },

  loading: {
    margin: 'auto',
  },
}));
export default useStyles;
