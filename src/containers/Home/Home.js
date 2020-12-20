import React from 'react';
import useStyles from './homeStyles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import useHttp from '../../hooks/http';
import PodcastCarousel from '../../components/PodcastCarousel/PodcastCarousel';
import menuItems from '../../utils/sideBarItems';
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import PodcastsLayout from '../../components/PodcastsLayout/PodcastsLayout';

const Home = () => {
  const [category, setCategory] = React.useState(null);

  const { isLoading, categoryData, data, homeRequest } = useHttp();

  const classes = useStyles();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  React.useEffect(() => {
    const randomElement =
      menuItems[Math.floor(Math.random() * menuItems.length)];
    homeRequest(
      'https://rss.itunes.apple.com/api/v1/gb/podcasts/top-podcasts/all/15/explicit.json',
      `https://itunes.apple.com/search?term=podcast&genreId=${randomElement.id}&limit=15`
    );
    setCategory(randomElement.name);
  }, [homeRequest]);

  let listPodcasts = null;
  let categoryPodcasts = null;
  let DOM = <PodcastsLayout isLoading={isLoading} podcasts={listPodcasts} />;

  const firstSection = (
    <React.Fragment>
      <Typography variant="h4" className={classes.title}>
        Home
      </Typography>
      <Typography variant="h5" className={classes.subtitle} color="primary">
        Top Podcasts
      </Typography>
    </React.Fragment>
  );

  const secondSection = (
    <React.Fragment>
      <Typography variant="h4" className={classes.subtitle}>
        Explore:
      </Typography>
      <Typography variant="h5" className={classes.subtitle} color="primary">
        {category}
      </Typography>
    </React.Fragment>
  );

  if (data && matches) {
    listPodcasts = data.feed.results.map((podcast) => {
      return (
        <PodcastCard
          image={podcast.artworkUrl100}
          artist={podcast.name}
          artistName={podcast.artistName}
          id={podcast.id}
          key={podcast.id}
        />
      );
    });
    categoryPodcasts = categoryData.results.map((podcast) => {
      return (
        <PodcastCard
          image={podcast.artworkUrl600}
          artist={podcast.collectionName}
          artistName={podcast.artistName}
        />
      );
    });
    DOM = (
      <React.Fragment>
        {firstSection}
        <PodcastsLayout isLoading={isLoading} podcasts={listPodcasts} />
        {secondSection}
        <PodcastsLayout isLoading={isLoading} podcasts={categoryPodcasts} />
      </React.Fragment>
    );
  } else if (data) {
    listPodcasts = data.feed;
    DOM = (
      <React.Fragment>
        {firstSection}
        <PodcastCarousel podcasts={listPodcasts} />
        {secondSection}
        <PodcastCarousel podcasts={categoryData} />
      </React.Fragment>
    );
  }

  return <div className={classes.rootHome}>{DOM}</div>;
};

export default Home;
