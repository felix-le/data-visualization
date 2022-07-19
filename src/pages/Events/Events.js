import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import { Grid, Container, Typography } from '@mui/material';
import { groupBy, chain, maxBy } from 'lodash';
// sections
import {
  AnalyticsCurrentVisits,
  AnalyticsWebsiteVisits,
  AnalyticsWidgetSummary,
  AnalyticsCurrentSubject,
  AnalyticsConversionRates,
} from '../../components/comparingCharts';

const MINEVENTSPERDAY = 15;

function Chart() {
  // const newstate = useSelector((state) => state);
  const { eventDaily, eventHourly } = useSelector((state) => state.event);

  const totalEvents = eventDaily.reduce((accumulator, object) => {
    return accumulator + object?.events;
  }, 0);

  // get the day has the most events
  const maxEvents = maxBy(eventDaily, 'events');
  console.log('🚀 ~ file: Events.js ~ line 27 ~ Chart ~ maxEvents', maxEvents);

  // get the number days that have events < Min

  const totalDaysWithMinValues = eventDaily.reduce((accumulator, object) => {
    if (object?.events < MINEVENTSPERDAY) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);

  // get the hour with the most events
  const hourWithMaxEvents = maxBy(
    chain(eventHourly)
      // Group the elements of Array based on `hour` property
      .groupBy('hour')
      // `key` is group's name (hour), `value` is the array of objects
      .map((value, key) => ({ hour: key, events: value }))
      .value()
      .map((item) => {
        const { hour, events } = item;
        return {
          hour,
          events: events.reduce((accumulator, object) => {
            return accumulator + object?.events;
          }, 0),
        };
      }),
    function (o) {
      return o.events;
    }
  );

  return (
    <Layout>
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
    </Layout>
  );
}

export default Chart;
