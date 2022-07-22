import React, { useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// Context
import { StatsContext } from './StatsModuleWithContext';

// components
import Box from '@mui/material/Box';
import SearchBar from '../SearchBar';
import { dateComparingFormat } from '../constants';
import Table from './Table';

import {
  flipSortDirection,
  STATS_HOURLY_TABLE_HEADER,
  STATS_HOURLY_SORTING_CATEGORIES,
} from '../constants';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function StatsDailyTable() {
  const {
    statsHourlyTableDataControl,
    setStatsHourlyTableDataControl,
    // Compare data
    isCompare,
    finalDisplayStatsHourly,
    statsHourlySearch,
    setStatsHourlySearch,
    finalDisplayStatsHourlyCompering,
    startFirstDate,
    startComparedDate,
  } = useContext(StatsContext);

  const { sortStatsHourlyCol, sortStatsHourlyDirection } =
    statsHourlyTableDataControl;

  function _handleChangeSort(col) {
    setStatsHourlyTableDataControl({
      ...statsHourlyTableDataControl,
      sortStatsHourlyCol: col,
      sortStatsHourlyDirection: flipSortDirection(sortStatsHourlyDirection),
    });
  }
  const startDate = dateComparingFormat(startFirstDate.firstStart);
  const endDate = dateComparingFormat(startFirstDate.firstEnd);
  //
  const startCompareDateFormat = dateComparingFormat(
    startComparedDate.secondStart
  );
  const endCompareDateFormat = dateComparingFormat(startComparedDate.secondEnd);

  const title = `${startDate} - ${endDate}`;
  const compareTitle = `${startCompareDateFormat} - ${endCompareDateFormat}`;
  return (
    <>
      {' '}
      <Grid
        container
        rowSpacing={1}
        sx={{ my: 5 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Box component='span' sx={{ p: 2, textAlign: 'center', width: '100%' }}>
          <Typography variant='h5' align='center' sx={{ mb: 2 }}>
            {' '}
            Stats Hourly Data Table{' '}
          </Typography>
          <SearchBar
            searchTerm={statsHourlySearch}
            setSearchTerm={setStatsHourlySearch}
          />
        </Box>
        <Grid item xs={isCompare ? 6 : 12}>
          <Item>
            <Table
              handleChangeSort={_handleChangeSort}
              dataBody={finalDisplayStatsHourly}
              headers={STATS_HOURLY_TABLE_HEADER}
              currentSortCol={sortStatsHourlyCol}
              currentSortDir={sortStatsHourlyDirection}
              categories={STATS_HOURLY_SORTING_CATEGORIES}
              title={title}
            />
          </Item>
        </Grid>
        {isCompare && (
          <>
            <Grid item xs={6}>
              <Item>
                <Table
                  handleChangeSort={_handleChangeSort}
                  dataBody={finalDisplayStatsHourlyCompering}
                  headers={STATS_HOURLY_TABLE_HEADER}
                  currentSortCol={sortStatsHourlyCol}
                  currentSortDir={sortStatsHourlyDirection}
                  categories={STATS_HOURLY_SORTING_CATEGORIES}
                  title={compareTitle}
                />
              </Item>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}

export default StatsDailyTable;
