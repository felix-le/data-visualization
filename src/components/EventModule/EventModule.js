import React, { useContext } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import { minDate, maxDate } from '../constants';
import Switch from '@mui/material/Switch';

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
    startFirstDate,
    setStartFirstDate,
    setIsCompare,
    // Compare data
    isCompare,
    startComparedDate,
    setStartComparedDate,
    totalEventsComparing,
    maxEventsComparing,
    totalDaysWithMinValuesComparing,
    hourWithMaxEventsComparing,
  } = useContext(EventContext);

  return (
    <Container maxWidth='xl'>
      <Typography variant='h4' sx={{ mb: 5 }}>
        Hi, Please check report from 01/01/2017 to 03/11/2017
      </Typography>

      <Typography variant='h5'>From</Typography>
      <DatePicker
        selected={startFirstDate.firstStart}
        onChange={(date) =>
          setStartFirstDate({ ...startFirstDate, firstStart: date })
        }
        minDate={minDate}
        maxDate={maxDate}
      />

      <Typography variant='h5'>To</Typography>
      <DatePicker
        selected={startFirstDate.firstEnd}
        onChange={(date) =>
          setStartFirstDate({ ...startFirstDate, firstEnd: date })
        }
        minDate={startFirstDate}
        maxDate={maxDate}
      />

      <h3>Is compared?</h3>
      <Switch
        checked={isCompare}
        onChange={() => setIsCompare(!isCompare)}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      {isCompare && (
        <>
          <Typography variant='h1'>Compare with</Typography>

          <Typography variant='h5'>From</Typography>
          <DatePicker
            selected={startComparedDate.secondStart}
            onChange={(date) =>
              setStartComparedDate({
                ...startComparedDate,
                secondStart: date,
              })
            }
            minDate={startFirstDate.firstEnd}
            maxDate={maxDate}
          />

          <Typography variant='h5'>To</Typography>
          <DatePicker
            selected={startComparedDate.secondEnd}
            defaultValue={maxDate}
            onChange={(date) =>
              setStartComparedDate({
                ...startComparedDate,
                secondEnd: date,
              })
            }
            minDate={startComparedDate.secondStart}
            maxDate={maxDate}
          />
        </>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title='Total Events'
            total={`${
              isCompare ? `${totalEvents}/${totalEventsComparing}` : totalEvents
            }`}
            icon={'ant-design:android-filled'}
            isCompare={isCompare}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title={`It is the most events in a day on ${maxEvents?.date}`}
            // total={maxEvents?.events}
            total={`${
              isCompare
                ? `${maxEvents?.events}/${maxEventsComparing?.events}`
                : maxEvents?.events
            }`}
            color='info'
            icon={'ant-design:apple-filled'}
            isCompare={isCompare}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title={`${hourWithMaxEvents.hour}h has the most events`}
            // total={hourWithMaxEvents?.events}
            total={`${
              isCompare
                ? `${hourWithMaxEvents?.events}/${hourWithMaxEventsComparing?.events}`
                : hourWithMaxEvents?.events
            }`}
            color='warning'
            icon={'ant-design:windows-filled'}
            isCompare={isCompare}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title='Less than 15 events per day'
            // total={totalDaysWithMinValues}
            total={`${
              isCompare
                ? `${totalDaysWithMinValues}/${totalDaysWithMinValuesComparing}`
                : totalDaysWithMinValues
            }`}
            color='error'
            icon={'ant-design:warning-filled'}
            isCompare={isCompare}
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
