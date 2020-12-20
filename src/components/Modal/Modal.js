import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import parse from 'html-react-parser';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import useStyles from './modalStyles';

const TransitionsModal = ({
  open,
  handleClose,
  trackName,
  artistName,
  description,
  releaseDate,
  artWork,
  trackTime,
}) => {
  const classes = useStyles();

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
