import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import useStyles from './rowStyles';

const Row = ({ podcasts, large, setAudioHandler, modal }) => {
  const classes = useStyles();

  return (
    <TableBody>
      {podcasts
        ? !large
          ? podcasts.map((row) => (
              <TableRow key={row.trackId} hover>
                <TableCell component="th" scope="row" align="left">
                  <Button
                    className={classes.btn}
                    onClick={() =>
                      modal(
                        row.trackName,
                        row.artworkUrl600,
                        row.collectionName,
                        row.releaseDate,
                        row.trackTimeMillis,
                        row.description,
                        row.feedUrl
                      )
                    }
                  >
                    {row.trackName}
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() =>
                      setAudioHandler(
                        row.episodeUrl,
                        row.artworkUrl600,
                        row.collectionName,
                        row.trackName
                      )
                    }
                    aria-label={row.trackId}
                  >
                    <PlayCircleOutlineIcon fontSize="large" color="primary" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          : podcasts.map((row) => (
              <TableRow key={row.trackId} hover>
                <TableCell component="th" scope="row">
                  <Button
                    className={classes.btn}
                    onClick={() =>
                      modal(
                        row.trackName,
                        row.artworkUrl600,
                        row.collectionName,
                        row.releaseDate,
                        row.trackTimeMillis,
                        row.description,
                        row.feedUrl
                      )
                    }
                  >
                    {row.trackName}
                  </Button>
                </TableCell>
                <TableCell align="right">{row.releaseDate}</TableCell>
                <TableCell align="right">{row.trackTimeMillis}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() =>
                      setAudioHandler(
                        row.episodeUrl,
                        row.artworkUrl600,
                        row.collectionName,
                        row.trackName
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
