import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import useStyles from './drawerLinksStyles';

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

const DrawerLinks = ({ closeDrawer, logo }) => {
  const classes = useStyles();

  return (
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
      <Link className={classes.link} to="/popular" aria-label="popular">
        <ListItem button onClick={closeDrawer} aria-label="popular">
          <ListItemIcon aria-label="popular">
            <FontAwesomeIcon icon={faStar} color="grey" size="lg" />
          </ListItemIcon>
          <ListItemText primary="Popular" aria-label="popular" />
        </ListItem>
      </Link>
      <Divider />
      <List>
        {listItems.map((text, index) => (
          <Link
            className={classes.link}
            to={'/category/' + text.name + '/' + text.id}
            key={index}
            aria-label={text.name}
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
};

export default DrawerLinks;
