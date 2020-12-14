import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 220,
    height: 300,
    borderRadius: 12,
    paddingTop: 5,
    alignSelf: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      width: 130,
      height: 200,
    },
  },
  media: {
    margin: 'auto',
    borderRadius: 6,
    width: 200,
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: 120,
      height: 120,
    },
  },
  cardContent: {
    padding: 4,
  },
}));

export default useStyles;
