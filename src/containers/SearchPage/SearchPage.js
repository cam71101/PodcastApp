import React, { useEffect } from 'react';
import useStyles from './searchPageStyles';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import MenuBar from '../MenuBar/MenuBar';
import useHttp from '../../hooks/http';
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import PodcastsLayoutPages from '../../components/PodcastsLayoutPages/PodcastsLayoutPages';
import Pagination from '@material-ui/lab/Pagination';

const SearchPage = (props) => {
  const [posts, setPosts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [podcastsPerPage, setPodcastsPerPage] = React.useState(10);
  const classes = useStyles();
  const { isLoading, error, data, sendRequest } = useHttp();

  useEffect(() => {
    const term = props.location.pathname.replace('/search/', '');
    sendRequest(`https://itunes.apple.com/search?term=${term}&media=podcast`);
  }, [props.location.pathname]);

  let listPodcasts = null;

  if (data) {
    const indexOfLastPodcasts = currentPage * podcastsPerPage;
    const indexOfFirstPodcasts = indexOfLastPodcasts - podcastsPerPage;
    const currentPodcasts = data.results.slice(
      indexOfFirstPodcasts,
      indexOfLastPodcasts
    );

    listPodcasts = currentPodcasts.map((podcast) => {
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
  return <Pagination></Pagination>;

  // <PodcastsLayoutPages isLoading={isLoading} podcasts={listPodcasts} />;
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onUpdateData: (link) => dispatch(actions.updateData(link)),
//   };
// };

// export default withRouter(connect(null, mapDispatchToProps)(PodcastsPage));

export default SearchPage;
