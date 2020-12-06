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
import useStyles from './podcastCardStyles';
import { Typography } from '@material-ui/core';

export const PodcastCard = function MusicCard({ image, artistName, artist }) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });

  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia className={styles.media} image={image} />
      <CardContent>
        {/* <TextInfoContent
        // classes={textCardContentStyles}
        // classes={className.text}
        // overline={artistName}
        // heading={artist}
        // body={
        //   'That year, collection of songs, review melodies, memories full, this is a long and warm journey'
        // }
        /> */}
        <Typography>{artistName}</Typography>
        <Typography>{artist}</Typography>
      </CardContent>
    </Card>
  );
};
export default PodcastCard;
