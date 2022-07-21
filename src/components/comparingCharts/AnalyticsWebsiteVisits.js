import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from './chart';

// ----------------------------------------------------------------------

export default function AnalyticsWebsiteVisits({ data, labels }) {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 5] },
    plotOptions: { bar: { columnWidth: '14%' } },
    fill: { type: ['solid', 'solid'] },
    labels: labels,
    xaxis: { type: 'hour' },
    tooltip: {
      enabled: false,
    },
  });

  return (
    <Card>
      <CardHeader title='Events per hour' />
      <Box sx={{ p: 3, pb: 1 }} dir='ltr'>
        <ReactApexChart
          type='line'
          series={data}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
