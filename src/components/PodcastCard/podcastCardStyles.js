import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 220,
    height: 300,
    borderRadius: 12,
    padding: 12,
    alignSelf: 'flex-start',
  },
  media: {
    borderRadius: 6,
    width: 180,
    height: 180,
  },
}));

export default useStyles;
