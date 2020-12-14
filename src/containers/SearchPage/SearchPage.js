import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';

import useHttp from '../../hooks/http';
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import PodcastsLayoutPages from '../../components/PodcastsLayoutPages/PodcastsLayoutPages';
import useStyles from './searchPageStyles';

const SearchPage = (props) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [podcastsPerPage, setPodcastsPerPage] = React.useState(25);

  const classes = useStyles();
  const { isLoading, error, data, sendRequest } = useHttp();

  useEffect(() => {
    const term = props.location.pathname.replace('/search/', '');
    if (props.location.search) {
      setCurrentPage(
        props.location.search.charAt(props.location.search.length - 1)
      );
    }
    sendRequest(
      `https://itunes.apple.com/search?term=${term}&media=podcast&limit=1000`
    );
  }, [props.location.pathname]);

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
        <Link to={'/podcast/' + podcast.collectionId}>
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

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPodcasts / podcastsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (event, pageNumber) => {
    setCurrentPage(pageNumber);
    props.history.push(props.match.url + '?' + pageNumber);
  };

  return (
    <div className={classes.root}>
      <PodcastsLayoutPages
        isLoading={isLoading}
        podcasts={listPodcasts}
        className={classes.loading}
      />
      <Pagination
        count={pageNumbers.length}
        page={currentPage}
        onChange={paginate}
      />
    </div>
  );
};

export default withRouter(SearchPage);
