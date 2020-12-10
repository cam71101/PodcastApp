import React, { useEffect } from 'react';
import useStyles from './podcastsPageStyles';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';

import useHttp from '../../hooks/http';
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import PodcastsLayout from '../../components/PodcastsLayout/PodcastsLayout';

const PodcastsPage = (props) => {
  const classes = useStyles();
  const { isLoading, error, data, sendRequest } = useHttp();

  useEffect(() => {
    const index = props.location.pathname.lastIndexOf('/');
    const result = props.location.pathname.substring(index + 1);
    sendRequest(
      `https://itunes.apple.com/search?term=podcast&genreId=${result}&limit=50`
    );
  }, [props.location.pathname]);

  let listPodcasts = null;

  if (data) {
    listPodcasts = data.results.map((podcast) => {
      return (
        <Link to={'/podcast/' + podcast.collectionId} key={podcast.id}>
          <PodcastCard
            image={podcast.artworkUrl600}
            artist={podcast.collectionName}
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

// export default withRouter(connect(null, mapDispatchToProps)(PodcastsPage));

export default PodcastsPage;
