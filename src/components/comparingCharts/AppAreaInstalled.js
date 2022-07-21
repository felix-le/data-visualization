import merge from 'lodash/merge';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box, TextField } from '@mui/material';
// components
//
import { BaseOptionChart } from './chart';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    data: [
      { name: 'Asia', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
      { name: 'America', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
    ],
  },
];

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
