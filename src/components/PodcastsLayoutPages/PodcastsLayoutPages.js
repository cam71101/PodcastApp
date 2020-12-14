import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './podcastsLayoutPagesStyles';

const PodcastsLayoutPages = ({ podcasts, isLoading }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} data-test="component-home">
      {isLoading ? (
        <CircularProgress
          data-test="component-loading"
          className={classes.loading}
        />
      ) : null}
      {podcasts}
    </div>
  );
};

export default PodcastsLayoutPages;
