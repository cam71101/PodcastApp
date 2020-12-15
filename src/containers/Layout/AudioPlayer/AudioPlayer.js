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

const Player = () => {
  const [autoPlay, setAutoPlay] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const audio = React.useContext(AudioContext).audio;
  const image = React.useContext(AudioContext).image;
  const artistName = React.useContext(AudioContext).artistName;
  const trackName = React.useContext(AudioContext).trackName;
  const classes = useStyles();

  React.useEffect(() => {
    if (audio) {
      setIsLoading(true);
      setAutoPlay(true);
    }
  }, [audio]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Slide direction="up" in={autoPlay} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        {matches ? null : (
          <div className={classes.picture}>
            {isLoading ? (
              <CircularProgress
                data-test="component-loading"
                className={classes.loading}
              />
            ) : null}
            <CardMedia image={image} className={classes.cover} />
          </div>
        )}
        <AudioPlayer
          src={audio}
          autoPlay={autoPlay}
          onCanPlay={() => setIsLoading(false)}
          className={classes.mediaPlayer}
          header={trackName}
          footer={artistName}
        />
      </div>
    </Slide>
  );
};

export default Player;
