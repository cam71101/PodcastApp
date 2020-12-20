import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import useStyles from './podcastsLayoutStyles';

const PodcastsLayout = ({ isLoading, podcasts }) => {
  const classes = useStyles();
  return (
    <div className={classes.rootPodcastsLayout} data-test="component-home">
      {isLoading ? (
        <CircularProgress
          data-test="component-loading"
          className={classes.loading}
          aria-label="loading-spinner"
        />
      ) : (
        podcasts
      )}
    </div>
  );
};

PodcastsLayout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  podcasts: PropTypes.array,
};

// export default withStyles(useStyles)(PodcastsLayout);

export default PodcastsLayout;
