import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import useStyles from './podcastHeaderStyles';
import { Typography } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import parse from 'react-html-parser';

export const PodcastHeader = function MusicCard({ podcast, genres }) {
  const styles = useStyles();

  let layout = null;

  if (podcast) {
    layout = (
      <React.Fragment>
        <CardMedia className={styles.media} image={podcast.image.url} />
        <CardContent className={styles.cardContent}>
          <Typography variant="h4">{podcast.title}</Typography>
          <Typography variant="h6" gutterBottom>
            {podcast.itunes.author}
          </Typography>
          <Typography gutterBottom>{parse(podcast.description)}</Typography>
          <div className={styles.tag}>
            {genres.map((tag, index) => {
              return <Chip label={tag} key={index} color="primary" />;
            })}
          </div>
        </CardContent>
      </React.Fragment>
    );
  }

  return <div className={styles.rootPodcastHeader}>{layout}</div>;
};

export default PodcastHeader;
