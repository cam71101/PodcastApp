import React from 'react';
import cx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import useStyles from './podcastCardStyles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PodcastCard = ({ image, artistName, artist, matches, id }) => {
  const classes = useStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });

  const subtitle = <Typography variant="subtitle1">{artistName}</Typography>;

  return (
    <Link to={'/podcast/' + id + '?' + 1} key={id} className={classes.link}>
      <Card className={cx(classes.root, shadowStyles.root)}>
        <CardMedia className={classes.media} image={image} />
        <CardContent className={classes.cardContent}>
          <Typography variant="subtitle2">{artist}</Typography>
          {subtitle}
        </CardContent>
      </Card>
    </Link>
  );
};

PodcastCard.propTypes = {
  image: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default PodcastCard;
