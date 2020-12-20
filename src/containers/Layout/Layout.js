import React from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import useStyles from './layoutStyles';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import Drawer from './Drawer/Drawer';

const Layout = (props) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={classes.layoutRoot} role="root">
      <Drawer {...props} />
      {props.children}
      <AudioPlayer />
    </div>
  );
};

export default withRouter(Layout);
