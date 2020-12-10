import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import useStyles from './podcastHeaderStyles';
import { Typography } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

export const PodcastHeader = function MusicCard({ podcast, description }) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });

  let layout = null;

  console.log(podcast);

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
            {podcast.genres.map((tag) => {
              return <Chip label={tag} />;
            })}
          </div>
        </CardContent>
      </React.Fragment>
    );
  }

  return <div className={styles.root}>{layout}</div>;
};
export default PodcastHeader;
