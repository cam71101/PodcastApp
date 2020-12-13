import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';
import Slide from '@material-ui/core/Slide';

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
    '& .rhap_header': {
      textAlign: 'center',
      fontSize: '.95rem',
    },
    '& .rhap_footer': {
      textAlign: 'center',
      fontSize: '.75rem',
    },
  },
  mediaPlayer: {
    width: '100%',
    border: 'none',
    outline: 'none',
    zIndex: 1,
  },
  picture: {
    width: '8.2rem',
    height: '7.5rem',
    position: 'relative',
  },
  loading: {
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  cover: {
    width: '100%',
    height: '100%',
  },
}));

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

  return (
    <Slide direction="up" in={autoPlay} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <div className={classes.picture}>
          {isLoading ? (
            <CircularProgress
              data-test="component-loading"
              className={classes.loading}
            />
          ) : null}
          <CardMedia image={image} className={classes.cover} />
        </div>
        <AudioPlayer
          src={audio}
          autoPlay={autoPlay}
          onCanPlay={() => setIsLoading(false)}
          className={classes.mediaPlayer}
          header={trackName}
          footer={artistName}
        ></AudioPlayer>
      </div>
    </Slide>
  );
};

export default Player;
