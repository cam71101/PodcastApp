import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import HomeIcon from '@material-ui/icons/Home';
import {
  faPalette,
  faBriefcase,
  faTheaterMasks,
  faSchool,
  faLandmark,
  faMusic,
  faPray,
  faFlask,
  faUsers,
  faFutbol,
  faLaptop,
  faGamepad,
  faFilm,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

import useStyles from './drawerStyles';

function ResponsiveDrawer(props) {
  const [searchValue, setSearchValue] = React.useState('');
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { window } = props;

  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  const listItems = [
    {
      name: 'Arts',
      id: 1301,
      icon: faPalette,
    },
    { name: 'Business', id: 1321, icon: faBriefcase },
    { name: 'Comedy', id: 1303, icon: faTheaterMasks },
    { name: 'Education', id: 1304, icon: faSchool },
    { name: 'History', id: 1487, icon: faLandmark },
    { name: 'Music', id: 1310, icon: faMusic },
    { name: 'Religion & Spirituality', id: 1314, icon: faPray },
    { name: 'Science Fiction', id: 1485, icon: faFlask },
    { name: 'Society & Culture', id: 1324, icon: faUsers },
    { name: 'Sports', id: 1545, icon: faFutbol },
    { name: 'Technology', id: 1318, icon: faLaptop },
    { name: 'TV and Film', id: 1309, icon: faFilm },
    { name: 'Video Games', id: 1509, icon: faGamepad },
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div className={classes.logoContainer}>
        <img src={logo} className={classes.logo} />
      </div>
      <Link className={classes.link} to="/">
        <Divider />
        <ListItem button onClick={closeDrawer}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link className={classes.link} to="/popular">
        <ListItem button onClick={closeDrawer}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faStar} color="grey" size="lg" />
          </ListItemIcon>
          <ListItemText primary="Popular" />
        </ListItem>
      </Link>
      <Divider />
      <List>
        {listItems.map((text, index) => (
          <Link
            className={classes.link}
            to={'/category/' + text.name + '/' + text.id}
          >
            <ListItem button key={text.name} onClick={closeDrawer}>
              <ListItemIcon>
                <FontAwesomeIcon icon={text.icon} color="grey" size="lg" />
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const searchPodcasts = (e) => {
    e.preventDefault();
    props.history.push({
      pathname: '/search/' + searchValue,
    });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={(e) => searchPodcasts(e)}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden lgUp implementation="css">
          <Drawer
            container={container}
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
            {drawer}
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
            {drawer}
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
