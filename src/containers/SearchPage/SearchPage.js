import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';

import useHttp from '../../hooks/http';
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import useStyles from './searchPageStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PodcastsLayout from '../../components/PodcastsLayout/PodcastsLayout';
import Typography from '@material-ui/core/Typography';

const SearchPage = (props) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [podcastsPerPage] = React.useState(25);

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
  }, [props.location.pathname, props.location.search, sendRequest]);

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
        <Link to={'/podcast/' + podcast.collectionId} className={classes.link}>
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
    <div className={classes.rootSearchPage}>
      {isLoading ? (
        <CircularProgress
          data-test="component-loading"
          className={classes.loading}
        />
      ) : (
        <React.Fragment>
          <Typography variant="h4" className={classes.title}>
            Search results for...
            {'"' + props.location.pathname.replace('/search/', '') + '"'}
          </Typography>
          {error ? (
            <Typography className={classes.error} variant="h5">
              No results found!
            </Typography>
          ) : (
            <React.Fragment>
              <PodcastsLayout
                podcasts={listPodcasts}
                className={classes.loading}
              />
              <Pagination
                count={pageNumbers.length}
                page={currentPage}
                onChange={paginate}
                className={classes.pages}
              />
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default withRouter(SearchPage);
