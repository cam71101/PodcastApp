import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 220,
    height: 300,
    borderRadius: 12,
    paddingTop: 5,
    alignSelf: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      width: 140,
      height: 210,
    },
  },
  media: {
    margin: 'auto',
    borderRadius: 6,
    width: 200,
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: 125,
      height: 125,
    },
  },
  cardContent: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
  },
}));

export default useStyles;
