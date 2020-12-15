import React from 'react';
import cx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import useStyles from './podcastCardStyles';
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export const PodcastCard = function MusicCard({ image, artistName, artist }) {
  const styles = useStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });

  const classes = useStyles();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia className={styles.media} image={image} />
      <CardContent className={styles.cardContent}>
        <Typography variant="subtitle2">{artist}</Typography>
        {matches ? null : (
          <Typography variant="subtitle1">{artistName}</Typography>
        )}
      </CardContent>
    </Card>
  );
};
export default PodcastCard;
