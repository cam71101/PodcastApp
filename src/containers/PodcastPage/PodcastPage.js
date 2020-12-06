import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { withRouter } from 'react-router-dom';

import MenuBar from '../MenuBar/MenuBar';
import useHttp from '../../hooks/http';
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import useStyles from './podcastPageStyles';
import PodcastsLayout from '../../components/PodcastsLayout/PodcastsLayout';

const PodcastPage = (props) => {
  const classes = useStyles();
  const { isLoading, error, data, sendRequest } = useHttp();

  useEffect(() => {
    const term = props.location.pathname.replace('/podcast/', '');
    sendRequest(`https://itunes.apple.com/search?term=${term}&media=podcast`);
  }, [props.location.pathname]);

  let listPodcasts = null;

  if (data) {
    console.log(data);
    listPodcasts = data.results.map((podcast) => {
      return (
        <PodcastCard
          image={podcast.artworkUrl600}
          artist={podcast.collectionName}
          artistName={podcast.artistName}
          data-test="component-card"
        />
      );
    });
  }

  return (
    <React.Fragment>
      <MenuBar />
      <PodcastsLayout isLoading={isLoading} podcasts={listPodcasts} />
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateData: (link) => dispatch(actions.updateData(link)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(PodcastPage));
