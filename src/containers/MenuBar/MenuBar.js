import React, { useState, forwardRef } from 'react';
import { List, ListItem, Collapse, Button, Drawer } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Link, Route, withRouter } from 'react-router-dom';

import useStyles from './menuBarStyles';
import sideBarItems from '../../utils/sideBarItems';

const MenuBar = () => {
  const classes = useStyles();

  const items = sideBarItems.map((item) => {
    return (
      <ListItem key={item}>
        {item === 'Home' ? (
          <Link to={'/'}>
            <Button>{item}</Button>
          </Link>
        ) : (
          <Link to={'/category/' + item}>
            <Button>{item}</Button>
          </Link>
        )}
      </ListItem>
    );
  });

  return (
    <div className={classes.root} data-test="component-drawer">
      <List data-test="component-list">{items}</List>
    </div>
  );
};
export default withRouter(MenuBar);
