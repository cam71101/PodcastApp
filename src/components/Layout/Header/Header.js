import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './headerStyles';
import SearchBar from 'material-ui-search-bar';

const Header = (props) => {
  const [searchValue, setSearchValue] = React.useState('');
  const classes = useStyles();

  console.log(props);

  const searchPodcasts = () => {
    props.history.push({
      pathname: '/search/' + searchValue,
    });
  };

  return (
    <div className={classes.root}>
      <SearchBar
        value={searchValue}
        onChange={(newValue) => setSearchValue(newValue)}
        onRequestSearch={() => searchPodcasts()}
      />
      <Typography variant="h2">Podcast App</Typography>
    </div>
  );
};

export default Header;
