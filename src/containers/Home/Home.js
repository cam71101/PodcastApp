import React, { useEffect, useState } from 'react';
import useStyles from './homeStyles';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Link } from 'react-router-dom';

import useHttp from '../../hooks/http';
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import PodcastsLayout from '../../components/PodcastsLayout/PodcastsLayout';

const Home = (props) => {
  const classes = useStyles();
  const { isLoading, error, data, sendRequest } = useHttp();

  React.useEffect(() => {
    sendRequest(
      'https://rss.itunes.apple.com/api/v1/us/podcasts/top-podcasts/all/uk/explicit.json'
    );
  }, []);

  let listPodcasts = [];

  if (data) {
    listPodcasts = data.feed.results.map((podcast) => {
      return (
        <Link to={'/podcast/' + podcast.id}>
          <PodcastCard
            image={podcast.artworkUrl100}
            artist={podcast.name}
            artistName={podcast.artistName}
            data-test="component-card"
          />
        </Link>
      );
    });
  }

  return <PodcastsLayout isLoading={isLoading} podcasts={listPodcasts} />;
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onUpdateData: (link) => dispatch(actions.updateData(link)),
//   };
// };

export default Home;
