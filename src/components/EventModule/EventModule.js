import React, { useContext } from 'react';
import { Grid, Container, Typography } from '@mui/material';

// sections
import CompareSection from './CompareSection';
import EventSummarySection from './EventSummarySection';
import DiagramSection from './DiagramSection';
// Table
import EventDailyTable from './EventDailyTable';
import EventHourlyTable from './EventHourlyTable';

//
import { EventContext } from './EventModuleWithContext';
import { dateComparingFormat } from '../constants';
function EventModule() {
  const { startFirstDate, startComparedDate, isCompare } =
    useContext(EventContext);

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
      <Typography variant='h4' align='center' sx={{ mb: 3 }}>
        {title}
      </Typography>
      <CompareSection />
      <Grid container spacing={3}>
        <EventSummarySection />
        {/* Table */}
        <EventDailyTable />
        <EventHourlyTable />
        {/* Compare for daily events */}
        <DiagramSection />
      </Grid>
    </Container>
  );
}

export default EventModule;
