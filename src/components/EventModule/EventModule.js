import React from 'react';
import { Grid, Container, Typography } from '@mui/material';

// components

// sections
import CompareSection from './CompareSection';
import EventSummarySection from './EventSummarySection';
import DiagramSection from './DiagramSection';

function EventModule() {
  return (
    <Container maxWidth='xl'>
      <Typography variant='h4' align='center' sx={{ mb: 5 }}>
        Hi, Please check report from 01/01/2017 to 03/11/2017
      </Typography>

      <CompareSection />

      <Grid container spacing={3}>
        <EventSummarySection />
        {/* Compare for daily events */}
        <DiagramSection />
      </Grid>
    </Container>
  );
}

export default EventModule;
