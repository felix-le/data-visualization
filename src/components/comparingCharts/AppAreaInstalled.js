import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
//
import { BaseOptionChart } from './chart';

// ----------------------------------------------------------------------

export default function AppAreaInstalled({
  title = '',
  categories = [],
  dataShow = [],
}) {
  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      categories: categories,
    },
  });

  return (
    <Card>
      <CardHeader title={title} />

      <Box sx={{ mt: 3, mx: 3, width: '100%' }} dir='ltr'>
        {
          <ReactApexChart
            type='line'
            series={dataShow[0].data}
            options={chartOptions}
            height={364}
          />
        }
      </Box>
    </Card>
  );
}
