import React from 'react';
import { withRouter } from 'react-router-dom';

import useStyles from './layoutStyles';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import Drawer from './Drawer/Drawer';

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.layoutRoot}>
      <Drawer {...props} />
      {props.children}
      <AudioPlayer />
    </div>
  );
};

export default withRouter(Layout);
