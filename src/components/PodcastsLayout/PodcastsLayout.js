import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import useStyles from './podcastsLayoutStyles';

const PodcastsLayout = ({ isLoading, podcasts }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} data-test="component-home">
      {isLoading ? <CircularProgress data-test="component-loading" /> : null}
      {podcasts}
    </div>
  );
};

PodcastsLayout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  podcasts: PropTypes.array,
};

export default PodcastsLayout;
