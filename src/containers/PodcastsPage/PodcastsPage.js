import React, { useEffect } from 'react';
import useStyles from './podcastsPageStyles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import useHttp from '../../hooks/http';
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import PodcastsLayout from '../../components/PodcastsLayout/PodcastsLayout';

const PodcastsPage = (props) => {
  const [category, setCategory] = React.useState(null);
  const classes = useStyles();
  const { isLoading, error, data, sendRequest } = useHttp();

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
  }, [props.location.pathname]);

  let listPodcasts = null;

  if (data) {
    if (category !== 'Popular') {
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
    } else {
      listPodcasts = data.feed.results.map((podcast) => {
        return (
          <Link to={'/podcast/' + podcast.id} key={podcast.id}>
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
      <Typography variant="h4" className={classes.title}>
        {category}
      </Typography>
      <PodcastsLayout isLoading={isLoading} podcasts={listPodcasts} />
    </div>
  );
};

export default PodcastsPage;
