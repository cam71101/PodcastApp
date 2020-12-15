import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useStyles from './podcastsTableStyles';
import { AudioContext } from '../../context/audio-context';

export default function PodcastsTable({ podcasts, modal }) {
  const setAudio = React.useContext(AudioContext).setAudio;

  const setAudioHandler = (audio, image, trackName, artistName) => {
    setAudio(audio, image, trackName, artistName);
  };

  const classes = useStyles();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  let table = null;

  if (matches && podcasts) {
    table = (
      <Table className={classes.table} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Episode</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {podcasts.map((row) => (
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
                >
                  <PlayCircleOutlineIcon fontSize="large" color="primary" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  } else if (podcasts) {
    table = (
      <Table className={classes.table} aria-label="simple table" size="small">
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
                >
                  <PlayCircleOutlineIcon fontSize="large" color="primary" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

  return (
    <TableContainer className={classes.root} component={Paper}>
      {table}
    </TableContainer>
  );
}
