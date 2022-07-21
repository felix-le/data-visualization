import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { dateComparingFormat } from '../constants';

// components
import {
  AnalyticsCurrentVisits,
  AnalyticsWebsiteVisits,
} from '../../components/comparingCharts';

import { EventContext } from './EventModuleWithContext';
function DiagramSection() {
  const {
    totalEvents,
    totalDaysWithMinValues,
    startFirstDate,
    // Compare data
    isCompare,
    startComparedDate,
    totalEventsComparing,
    periodTimeDefault,
    hourComparingChartData,
    eventsForEachHourComparingDefault,
    eventsForEachHourComparingSecond,
  } = useContext(EventContext);
  return (
    <>
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
            data={[totalDaysWithMinValues, periodTimeDefault]}
            title='Total days with min values / total days'
          />
        </Grid>
      )}

      <Grid item xs={12} md={6} lg={8}>
        <AnalyticsWebsiteVisits
          data={
            isCompare
              ? [
                  eventsForEachHourComparingDefault,
                  eventsForEachHourComparingSecond,
                ]
              : [eventsForEachHourComparingDefault]
          }
          labels={[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23,
          ]}
        />
      </Grid>
    </>
  );
}

export default DiagramSection;
