import React from 'react';

import Typography from '@material-ui/core/Typography';
import useStyles from './errorPageStyles';

const ErrorPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.rootError}>
      <Typography>Error! This page does not exist</Typography>
    </div>
  );
};

export default ErrorPage;
