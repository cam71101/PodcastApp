import React, { useEffect } from 'react';
import useStyles from './searchPageStyles';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { withRouter, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '../../components/Paginantion';

import MenuBar from '../MenuBar/MenuBar';
import useHttp from '../../hooks/http';
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import PodcastsLayoutPages from '../../components/PodcastsLayoutPages/PodcastsLayoutPages';
import { current } from '@reduxjs/toolkit';
// import Pagination from '../../components/Paginantion';

const SearchPage = (props) => {
  const [posts, setPosts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [podcastsPerPage, setPodcastsPerPage] = React.useState(10);
  const classes = useStyles();
  const { isLoading, error, data, sendRequest, page } = useHttp();

  useEffect(() => {
    const term = props.location.pathname.replace('/search/', '');
    // console.log(props.location.search);

    if (props.location.search) {
      setCurrentPage(
        props.location.search.charAt(props.location.search.length - 1)
      );
    }
    if (!data) {
      sendRequest(`https://itunes.apple.com/search?term=${term}&media=podcast`);
    }
  }, []);

  // props.location.pathname;

  let listPodcasts = null;
  let totalPodcasts = null;

  if (data) {
    const indexOfLastPodcasts = currentPage * podcastsPerPage;
    const indexOfFirstPodcasts = indexOfLastPodcasts - podcastsPerPage;
    const currentPodcasts = data.results.slice(
      indexOfFirstPodcasts,
      indexOfLastPodcasts
    );
    totalPodcasts = data.results.length;

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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const page = props.location.pathname.slice(-1);
    props.history.push(props.match.url + '?' + pageNumber);
  };

  return (
    <div>
      <PodcastsLayoutPages isLoading={isLoading} podcasts={listPodcasts} />
      <Pagination
        {...props}
        podcastsPerPage={podcastsPerPage}
        totalPodcasts={totalPodcasts}
        paginate={paginate}
      />
      {/* <Switch>
        <Route path={props.match.url + '/:page_number'}></Route>
      </Switch> */}

      {/* <Route
        path={props.match.url + '?:id'}
        exact
        component={PodcastsLayoutPages}
      />  */}
      {/* <Pagination
        pageNumber={currentPage}
        totalPages={pageNumbers.length}
        match={props.match.url}
      /> */}
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onUpdateData: (link) => dispatch(actions.updateData(link)),
//   };
// };

export default withRouter(SearchPage);

// export default SearchPage;
