import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: 220,
    height: 300,
    borderRadius: 12,
    padding: 12,
    alignSelf: 'flex-start',
  },
  media: {
    margin: 0,
    borderRadius: 6,
    width: 200,
    height: 200,
  },
  cardContent: {
    padding: 0,
  },
}));

export default useStyles;
