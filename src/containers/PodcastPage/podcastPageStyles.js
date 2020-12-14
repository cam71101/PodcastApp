import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  rootPodcastPage: {
    width: '100%',
    height: '70rem',
    gridRow: 1,
    rowGap: '2rem',
    columnGap: '1rem',
    marginBottom: '8rem',
    marginTop: '1rem',
    display: 'grid',
    gridTemplateRows: 'minmax(max-content, 200rem) max-content 2rem',
    gridTemplateColums: '1fr',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
      marginTop: '2rem',
      width: '90%',
      rowGap: 0,
    },
  },
  pages: {
    margin: 'auto',
    marginBottom: '5rem',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: '2rem',
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
