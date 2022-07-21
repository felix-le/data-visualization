import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../utils/formatNumber';
//
import { BaseOptionChart } from './chart';

// ----------------------------------------------------------------------

const CHART_DATA = [
  { data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] },
];

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
