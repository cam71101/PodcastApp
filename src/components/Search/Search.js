import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './searchStyles';

const Search = ({ searchPodcasts, setSearchValue, searchValue }) => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <form onSubmit={(e) => searchPodcasts(e)} aria-label="form-search">
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          value={searchValue}
          onChange={setSearchValue}
        />
      </form>
    </div>
  );
};

export default Search;
