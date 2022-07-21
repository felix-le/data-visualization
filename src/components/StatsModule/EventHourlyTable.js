import React, { useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// Context
import { EventContext } from './EventModuleWithContext';

// components
import Box from '@mui/material/Box';
import SearchBar from './SearchBar';

import EventHourlySingleTable from './EventHourlySingleTable';
import { flipSortDirection } from '../constants';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function EventHourlyTable() {
  const {
    // Compare data
    isCompare,
    finalDisplayEventHourlyDefault,
    finalDisplayEventHourlyComparing,
    setEventHourlySortCol,
    sortEventHourlyDirection,
    setSortEventHourlyDirection,
    searchEventHourlyTerm,
    setSearchEventHourlyTerm,
  } = useContext(EventContext);

  function _handleChangeSort(col) {
    setEventHourlySortCol(col);
    setSortEventHourlyDirection(flipSortDirection(sortEventHourlyDirection));
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
            Table event Hourly Data{' '}
          </Typography>
          <SearchBar
            searchTerm={searchEventHourlyTerm}
            setSearchTerm={setSearchEventHourlyTerm}
          />
        </Box>
        <Grid item xs={isCompare ? 6 : 12}>
          <Item>
            <EventHourlySingleTable
              handleChangeSort={_handleChangeSort}
              data={finalDisplayEventHourlyDefault}
            />
          </Item>
        </Grid>
        {isCompare && (
          <>
            <Grid item xs={6}>
              <Item>
                <EventHourlySingleTable
                  handleChangeSort={_handleChangeSort}
                  data={finalDisplayEventHourlyComparing}
                />
              </Item>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}

export default EventHourlyTable;
