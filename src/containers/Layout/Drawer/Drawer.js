import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';
import logo from '../../../assets/logo.png';

import useStyles from './drawerStyles';
import DrawerLinks from '../../../components/DrawerLinks/DrawerLinks';
import AppBar from '../../../components/AppBar/AppBar';

function ResponsiveDrawer(props) {
  const [searchValue, setSearchValue] = React.useState('');
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  const searchPodcasts = (e) => {
    e.preventDefault();
    props.history.push({
      pathname: '/search/' + searchValue,
    });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        logo={logo}
        handleDrawerToggle={handleDrawerToggle}
        searchPodcasts={(e) => searchPodcasts(e)}
        setSearchValue={(e) => setSearchValue(e.target.value)}
        searchValue={searchValue}
      />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden lgUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <DrawerLinks logo={logo} closeDrawer={closeDrawer} />
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DrawerLinks closeDrawer={closeDrawer} logo={logo} />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
