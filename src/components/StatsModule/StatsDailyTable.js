import React, { useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// Context
import { StatsContext } from './StatsModuleWithContext';

// components
import Box from '@mui/material/Box';
import SearchBar from '../SearchBar';

import Table from './Table';

import {
  flipSortDirection,
  STATS_DAILY_TABLE_HEADER,
  STATS_DAILY_SORTING_CATEGORIES,
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
    statsDailyTableDataControl,
    setStatsDailyTableDataControl,
    // Compare data
    isCompare,
    finalDisplayStatsDaily,
    finalDisplayStatsDailyCompering,
    statsDailySearch,
    setStatsDailySearch,
  } = useContext(StatsContext);

  const { sortStatsDailyCol, sortStatsDailyDirection } =
    statsDailyTableDataControl;

  function _handleChangeSort(col) {
    setStatsDailyTableDataControl({
      ...statsDailyTableDataControl,
      sortStatsDailyCol: col,
      sortStatsDailyDirection: flipSortDirection(sortStatsDailyDirection),
    });
  }

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
            Stats Daily Data Table{' '}
          </Typography>
          <SearchBar
            searchTerm={statsDailySearch}
            setSearchTerm={setStatsDailySearch}
          />
        </Box>
        <Grid item xs={isCompare ? 6 : 12}>
          <Item>
            <Table
              handleChangeSort={_handleChangeSort}
              dataBody={finalDisplayStatsDaily}
              headers={STATS_DAILY_TABLE_HEADER}
              currentSortCol={sortStatsDailyCol}
              currentSortDir={sortStatsDailyDirection}
              categories={STATS_DAILY_SORTING_CATEGORIES}
            />
          </Item>
        </Grid>
        {isCompare && (
          <>
            <Grid item xs={6}>
              <Item>
                <Table
                  handleChangeSort={_handleChangeSort}
                  dataBody={finalDisplayStatsDailyCompering}
                  headers={STATS_DAILY_TABLE_HEADER}
                  currentSortCol={sortStatsDailyCol}
                  currentSortDir={sortStatsDailyDirection}
                  categories={STATS_DAILY_SORTING_CATEGORIES}
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
