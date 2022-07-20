import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { EventContext } from './EventModuleWithContext';
import { AnalyticsWidgetSummary } from '../../components/comparingCharts';

function EventSummarySection() {
  const {
    totalEvents,
    maxEvents,
    totalDaysWithMinValues,
    hourWithMaxDefaultEvents,
    // Compare data
    isCompare,
    totalEventsComparing,
    maxEventsComparing,
    totalDaysWithMinValuesComparing,
    hourWithMaxEventsComparing,
    hourWithMaxCompareEvents,
  } = useContext(EventContext);
  return (
    <>
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
          title={`${hourWithMaxDefaultEvents.hour}h${
            isCompare ? `/${hourWithMaxCompareEvents?.hour}h` : ''
          } has the most events`}
          // total={hourWithMaxEvents?.events}
          total={`${
            isCompare
              ? `${hourWithMaxDefaultEvents?.events}/${hourWithMaxEventsComparing?.events}`
              : hourWithMaxDefaultEvents?.events
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
    </>
  );
}

export default EventSummarySection;
