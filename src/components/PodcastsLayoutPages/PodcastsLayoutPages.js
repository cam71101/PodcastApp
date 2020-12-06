import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './podcastsLayoutPagesStyles';
import PodcastCard from '../../components/PodcastCard/PodcastCard';

const PodcastsLayoutPages = ({ podcasts, isLoading }) => {
  const classes = useStyles();

  // let listPodcasts = null;
  // console.log(podcasts);
  // if (podcasts) {
  //   listPodcasts = podcasts.results.map((podcast) => {
  //     return (
  //       <PodcastCard
  //         image={podcast.artworkUrl600}
  //         artist={podcast.collectionName}
  //         artistName={podcast.artistName}
  //         data-test="component-card"
  //       />
  //     );
  //   });
  // }

  return (
    <div className={classes.root} data-test="component-home">
      {isLoading ? <CircularProgress data-test="component-loading" /> : null}
      {podcasts}
    </div>
  );
};

export default PodcastsLayoutPages;
