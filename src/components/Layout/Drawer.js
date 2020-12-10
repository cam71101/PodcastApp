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
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
    zIndex: 1,
    marginTop: '3rem',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: {
    // marginRight: '1.6rem',
    minWidth: '56px',
    flexShrink: 0,
    display: 'inline-flex',
    paddingRight: '1.5rem',
  },
  link: {
    color: 'black',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function ResponsiveDrawer(props) {
  const [searchValue, setSearchValue] = React.useState('');
  const { window } = props;

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
      <Link className={classes.link} to="/">
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faStar} color="grey" size="lg" />
          </ListItemIcon>
          <ListItemText primary="Popular" />
        </ListItem>
        <Divider />
      </Link>
      <List>
        {listItems.map((text, index) => (
          <Link
            className={classes.link}
            to={'/category/' + text.name + '/' + text.id}
          >
            <ListItem button key={text.name}>
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
    // console.log(searchValue);
    props.history.push({
      pathname: '/search/' + searchValue,
    });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Podcast App
          </Typography>

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
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
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
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
