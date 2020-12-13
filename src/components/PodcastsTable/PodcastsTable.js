import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Typography from '@material-ui/core/Typography';

import useStyles from './podcastsTableStyles';
import { AudioContext } from '../../context/audio-context';

export default function PodcastsTable({ podcasts, isLoading }) {
  const classes = useStyles();
  const setAudio = React.useContext(AudioContext).setAudio;

  const setAudioHandler = (audio, image, trackName, artistName) => {
    setAudio(audio, image, trackName, artistName);
  };

  console.log(podcasts);

  return (
    <TableContainer className={classes.root} component={Paper}>
      {podcasts ? (
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Episode title</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Released</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Duration</Typography>
              </TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {podcasts.map((row) => (
              <TableRow key={row.trackId}>
                <TableCell component="th" scope="row">
                  {row.trackName}
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
                  >
                    <PlayCircleOutlineIcon fontSize="large" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : null}
    </TableContainer>
  );
}

// new Date(SECONDS * 1000).toISOString().substr(11, 8);
