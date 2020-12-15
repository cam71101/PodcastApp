import React from 'react';

export const AudioContext = React.createContext({
  audio: null,
  image: null,
  toggleAudio: () => {},
  autoPlay: false,
  trackName: null,
  artistName: null,
});

const Audio = (props) => {
  const [audio, setAudio] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [trackName, setTrackName] = React.useState(null);
  const [artistName, setArtistkName] = React.useState(null);

  const toggleAudio = (audioLink, audioImage, artistName, trackName) => {
    setAudio(audioLink);
    setImage(audioImage);
    setArtistkName(artistName);
    setTrackName(trackName);
  };

  return (
    <AudioContext.Provider
      value={{
        audio: audio,
        image: image,
        setAudio: toggleAudio,
        artistName: artistName,
        trackName: trackName,
      }}
    >
      {props.children}
    </AudioContext.Provider>
  );
};

export default Audio;
