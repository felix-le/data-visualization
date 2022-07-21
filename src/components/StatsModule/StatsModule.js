import React from 'react';
import { Grid, Container, Typography } from '@mui/material';

// sections
import CompareSection from './CompareSection';
import StatsSummarySection from './StatsSummarySection';
// import DiagramSection from './DiagramSection';
// // Table
import StatsDailyTable from './StatsDailyTable';
// import EventHourlyTable from './EventHourlyTable';
function StatsModule() {
  return (
    <Container maxWidth='xl'>
      <Typography variant='h4' align='center' sx={{ mb: 5 }}>
        Hi, Please check report from 01/01/2017 to 03/11/2017
      </Typography>
      <CompareSection />
      <Grid container spacing={3}>
        <StatsSummarySection />
        {/* Table */}
        <StatsDailyTable />
        {/* <EventHourlyTable /> */}
        {/* Compare for daily events */}
        {/* <DiagramSection /> */}
      </Grid>
    </Container>
  );
}

export default StatsModule;
