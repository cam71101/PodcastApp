import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '70rem',
    gridRow: 1,
    rowGap: '2rem',
    columnGap: '1rem',
    marginBottom: '8rem',
    marginTop: '1rem',
    display: 'grid',
    gridTemplateRows: '23rem max-content 2rem',
    gridTemplateColums: '1fr',
  },
  pages: {
    margin: 'auto',
    marginBottom: '6rem',
  },
}));
export default useStyles;
