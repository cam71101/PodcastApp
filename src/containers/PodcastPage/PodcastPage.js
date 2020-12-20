import React, { useEffect } from 'react';
import RSSParser from 'rss-parser';
import useHttp from '../../hooks/http';
import useStyles from './podcastPageStyles';
import PodcastsTable from '../../components/PodcastsTable/PodcastsTable';
import PodcastHeader from '../../components/PodcastHeader/PodcastHeader';
import CircularProgress from '@material-ui/core/CircularProgress';

import Pagination from '@material-ui/lab/Pagination';
import Modal from '../../components/Modal/Modal';

let parser = new RSSParser();

function modalReducer(curState, action) {
  switch (action.type) {
    case 'SEND':
      return {
        modalLoading: true,
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
    if (props.location.search) {
      setCurrentPage(
        props.location.search.charAt(props.location.search.length - 1)
      );
    }
    sendPodcastRequest(
      `https://itunes.apple.com/lookup?id=${term}&country=US&media=podcast&entity=podcastEpisode&limit=1000`
    );
  }, [props.location.pathname, props.location.search, sendPodcastRequest]);

  let podcast = null;
  let totalEpisodes = null;
  let currentEpisodes = null;

  if (data) {
    const indexOfLastEpisodes = currentPage * episodesPerPage;
    const indexOfFirstEpisodes = indexOfLastEpisodes - episodesPerPage;
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

  const paginate = (event, pageNumber) => {
    setCurrentPage(pageNumber);
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
          type: 'OPEN_MODAL',
          trackName: trackName,
          artWork: artWork,
          artistName: artistName,
          releaseDate: releaseDate,
          trackTime: trackTime,
          description: description,
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
        count={pageNumbers.length}
        page={currentPage}
        onChange={paginate}
      />
    </React.Fragment>
  );

  return (
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
};

export default PodcastPage;
