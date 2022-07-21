import React, { useContext } from 'react';
import { Grid } from '@mui/material';

// components
import {
  AnalyticsConversionRates,
  AppAreaInstalled,
} from '../../components/comparingCharts';

import { StatsContext } from './StatsModuleWithContext';
function DiagramSection() {
  const {
    averageCRHourlyDefault,
    averageCRHourlyCompering,
    isCompare,
    crPerDay,
    ctrPerDay,
    dateForDiagramTimeLine,
  } = useContext(StatsContext);
  const formattedDataForCVRDiagram = isCompare
    ? [
        {
          data: averageCRHourlyDefault,
        },
        {
          data: averageCRHourlyCompering,
        },
      ]
    : [
        {
          data: averageCRHourlyDefault,
        },
      ];
  const formattedDataForAppAreaInstalled = [
    {
      data: [
        { name: 'Convertion rate Per Day', data: crPerDay },
        { name: 'CTR Per Day', data: ctrPerDay },
      ],
    },
  ];

  return (
    <>
      <Grid item xs={12}>
        <AnalyticsConversionRates
          categories={[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23,
          ]}
          data={formattedDataForCVRDiagram}
          title='Average Conversion Rate Per Hour'
        />
      </Grid>
      <Grid item xs={12}>
        {/* compare avenue vs click base on time */}
        <AppAreaInstalled
          title='Revenue / Clicks'
          categories={dateForDiagramTimeLine}
          dataShow={formattedDataForAppAreaInstalled}
        />
      </Grid>
    </>
  );
}

export default DiagramSection;
