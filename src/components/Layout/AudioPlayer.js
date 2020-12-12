import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';

import { AudioContext } from '../../context/audio-context';
// import { Media, Player, controls } from 'react-media-player';
import CustomPlayPause from './CustomPlayPause';
// import ReactAudioPlayer from 'react-audio-player';
// const { CurrentTime, SeekBar, Duration, MuteUnmute, Volume } = controls;
import AudioPlayer from 'react-h5-audio-player';
import CardMedia from '@material-ui/core/CardMedia';

import 'react-h5-audio-player/lib/styles.css';

const muiTheme = createMuiTheme({});

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '85vw',
    display: 'flex',
  },
  mediaPlayer: {
    width: '100%',
    border: 'none',
    outline: 'none',
    zIndex: 1,
  },
  loading: {
    zIndex: 100,
    position: 'absolute',
    left: '50%',
    top: '50%',
  },
  cover: {
    width: '6rem',
    height: '6rem',
  },
}));

const Player = () => {
  const [autoPlay, setAutoPlay] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const audio = React.useContext(AudioContext).audio;
  const image = React.useContext(AudioContext).image;
  const classes = useStyles();

  React.useEffect(() => {
    if (audio) {
      setIsLoading(true);
      setAutoPlay(true);
    }
  }, [audio]);

  console.log(image);

  return (
    <div className={classes.root}>
      {isLoading ? (
        <CircularProgress
          data-test="component-loading"
          className={classes.loading}
        />
      ) : null}
      <CardMedia image={image} className={classes.cover} />
      <AudioPlayer
        src={audio}
        autoPlay={autoPlay}
        onCanPlay={() => setIsLoading(false)}
        className={classes.mediaPlayer}
        // header="hello"
      ></AudioPlayer>
    </div>
  );
};

export default Player;
