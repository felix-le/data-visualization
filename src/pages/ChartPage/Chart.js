import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import { Grid, Container, Typography } from '@mui/material';

// sections
import {
  // AnalyticsCurrentVisits,
  // AnalyticsWebsiteVisits,
  AnalyticsWidgetSummary,
  // AnalyticsCurrentSubject,
  // AnalyticsConversionRates,
} from '../../components/comparingCharts';

function Chart() {
  const newstate = useSelector((state) => state);
  return (
    <Layout>
      <Container maxWidth='xl'>
        <Typography variant='h4' sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title='Weekly Sales'
              total={714000}
              icon={'ant-design:android-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title='New Users'
              total={1352831}
              color='info'
              icon={'ant-design:apple-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title='Item Orders'
              total={1723315}
              color='warning'
              icon={'ant-design:windows-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary
              title='Bug Reports'
              total={234}
              color='error'
              icon={'ant-design:bug-filled'}
            />
          </Grid>
          {/* 
          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsCurrentSubject />
          </Grid> */}
        </Grid>
      </Container>
    </Layout>
  );
}

export default Chart;
