import React, { useContext } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import DatePicker from 'react-datepicker';
import { minDate, maxDate, dateComparingFormat } from '../constants';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import { useStyles } from './styles';

import { EventContext } from './EventModuleWithContext';
// sections
import {
  AnalyticsCurrentVisits,
  AnalyticsWebsiteVisits,
  AnalyticsWidgetSummary,
} from '../../components/comparingCharts';

function EventModule() {
  const styles = useStyles();
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
    dayBetweenDefault,
  } = useContext(EventContext);

  return (
    <Container maxWidth='xl'>
      <Typography variant='h4' align='center' sx={{ mb: 5 }}>
        Hi, Please check report from 01/01/2017 to 03/11/2017
      </Typography>
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography variant='h5' className='text-center'>
          Is compared?
        </Typography>
        <Switch
          checked={isCompare}
          onChange={() => setIsCompare(!isCompare)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </Box>
      <div className={styles.comparedWrapper}>
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
          minDate={startFirstDate.firstStart}
          maxDate={maxDate}
        />

        {isCompare && (
          <>
            <Box sx={{ m: 2 }} />
            <Typography variant='h5' className='mx-5 text-red'>
              Compare
            </Typography>
            <Box sx={{ m: 2 }} />
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
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title='Total Events'
            total={`${
              isCompare ? `${totalEvents}/${totalEventsComparing}` : totalEvents
            }`}
            icon={'ant-design:bell-filled'}
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
            icon={'ant-design:calendar-filled'}
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
        {/* Compare for daily events */}
        {isCompare ? (
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsCurrentVisits
              labels={[
                `${dateComparingFormat(
                  startFirstDate.firstStart
                )} - ${dateComparingFormat(startFirstDate.firstEnd)}`,
                `${dateComparingFormat(
                  startComparedDate.secondStart
                )} - ${dateComparingFormat(startComparedDate.secondEnd)}`,
              ]}
              data={[totalEvents, totalEventsComparing]}
              title='Compare Total Events'
            />
          </Grid>
        ) : (
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsCurrentVisits
              labels={['Total days with min values', 'Total days']}
              data={[totalDaysWithMinValues, dayBetweenDefault]}
              title='Total days with min values / total days'
            />
          </Grid>
        )}

        <Grid item xs={12} md={6} lg={8}>
          <AnalyticsWebsiteVisits />
        </Grid>
      </Grid>
    </Container>
  );
}

export default EventModule;
