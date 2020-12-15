import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import useStyles from './podcastsLayoutStyles';

const PodcastsLayout = ({ isLoading, podcasts, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.rootPodcastsLayout} data-test="component-home">
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

PodcastsLayout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  podcasts: PropTypes.array,
};

export default PodcastsLayout;
