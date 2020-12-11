import React, { useEffect } from 'react';
import useStyles from './podcastsPageStyles';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

import useHttp from '../../hooks/http';
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import PodcastsLayout from '../../components/PodcastsLayout/PodcastsLayout';

const PodcastsPage = (props) => {
  const [category, setCategory] = React.useState(null);
  const classes = useStyles();
  const { isLoading, error, data, sendRequest } = useHttp();

  useEffect(() => {
    const index = props.location.pathname.lastIndexOf('/');
    const result = props.location.pathname.substring(index + 1);
    sendRequest(
      `https://itunes.apple.com/search?term=podcast&genreId=${result}&limit=50`
    );
    const extractCategory = props.location.pathname.replace('/category/', '');
    const indexCategory = extractCategory.lastIndexOf('/');
    const cat = extractCategory.substring(0, indexCategory);
    setCategory(cat);
  }, [props.location.pathname]);

  let listPodcasts = null;

  if (data) {
    console.log(category);
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

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        {category}
      </Typography>
      <PodcastsLayout isLoading={isLoading} podcasts={listPodcasts} />
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onUpdateData: (link) => dispatch(actions.updateData(link)),
//   };
// };

// export default withRouter(connect(null, mapDispatchToProps)(PodcastsPage));

export default PodcastsPage;
