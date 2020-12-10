import React, { Component } from 'react';
import { withMediaProps } from 'react-media-player';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import Button from '@material-ui/core/Button';

class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }

  _handlePlayPause = () => {
    this.props.media.playPause();
  };

  render() {
    const { className, style, media } = this.props;
    return (
      <Button
        type="button"
        className={className}
        style={style}
        onClick={this._handlePlayPause}
      >
        {media.isPlaying ? (
          <PauseCircleOutlineIcon />
        ) : (
          <PlayCircleOutlineIcon />
        )}
      </Button>
    );
  }
}

export default withMediaProps(CustomPlayPause);
