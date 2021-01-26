import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Slide from '@material-ui/core/Slide';
import AudioPlayer from 'react-h5-audio-player';
import CardMedia from '@material-ui/core/CardMedia';
import 'react-h5-audio-player/lib/styles.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { AudioContext } from '../../../context/audio-context';
import useStyles from './audioPlayerStyles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';

const Player = () => {
  const [autoPlay, setAutoPlay] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const audioContext = React.useContext(AudioContext);
  const { audio, image, artistName, trackName } = audioContext;
  const classes = useStyles();

  React.useEffect(() => {
    if (audio) {
      setIsLoading(true);
      setAutoPlay(true);
    }
  }, [audio]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  let progress = null;

  if (isLoading) {
    progress = (
      <CircularProgress
        className={classes.loading}
        aria-label="component-loading"
      />
    );
  } else {
    progress = null;
  }

  return (
    <Slide direction="up" in={autoPlay} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <div className={classes.container}>
          {matches ? null : (
            <div className={classes.picture}>
              {progress}
              <CardMedia image={image} className={classes.cover} />
            </div>
          )}
          {matches ? progress : null}
          <AudioPlayer
            src={audio}
            autoPlay={autoPlay}
            onCanPlay={() => setIsLoading(false)}
            className={classes.mediaPlayer}
            header={trackName}
            footer={artistName}
          />
          <Button
            className={classes.closeButton}
            onClick={() => setAutoPlay(false)}
            disableFocusRipple
            size="small"
          >
            <HighlightOffIcon
              fontSize="small"
              className={classes.closeButtonMargin}
            />
          </Button>
        </div>
      </div>
    </Slide>
  );
};

export default Player;
