import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import MenuBar from '../MenuBar/MenuBar';
import useHttp from '../../hooks/http';
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import useStyles from './podcastPageStyles';
import PodcastsLayout from '../../components/PodcastsLayout/PodcastsLayout';
import Axios from 'axios';

const PodcastPage = (props) => {
  const classes = useStyles();
  const { isLoading, error, data, sendRequest } = useHttp();

  useEffect(() => {
    const term = props.location.pathname.replace('/podcast/', '');
    // sendRequest(`https://itunes.apple.com/search?term=${term}&media=podcast`);
    const response = unirest
      .post('https://listen-api.listennotes.com/api/v2/podcasts')
      .header('X-ListenAPI-Key', '8cdcd14f4279491aba4bf627524febe2')
      .header('Content-Type', 'application/x-www-form-urlencoded')
      .send(
        'ids=3302bc71139541baa46ecb27dbf6071a,68faf62be97149c280ebcc25178aa731,37589a3e121e40debe4cef3d9638932a,9cf19c590ff0484d97b18b329fed0c6a'
      )
      .send(
        'rsses=https://rss.art19.com/recode-decode,https://rss.art19.com/the-daily,https://www.npr.org/rss/podcast.php?id=510331,https://www.npr.org/rss/podcast.php?id=510331'
      )
      .send('itunes_ids=1457514703,1386234384,659155419')
      .send('show_latest_episodes=1')
      .send('next_episode_pub_date=1557394247000');
    response.toJSON();
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
