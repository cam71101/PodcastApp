import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './footerStyles';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>Made by David Fisher</Typography>
    </div>
  );
};

export default Footer;
