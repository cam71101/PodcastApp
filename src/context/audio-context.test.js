import React from 'react';
import { render, screen } from '@testing-library/react';

import { AudioContext } from './audio-context';
import AudioPlayer from '../containers/Layout/AudioPlayer/AudioPlayer';

window.HTMLMediaElement.prototype.load = () => {};
window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};
window.HTMLMediaElement.prototype.addTextTrack = () => {};

test('UserGreeter salutes an anonymous user', () => {
  const toggleAudio = jest.fn();

  render(
    <AudioContext.Provider
      value={{
        audio:
          'http://open.live.bbc.co.uk/mediaselector/6/redir/version/2.0/mediaset/audio-nondrm-download/proto/http/vpid/p0914w32.mp3',
        image:
          'https://is5-ssl.mzstatic.com/image/thumb/Podcasts124/v4/c1/bc/81/c1bc810c-829b-0202-711f-08a7c4bd30b5/mza_14488352490409303225.jpg/600x600bb.jpg',
        toggleAudio: toggleAudio,
        autoPlay: false,
        trackName: null,
        artistName: null,
      }}
    >
      <AudioPlayer />
    </AudioContext.Provider>
  );

  const spinner = screen.getByLabelText('component-loading');
  expect(spinner).toBeDefined();
});
