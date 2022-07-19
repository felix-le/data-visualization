import React, { useContext } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import { EventContext } from './EventModuleWithContext';
// sections
import {
  AnalyticsCurrentVisits,
  AnalyticsWebsiteVisits,
  AnalyticsWidgetSummary,
  AnalyticsCurrentSubject,
  AnalyticsConversionRates,
} from '../../components/comparingCharts';

function EventModule() {
  const {
    totalEvents,
    maxEvents,
    totalDaysWithMinValues,
    hourWithMaxEvents,
    isComperingMultiDays,
    setIsComperingMultiDays,
  } = useContext(EventContext);
  return (
    <Container maxWidth='xl'>
      <Typography variant='h4' sx={{ mb: 5 }}>
        Hi, Please check report from 01/01/2017 to 03/11/2017
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title='Total Events'
            total={totalEvents}
            icon={'ant-design:android-filled'}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title={`It is the most events in a day on ${maxEvents?.date}`}
            total={maxEvents?.events}
            color='info'
            icon={'ant-design:apple-filled'}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title={`${hourWithMaxEvents.hour}h has the most events`}
            total={hourWithMaxEvents?.events}
            color='warning'
            icon={'ant-design:windows-filled'}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title='Less than 15 events per day'
            total={totalDaysWithMinValues}
            color='error'
            icon={'ant-design:warning-filled'}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <AnalyticsWebsiteVisits />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <AnalyticsCurrentVisits />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <AnalyticsConversionRates />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <AnalyticsCurrentSubject />
        </Grid>
      </Grid>
    </Container>
  );
}

export default EventModule;
