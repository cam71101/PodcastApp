import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import Slide from '@material-ui/core/Slide';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import useStyles from './layoutStyles';
import AudioPlayer from './AudioPlayer';
import AuthContext from '../../context/audio-context';
import Drawer from './Drawer';

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer {...props} />
      {props.children}
      <AudioPlayer />
    </div>
  );
};

export default withRouter(Layout);
