import React, { useEffect } from 'react';
import useStyles from './podcastsPageStyles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import useHttp from '../../hooks/http';
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import PodcastsLayout from '../../components/PodcastsLayout/PodcastsLayout';
import CircularProgress from '@material-ui/core/CircularProgress';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const PodcastsPage = (props) => {
  const [category, setCategory] = React.useState(null);
  const classes = useStyles();
  const { isLoading, data, sendRequest } = useHttp();

  const matches = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    if (props.location.pathname.includes('category')) {
      const index = props.location.pathname.lastIndexOf('/');
      const result = props.location.pathname.substring(index + 1);

      sendRequest(
        `https://itunes.apple.com/search?term=podcast&genreId=${result}&limit=50country=uk`
      );
      const extractCategory = props.location.pathname.replace('/category/', '');
      const indexCategory = extractCategory.lastIndexOf('/');
      const cat = extractCategory.substring(0, indexCategory);
      setCategory(cat);
    } else {
      sendRequest(
        'https://rss.itunes.apple.com/api/v1/gb/podcasts/top-podcasts/all/100/explicit.json'
      );
      setCategory('Popular');
    }
    window.scrollTo(0, 0);
  }, [props.location.pathname, sendRequest]);

  let listPodcasts = null;

  console.log(data);

  if (data) {
    if (category !== 'Popular') {
      listPodcasts = data.results.map((podcast) => {
        return (
          <Link
            to={'/podcast/' + podcast.collectionId}
            key={podcast.id}
            className={classes.link}
          >
            <PodcastCard
              image={podcast.artworkUrl600}
              artist={podcast.collectionName}
              artistName={podcast.artistName}
              data-test="component-card"
              matches={matches}
            />
          </Link>
        );
      });
    } else {
      listPodcasts = data.feed.results.map((podcast) => {
        return (
          <Link
            to={'/podcast/' + podcast.id}
            key={podcast.id}
            className={classes.link}
          >
            <PodcastCard
              image={podcast.artworkUrl100}
              artist={podcast.name}
              artistName={podcast.artistName}
              data-test="component-card"
            />
          </Link>
        );
      });
    }
  }

  return (
    <div className={classes.rootPodcastsPage}>
      {isLoading ? (
        <CircularProgress
          data-test="component-loading"
          className={classes.loading}
        />
      ) : (
        <React.Fragment>
          <Typography variant="h4" className={classes.title}>
            {category}
          </Typography>
          <PodcastsLayout podcasts={listPodcasts} />
        </React.Fragment>
      )}
    </div>
  );
};

export default PodcastsPage;
