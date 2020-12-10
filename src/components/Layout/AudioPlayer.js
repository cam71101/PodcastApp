import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';

import { AudioContext } from '../../context/audio-context';
import { Media, Player, controls } from 'react-media-player';
import CustomPlayPause from './CustomPlayPause';
const { CurrentTime, SeekBar, Duration, MuteUnmute, Volume } = controls;

const muiTheme = createMuiTheme({});

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    border: ' 5px solid red;',
    height: '5rem',
  },
  mediaPlayer: {
    height: '1rem',
  },
}));

const AudioPlayer = () => {
  const [autoPlay, setAutoPlay] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const audio = React.useContext(AudioContext).audio;
  const classes = useStyles();

  React.useEffect(() => {
    if (audio) {
      setIsLoading(true);
      setAutoPlay(true);
    }
  }, [audio]);

  return (
    <div className={classes.root}>
      {isLoading ? <CircularProgress data-test="component-loading" /> : null}
      <Media>
        <div className="media">
          <div className={classes.mediaPlayer}>
            <Player
              src={audio}
              autoPlay={autoPlay}
              onPlay={() => setIsLoading(false)}
            />
          </div>
          <div className="media-controls">
            <CustomPlayPause />
            <CurrentTime />
            <SeekBar className={classes.seekBar} />
            <Duration />
            <MuteUnmute />
            <Volume />
          </div>
        </div>
      </Media>
    </div>
  );
};

export default AudioPlayer;
