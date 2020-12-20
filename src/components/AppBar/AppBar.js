import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

import Search from '../Search/Search';
import useStyles from './appBarStyles.js';

const TopBar = ({
  logo,
  handleDrawerToggle,
  searchPodcasts,
  setSearchValue,
  searchValue,
}) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Hidden xsDown>
          <div className={classes.logoContainer}>
            <img src={logo} className={classes.logo} />
          </div>
        </Hidden>
        <Search
          searchPodcasts={searchPodcasts}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
