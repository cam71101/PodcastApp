import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import useStyles from './rowStyles';

const Row = ({ podcasts, large, setAudioHandler, modal, podcast }) => {
  const classes = useStyles();
  return (
    <TableBody>
      {podcasts
        ? !large
          ? podcasts.map((row, index) => (
              <TableRow key={index} hover>
                <TableCell component="th" scope="row" align="left">
                  <Button
                    className={classes.btn}
                    onClick={() =>
                      modal(
                        row.title,
                        podcast.image.url,
                        podcast.title,
                        row.pubDate,
                        row.itunes.duration,
                        row.content
                      )
                    }
                  >
                    {row.title}
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() =>
                      setAudioHandler(
                        row.episodeUrl,
                        podcast.image.url,
                        podcast.title,
                        row.title
                      )
                    }
                    aria-label={row.trackId}
                  >
                    <PlayCircleOutlineIcon fontSize="large" color="primary" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          : podcasts.map((row, index) => (
              <TableRow key={index} hover>
                <TableCell component="th" scope="row">
                  <Button
                    className={classes.btn}
                    onClick={() =>
                      modal(
                        row.title,
                        podcast.image.url,
                        podcast.title,
                        row.pubDate,
                        row.itunes.duration,
                        row.content
                      )
                    }
                  >
                    {row.title}
                  </Button>
                </TableCell>
                <TableCell align="right">{row.pubDate}</TableCell>
                <TableCell align="right">{row.itunes.duration}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() =>
                      setAudioHandler(
                        row.enclosure.url,
                        podcast.image.url,
                        podcast.title,
                        row.title
                      )
                    }
                    aria-label={row.trackId}
                  >
                    <PlayCircleOutlineIcon fontSize="large" color="primary" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
        : null}
    </TableBody>
  );
};

export default Row;
