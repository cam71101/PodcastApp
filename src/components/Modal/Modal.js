import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import parse from 'react-html-parser';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import useStyles from './modalStyles';

const TransitionsModal = (props) => {
  const classes = useStyles();

  const {
    open,
    handleClose,
    trackName,
    artistName,
    description,
    releaseDate,
    artWork,
    trackTime,
  } = props;

  console.log(description);

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Card className={classes.rootModal}>
          <Button className={classes.close} onClick={handleClose}>
            <HighlightOffIcon />
          </Button>
          <div>
            <CardMedia
              component="img"
              alt={artistName}
              height="140"
              image={artWork}
              title={artistName}
              className={classes.artWork}
            />
            <Typography
              variant="subtitle2"
              component="h2"
              align="center"
              className={classes.date}
            >
              {releaseDate}
            </Typography>
            <Typography variant="subtitle2" component="h2" align="center">
              {trackTime}
            </Typography>
          </div>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" component="h2">
              {trackName}
            </Typography>
            <Typography gutterBottom variant="h3" component="h2">
              {artistName}
            </Typography>
            {description ? parse(description) : null}
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
};

TransitionsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TransitionsModal;

{
  /* <p>Adam enjoys some festive waffle cake with his old friend Joe Cornish.</p><p>Conversation recorded remotely on 19th 
December 2020.</p><p>Thanks to Séamus Murphy-Mitchell for production support and to Matt Lamont for additional conversation 
editing.&nbsp;</p><p>Matt's recently set up his own podcast company, called PodMonkey. If any of you podcats have a podcast 
that needs making then get in touch via 
<a href="http://www.podmonkey.co.uk/" rel="noopener noreferrer" target="_blank">www.podmonkey.co.uk</a></p>
<p>Adam Buxton Podcast artwork by Helen Green <a href="https://helengreenillustration.com/" rel="noopener noreferrer" target="_blank">
  https://helengreenillustration.com/</a></p><p><br></p><p><strong>RELATED LINKS
  </strong></p><p>
  <a href="https://www.audible.co.uk/ep/title?asin=0008293368&amp;source_code=M2M30DFT1BkSH101514006S&amp;&amp;ipRedirectOverride=true" 
  rel="noopener noreferrer" target="_blank"><strong>ADAM BUXTON'S RAMBLE BOOK (AUDIOBOOK) </strong></a>(2020, AUDIBLE)</p>
  <p><a href="https://www.waterstones.com/book/ramble-book/adam-buxton/9780008293345" rel="noopener noreferrer" target="_blank">
  <strong>ADAM BUXTON'S RAMBLE BOOK (HARDBACK)</strong></a><strong> </strong>(WATERSTONES)</p><p>
  <a href="https://open.spotify.com/playlist/6ppXKiMcxlCewFixTRz5vm?si=LRFVZWHGRE6Uu-3x96cmGg" rel="noopener noreferrer" target="_blank">
  <strong>THE STAVES - GOOD WOMAN PLAYLIST </strong></a>(SPOTIFY PLAYLIST)</p><p>
  <a href="https://www.youtube.com/watch?v=5LVW95Mxv6k" rel="noopener noreferrer" target="_blank"><strong>THE STAVES - I'M ON FIRE 
  </strong>(BRUCE SPRINGSTEEN COVER)</a> (2015, YOUTUBE)</p><p>
  <a href="https://www.instagram.com/mrjoecornish/?hl=en" rel="noopener noreferrer" target="_blank"><strong>JOE'S INSTAGRAM PAGE
  </strong></a></p><p>Your one stop shop for J-Corn news (including details of Joe's latest project for Netflix) and a lot of old 
  Adam and Joe bits and pieces and assorted juvenilia.</p><p>
  <a href="https://www.native-instruments.com/en/specials/free-vst-plugins/" rel="noopener noreferrer" target="_blank">
  <strong>NATIVE INSTRUMENTS VSTs</strong></a></p><p><a href="https://www.youtube.com/watch?v=-4eDFg-XTuQ" rel="noopener noreferrer" 
  target="_blank"><strong>MARIAN KEYES ON TAKING CARE OF YOURSELF AT CHRISTMAS</strong></a> (2019, YOUTUBE)</p>
  <p>If you find Christmas one of the most stressful and lonely times of the year, here's a few words of support from writer 
  Marian Keyes.</p><p><a href="https://www.youtube.com/watch?v=mXpSrT7jVb0" rel="noopener noreferrer" target="_blank">
  <strong>NEVER MIND THE BAUBLES - THE PISTOLS AT CHRISTMAS</strong> </a>(Directed by Julien Temple) (2013, YOUTUBE)</p>
  <p><br></p><p><strong>SOME CLIPS FROM THIS EPISODE (DON'T LISTEN TO THESE BEFORE YOU LISTEN TO THE PODCAST!)</strong></p>
  <p><a href="https://soundcloud.com/adam-buxton/the-staves-with-adam-buxton-christmas-cornballs/s-fvYtZsy1z73" 
  rel="noopener noreferrer" target="_blank"><strong>THE STAVES (WITH ADAM BUXTON) - CHRISTMAS CORNBALLS</strong>
  </a><strong> </strong>(2020, SOUNDCLOUD)</p>
  <p>Based on One More Sleep Til Christmas by Paul Williams from The Muppets Christmas Carol</p><p>
  <a href="https://soundcloud.com/adam-buxton/adams-dream-song-opening-nightmare/s-nTnLnOfFTWe" rel="noopener noreferrer" target="_blank">
  <strong>ADAM'S DREAM SONG - OPENING NIGHTMARE</strong> </a>(2020, SOUNDCLOUD)</p><p>
  <a href="https://soundcloud.com/adam-buxton/joes-dream-song-demented-dreams/s-6vLEjxa6RK7" rel="noopener noreferrer" target="_blank">
  <strong>JOE'S DREAM SONG - DEMENTED DREAMS</strong></a> (2020, SOUNDLCOUD)</p>
  <p><a href="https://soundcloud.com/adam-buxton/the-crown-splash-premiere/s-aw65ZABwYDp" rel="noopener noreferrer" target="_blank">
  <strong>THE CROWN - SPLASH PREMIERE</strong></a><strong> </strong>(2020, SOUNDCLOUD)</p>
  <p><a href="https://soundcloud.com/adam-buxton/the-crown-live-aid/s-wIa7TqKyjdL" rel="noopener noreferrer" target="_blank">
  <strong>THE CROWN - LIVE AID</strong></a><strong> </strong>(2020, SOUNDCLOUD)</p>
  <p><a href="https://soundcloud.com/adam-buxton/the-crown-queen-and-thatcher/s-58klDPLQ569" rel="noopener... &#10;&nbsp;<br />
  <hr><p style='color: grey; font - size: 0.75em; '>See <a style='color: grey; ' target='_blank' rel='noopener noreferrer' href='https://acast.com/privacy'>acast.com/privacy</a> for privacy and opt-out information.</p> */
}
