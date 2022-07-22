import React, { useContext } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// sections
import CompareSection from './CompareSection';
import StatsSummarySection from './StatsSummarySection';
import DiagramSection from './DiagramSection';
// // Table
import StatsDailyTable from './StatsDailyTable';
import StatsHourlyTable from './StatsHourlyTable';
//
import { StatsContext } from './StatsModuleWithContext';
import { dateComparingFormat } from '../constants';

const useStyles = makeStyles({
  root: {
    margin: '0 !important',
    width: '100% !important',

    '& .MuiGrid-item': {
      padding: '20px !important',
    },
  },
});

function StatsModule() {
  const classes = useStyles();
  const { startFirstDate, startComparedDate, isCompare } =
    useContext(StatsContext);

  const startDate = dateComparingFormat(startFirstDate.firstStart);
  const endDate = dateComparingFormat(startFirstDate.firstEnd);
  //
  const startCompareDateFormat = dateComparingFormat(
    startComparedDate.secondStart
  );
  const endCompareDateFormat = dateComparingFormat(startComparedDate.secondEnd);

  const title = isCompare
    ? `You are viewing report ${startDate} - ${endDate} vs ${startCompareDateFormat} - ${endCompareDateFormat}`
    : `You are viewing report ${startDate} - ${endDate}`;

  return (
    <Container maxWidth='xl'>
      <Typography variant='h4' align='center' sx={{ mb: 5 }}>
        {title}
      </Typography>
      <CompareSection />
      <Grid container spacing={3} className={classes.root}>
        <StatsSummarySection />
        {/* Table */}
        <StatsDailyTable />
        <StatsHourlyTable />
        {/* Compare for daily events */}
        <DiagramSection />
      </Grid>
    </Container>
  );
}

export default StatsModule;
