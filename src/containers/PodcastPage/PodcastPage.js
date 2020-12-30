import React, { useEffect } from 'react';
import RSSParser from 'rss-parser';
import useHttp from '../../hooks/http';
import useStyles from './podcastPageStyles';
import PodcastsTable from '../../components/PodcastsTable/PodcastsTable';
import PodcastHeader from '../../components/PodcastHeader/PodcastHeader';
import CircularProgress from '@material-ui/core/CircularProgress';

import Pagination from '@material-ui/lab/Pagination';
import Modal from '../../components/Modal/Modal';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

let parser = new RSSParser();

function modalReducer(curState, action) {
  switch (action.type) {
    case 'SEND':
      return {
        modalLoading: true,
        open: false,
      };
    case 'OPEN_MODAL':
      return {
        open: true,
        trackName: action.trackName,
        artWork: action.artWork,
        artistName: action.artistName,
        releaseDate: action.releaseDate,
        trackTime: action.trackTime,
        description: action.description,
        modalLoading: false,
      };
    case 'CLOSE_MODAL':
      return {
        open: false,
      };
    case 'ERROR': {
      return {
        open: true,
        trackName: action.trackName,
        artWork: action.artWork,
        artistName: action.artistName,
        releaseDate: action.releaseDate,
        trackTime: action.trackTime,
        description: action.description,
        modalLoading: false,
      };
    }
    default:
      throw new Error();
  }
}

const PodcastPage = (props) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [episodesPerPage] = React.useState(10);
  const [modalState, setModalState] = React.useReducer(modalReducer, {
    open: false,
    trackName: null,
    artWork: null,
    artistName: null,
    releaseDate: null,
    trackTime: null,
    description: null,
    modalLoading: false,
  });

  const classes = useStyles();
  const { isLoading, data, description, sendPodcastRequest } = useHttp();

  useEffect(() => {
    const term = props.location.pathname.replace('/podcast/', '');
    sendPodcastRequest(
      `https://itunes.apple.com/lookup?id=${term}&country=US&media=podcast&entity=podcastEpisode&limit=1000`
    );
  }, [props.location.pathname, sendPodcastRequest]);

  useEffect(() => {
    if (props.location.search) {
      setCurrentPage(parseInt(props.location.search.split('?')[1]));
    }
  }, [props.location.search]);

  let podcast = null;
  let totalEpisodes = null;
  let currentEpisodes = null;

  if (data) {
    const indexOfLastEpisodes = currentPage * episodesPerPage;
    const indexOfFirstEpisodes = indexOfLastEpisodes - episodesPerPage;
    console.log(data);
    const replicateData = [...data.results];
    replicateData.shift();
    currentEpisodes = replicateData.slice(
      indexOfFirstEpisodes,
      indexOfLastEpisodes
    );

    totalEpisodes = data.results.length;
  }

  if (data) {
    const replicateData = [...data.results];
    podcast = replicateData.shift();
  }

  const pageNumbers = [];

  for (let i = 2; i <= Math.ceil(totalEpisodes / episodesPerPage); i++) {
    pageNumbers.push(i);
  }

  let pageCount = props.location.search.split('?')[1];

  if (pageNumbers.length > 0) {
    pageCount = pageNumbers.length;
  }

  const paginate = (event, pageNumber) => {
    props.history.push(props.match.url + '?' + pageNumber);
  };

  const proxyurl = 'https://ancient-river-53390.herokuapp.com/';

  const handleModal = (
    trackName,
    artWork,
    artistName,
    releaseDate,
    trackTime,
    description,
    feedUrl
  ) => {
    setModalState({ type: 'SEND' });

    if (!feedUrl.includes('?format=xml')) {
      feedUrl = feedUrl + '?format=xml';
    }
    parser
      .parseURL(proxyurl + feedUrl)
      .then((feed) => {
        const titleMatch = feed.items.filter((podcast) => {
          return podcast.title === trackName;
        });
        let finalDescription;
        if (titleMatch.length === 1) {
          finalDescription = titleMatch[0].content;
        } else {
          finalDescription = description;
        }
        setModalState({
          type: 'OPEN_MODAL',
          trackName: trackName,
          artWork: artWork,
          artistName: artistName,
          releaseDate: releaseDate,
          trackTime: trackTime,
          description: finalDescription,
        });
      })
      .catch((error) => {
        setModalState({
          type: 'ERROR',
          trackName: trackName,
          artWork: artWork,
          artistName: artistName,
          releaseDate: releaseDate,
          trackTime: trackTime,
          description: 'No description available',
        });
      });
  };

  const handleClose = () => {
    setModalState({
      type: 'CLOSE_MODAL',
    });
  };

  const DOM = (
    <React.Fragment>
      <PodcastHeader podcast={podcast} description={description} />
      <PodcastsTable
        podcasts={currentEpisodes}
        isLoading={isLoading}
        modal={(
          trackName,
          artWork,
          artistName,
          releaseDate,
          trackTime,
          description,
          feedUrl
        ) =>
          handleModal(
            trackName,
            artWork,
            artistName,
            releaseDate,
            trackTime,
            description,
            feedUrl
          )
        }
      />
      <Pagination
        className={classes.pages}
        count={pageCount}
        page={currentPage}
        onChange={paginate}
      />
    </React.Fragment>
  );

  let podcastPage = (
    <div className={classes.rootPodcastPage}>
      {modalState.modalLoading ? (
        <CircularProgress
          aria-label="loading-spinner"
          className={classes.modalLoading}
        />
      ) : null}
      <Modal
        open={modalState.open}
        handleClose={handleClose}
        trackName={modalState.trackName}
        artistName={modalState.artistName}
        artWork={modalState.artWork}
        releaseDate={modalState.releaseDate}
        trackTime={modalState.trackTime}
        description={modalState.description}
      />

      {isLoading ? (
        <CircularProgress
          className={classes.loading}
          aria-label="loading-spinner"
        />
      ) : (
        DOM
      )}
    </div>
  );

  if (props.location.search.split('?')[1] > pageCount) {
    podcastPage = <ErrorPage />;
  }

  return <React.Fragment>{podcastPage}</React.Fragment>;
};

export default PodcastPage;
