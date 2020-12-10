import React, { useEffect } from 'react';

import useHttp from '../../hooks/http';
import useStyles from './podcastPageStyles';
import PodcastsTable from '../../components/PodcastsTable/PodcastsTable';
import PodcastHeader from '../../components/PodcastHeader/PodcastHeader';

import Pagination from '@material-ui/lab/Pagination';

const PodcastPage = (props) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [episodesPerPage, setEpisodesPerPage] = React.useState(10);
  const classes = useStyles();
  const { isLoading, error, data, description, sendPodcastRequest } = useHttp();

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
  }, []);

  let podcast = null;
  let totalEpisodes = null;
  let currentEpisodes;

  if (data) {
    /// 10
    const indexOfLastEpisodes = currentPage * episodesPerPage;
    /// 0
    const indexOfFirstEpisodes = indexOfLastEpisodes - episodesPerPage;
    //
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

  for (let i = 1; i <= Math.ceil(totalEpisodes / episodesPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (event, pageNumber) => {
    setCurrentPage(pageNumber);
    props.history.push(props.match.url + '?' + pageNumber);
  };

  return (
    <div className={classes.root}>
      <PodcastHeader podcast={podcast} description={description} />
      <PodcastsTable podcasts={currentEpisodes} isLoading={isLoading} />
      <Pagination
        className={classes.pages}
        count={pageNumbers.length}
        page={currentPage}
        onChange={paginate}
      />
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onUpdateData: (link) => dispatch(actions.updateData(link)),
//   };
// };

export default PodcastPage;
