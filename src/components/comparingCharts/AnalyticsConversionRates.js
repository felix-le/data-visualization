import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Box, Card, CardHeader } from '@mui/material';

//
import { BaseOptionChart } from './chart';

// ----------------------------------------------------------------------

export default function AnalyticsConversionRates({ title, categories, data }) {
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      enable: false,
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '28%', borderRadius: 2 },
    },
    xaxis: {
      categories: categories,
    },
  });

  return (
    <Card>
      <CardHeader title={title} />
      <Box sx={{ mx: 3 }} dir='ltr'>
        <ReactApexChart
          type='bar'
          series={data}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
