import React, { useEffect } from 'react';
import useStyles from './homeStyles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import useHttp from '../../hooks/http';
import PodcastCarousel from '../../components/PodcastCarousel/PodcastCarousel';
import menuItems from '../../utils/sideBarItems';
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import PodcastsLayout from '../../components/PodcastsLayout/PodcastsLayout';

const Home = (props) => {
  const [category, setCategory] = React.useState(null);

  const { isLoading, error, categoryData, data, homeRequest } = useHttp();

  const classes = useStyles();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
    const randomElement =
      menuItems[Math.floor(Math.random() * menuItems.length)];
    homeRequest(
      'https://rss.itunes.apple.com/api/v1/gb/podcasts/top-podcasts/all/10/explicit.json',
      `https://itunes.apple.com/search?term=podcast&genreId=${randomElement.id}&limit=10`
    );
    setCategory(randomElement.name);
  }, [props.location.pathname]);

  let listPodcasts = null;
  let categoryPodcasts = null;
  let DOM = null;

  if (isLoading) {
    DOM = (
      <CircularProgress
        data-test="component-loading"
        className={classes.loading}
      />
    );
  } else if (data && matches) {
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
    categoryPodcasts = categoryData.results.map((podcast) => {
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
    DOM = (
      <React.Fragment>
        <Typography variant="h4" className={classes.title}>
          Home
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          Top Podcasts
        </Typography>
        <PodcastsLayout isLoading={isLoading} podcasts={listPodcasts} />
        <Typography variant="h4" className={classes.subtitle}>
          Explore: {category}
        </Typography>
        <PodcastsLayout isLoading={isLoading} podcasts={categoryPodcasts} />
      </React.Fragment>
    );
  } else if (data) {
    listPodcasts = data.feed;
    DOM = (
      <React.Fragment>
        <Typography variant="h4" className={classes.title}>
          Home
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          Top Podcasts
        </Typography>
        <PodcastCarousel podcasts={listPodcasts} />
        <Typography variant="h5" className={classes.subtitle}>
          Explore: {category}
        </Typography>
        <PodcastCarousel podcasts={categoryData} />
      </React.Fragment>
    );
  }

  return <div className={classes.rootHome}>{DOM}</div>;
};

export default Home;
