import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import useStyles from './layoutStyles';
import AudioPlayer from './AudioPlayer';
import AuthContext from '../../context/audio-context';
import Drawer from './Drawer';

const Layout = (props) => {
  const [audio, setAudio] = React.useState();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer {...props} />
      {props.children}
      <AudioPlayer />
      {/* <Footer /> */}
    </div>
  );
};

export default withRouter(Layout);
