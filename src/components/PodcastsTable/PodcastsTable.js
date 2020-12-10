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

import useStyles from './podcastsTableStyles';
import { AudioContext } from '../../context/audio-context';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
];

export default function PodcastsTable({ podcasts, isLoading }) {
  const classes = useStyles();
  const setAudio = React.useContext(AudioContext).setAudio;

  const setAudioHandler = (audio) => {
    setAudio(audio);
  };

  return (
    <TableContainer className={classes.root} component={Paper}>
      {isLoading ? <CircularProgress data-test="component-loading" /> : null}
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Episode title</TableCell>
            <TableCell align="right">Released</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {podcasts
            ? podcasts.map((row) => (
                <TableRow key={row.trackId}>
                  <TableCell component="th" scope="row">
                    {row.trackName}
                  </TableCell>
                  <TableCell align="right">{row.releaseDate}</TableCell>
                  <TableCell align="right">{row.trackTimeMillis}</TableCell>
                  <TableCell align="right">
                    <Button onClick={() => setAudioHandler(row.episodeUrl)}>
                      <PlayCircleOutlineIcon fontSize="large" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
