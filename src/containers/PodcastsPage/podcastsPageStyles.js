import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  rootPodcastsPage: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  title: {
    marginLeft: '2rem',
    marginTop: '5rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}));
export default useStyles;
