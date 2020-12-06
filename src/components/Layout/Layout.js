import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import useStyles from './layoutStyles';

import { Link, Route, withRouter } from 'react-router-dom';

const Layout = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header {...props} />
      {props.children}
      <Footer />
    </div>
  );
};

export default withRouter(Layout);
