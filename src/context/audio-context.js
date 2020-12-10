import React from 'react';

export const AudioContext = React.createContext({
  audio: null,
  toggleAudio: () => {},
  autoPlay: false,
});

export default (props) => {
  const [audio, setAudio] = React.useState(null);
  const [autoPlay, setAutoPlay] = React.useState(false);

  const toggleAudio = (audioLink) => {
    setAudio(audioLink);
    setAutoPlay(true);
  };

  return (
    <AudioContext.Provider value={{ audio: audio, setAudio: toggleAudio }}>
      {props.children}
    </AudioContext.Provider>
  );
};
