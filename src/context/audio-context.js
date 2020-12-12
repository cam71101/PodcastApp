import React from 'react';

export const AudioContext = React.createContext({
  audio: null,
  image: null,
  toggleAudio: () => {},
  autoPlay: false,
});

export default (props) => {
  const [audio, setAudio] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [autoPlay, setAutoPlay] = React.useState(false);

  const toggleAudio = (audioLink, audioImage) => {
    setAudio(audioLink);
    setImage(audioImage);
    setAutoPlay(true);
  };

  return (
    <AudioContext.Provider
      value={{ audio: audio, image: image, setAudio: toggleAudio }}
    >
      {props.children}
    </AudioContext.Provider>
  );
};
