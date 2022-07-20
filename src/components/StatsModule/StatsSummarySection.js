import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { StatsContext } from './StatsModuleWithContext';
import { AnalyticsWidgetSummary } from '../comparingCharts';

function StatsSummarySection() {
  const {
    isCompare,
    totalDailyImpressions,
    totalDailyClicks,
    totalDailyRevenue,
    overallDailyCTR,

    // Table
    totalDailyComperingImpressions,
    totalDailyComperingClicks,
    totalDailyComperingRevenue,
    overallDailyComperingCTR,
  } = useContext(StatsContext);
  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <AnalyticsWidgetSummary
          title='Total Impressions'
          total={`${
            isCompare
              ? `${totalDailyImpressions}/${totalDailyComperingImpressions}`
              : totalDailyImpressions
          }`}
          icon={'ant-design:bell-filled'}
          isCompare={isCompare}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <AnalyticsWidgetSummary
          title='Total Clicks'
          // total={maxEvents?.events}
          total={`${
            isCompare
              ? `${totalDailyClicks}/${totalDailyComperingClicks}`
              : totalDailyClicks
          }`}
          color='info'
          icon={'ant-design:calendar-filled'}
          isCompare={isCompare}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <AnalyticsWidgetSummary
          title='Total Revenue'
          // total={hourWithMaxEvents?.events}
          total={`${
            isCompare
              ? `${totalDailyRevenue.toFixed(2)}/${totalDailyComperingRevenue}`
              : totalDailyRevenue
          }`}
          color='warning'
          icon={'ant-design:windows-filled'}
          isCompare={isCompare}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <AnalyticsWidgetSummary
          title='Overall CTR'
          total={`${
            isCompare
              ? `${overallDailyCTR}/${overallDailyComperingCTR}`
              : overallDailyCTR
          }`}
          color='primary'
          icon={'ant-design:warning-filled'}
          isCompare={isCompare}
        />
      </Grid>
    </>
  );
}

export default StatsSummarySection;
