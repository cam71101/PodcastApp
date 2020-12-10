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
      <ListItem key={item.id}>
        <Link to={'/category/' + item.name + '/' + item.id}>
          <Button>{item.name}</Button>
        </Link>
      </ListItem>
    );
  });

  return (
    <div className={classes.root} data-test="component-drawer">
      <ListItem>
        <Link to={'/'}>
          <Button data-test="component-button">Home</Button>
        </Link>
      </ListItem>
      {items}
    </div>
  );
};
export default withRouter(MenuBar);
