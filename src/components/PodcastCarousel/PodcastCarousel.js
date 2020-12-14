import React from 'react';
import useStyles from './podcastCarouselStyles';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from 'pure-react-carousel';

const PodcastCarousel = ({ podcasts }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesLg = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  let postcastCarousel = null;

  let visibleSlides = 8;

  if (matchesSm) {
    visibleSlides = 2;
  } else if (matchesMd) {
    visibleSlides = 4;
  } else if (matchesLg) {
    visibleSlides = 5;
  }

  if (podcasts) {
    postcastCarousel = podcasts.results.map((podcast, index) => {
      let id;
      podcast.id ? (id = podcast.id) : (id = podcast.collectionId);

      return (
        <Link to={'/podcast/' + id} className={classes.text}>
          <Slide index={index} className={classes.slideComponent}>
            <div className={classes.slide}>
              {podcast.artworkUrl600 ? (
                <Image src={podcast.artworkUrl600} className={classes.img} />
              ) : (
                <Image src={podcast.artworkUrl100} className={classes.img} />
              )}
              <Typography variant="subtitle1" className={classes.text}>
                {podcast.collectionName ? podcast.collectionName : podcast.name}
              </Typography>
              <Typography variant="subtitle2" className={classes.text}>
                {podcast.artistName}
              </Typography>
            </div>
          </Slide>
        </Link>
      );
    });
  }

  return (
    <div className={classes.root}>
      <CarouselProvider
        naturalSlideWidth={500}
        naturalSlideHeight={500}
        totalSlides={15}
        visibleSlides={visibleSlides}
        className={classes.provider}
      >
        <Slider>{postcastCarousel}</Slider>
        <ButtonBack className={classes.backButton}>
          <ArrowBackIosIcon />
        </ButtonBack>
        <ButtonNext className={classes.nextButton}>
          <ArrowForwardIosIcon />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default PodcastCarousel;
