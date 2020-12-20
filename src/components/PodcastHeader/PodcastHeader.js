import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import useStyles from './podcastHeaderStyles';
import { Typography } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

export const PodcastHeader = function MusicCard({ podcast, description }) {
  const styles = useStyles();

  let layout = null;

  if (podcast) {
    layout = (
      <React.Fragment>
        <CardMedia className={styles.media} image={podcast.artworkUrl600} />
        <CardContent className={styles.cardContent}>
          <Typography variant="h4">{podcast.collectionName}</Typography>
          <Typography variant="h6" gutterBottom>
            {podcast.artistName}
          </Typography>
          <Typography gutterBottom>{description}</Typography>
          <div className={styles.tag}>
            {podcast.genres.map((tag, index) => {
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
