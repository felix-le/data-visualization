import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  root: {},
  h1: {
    color: theme.palette.primary.main,
    fontSize: '2.5rem',
  },
}));
function TablePages() {
  const classes = useStyle();
  return <h1 className={classes.h1}>Dashboard</h1>;
}

export default TablePages;
