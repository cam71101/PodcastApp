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

  // React.useEffect(() => {
  //   if (podcasts) {
  //     podcasts.map((row) => {
  // var minutes = Math.floor(row.trackTimeMillis / 60000);
  // var seconds = ((row.trackTimeMillis % 60000) / 1000).toFixed(0);
  // console.log(minutes + ':' + (seconds < 10 ? '0' : '') + seconds);
  // return (row.trackTimeMillis =
  //   minutes + ':' + (seconds < 10 ? '0' : '') + seconds);
  //     });
  //   }
  //   return podcasts;
  // }, [podcasts]);

  return (
    <TableContainer className={classes.root} component={Paper}>
      {isLoading ? <CircularProgress data-test="component-loading" /> : null}
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

// new Date(SECONDS * 1000).toISOString().substr(11, 8);
