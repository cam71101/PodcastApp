import React from 'react';
import Table from '@material-ui/core/Table';

import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useStyles from './podcastsTableStyles';
import { AudioContext } from '../../context/audio-context';
import Row from '../../components/Row/Row';

export default function PodcastsTable({ podcasts, modal, podcast }) {
  const setAudio = React.useContext(AudioContext).setAudio;

  const setAudioHandler = (audio, image, trackName, artistName) => {
    setAudio(audio, image, trackName, artistName);
  };

  const classes = useStyles();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  let table = null;

  if (matches) {
    table = (
      <Table className={classes.table} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Episode</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <Row
          modal={modal}
          podcasts={podcasts}
          podcast={podcast}
          setAudioHandler={(
            episodeUrl,
            artworkUrl600,
            collectionName,
            trackName
          ) =>
            setAudioHandler(
              episodeUrl,
              artworkUrl600,
              collectionName,
              trackName
            )
          }
        />
      </Table>
    );
  } else {
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
        <Row
          modal={modal}
          podcasts={podcasts}
          podcast={podcast}
          large
          setAudioHandler={(
            episodeUrl,
            artworkUrl600,
            collectionName,
            trackName
          ) =>
            setAudioHandler(
              episodeUrl,
              artworkUrl600,
              collectionName,
              trackName
            )
          }
        />
      </Table>
    );
  }

  return (
    <TableContainer className={classes.root} component={Paper}>
      {table}
    </TableContainer>
  );
}
