import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  rootPodcastPage: {
    width: '100%',
    height: '70rem',
    gridRow: 1,
    columnGap: '1rem',
    marginBottom: '8rem',
    marginTop: '2rem',
    display: 'grid',
    gridTemplateRows: 'minmax(max-content, 20rem) min-content 2rem',
    gridTemplateColums: '1fr',
    [theme.breakpoints.down('xs')]: {
      marginTop: '2rem',
    },
  },
  pages: {
    margin: 'auto',
    marginBottom: '5rem',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: '10rem',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  loading: {
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  modalLoading: {
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
}));
export default useStyles;
