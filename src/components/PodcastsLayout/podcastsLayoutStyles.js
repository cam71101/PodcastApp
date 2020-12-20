import { makeStyles } from '@material-ui/core/styles';

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
    marginLeft: '7rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  loading: {
    position: 'absolute',
    margin: 'auto',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

export default useStyles;
