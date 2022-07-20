import React, { useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// Context
import { EventContext } from './EventModuleWithContext';

// components
import Box from '@mui/material/Box';
import EventSearchBar from './EventSearchBar';

import EventDailySingleTable from './EventDailySingleTable';
import { flipSortDirection } from '../constants';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function EventDailyTable() {
  const {
    // Compare data
    isCompare,
    finalDisplayEventDailyDefault,
    searchEventDailyTerm,
    setSearchEventDailyTerm,
    setEventDailySortCol,
    sortEventDailyDirection,
    setSortEventDailyDirection,
    finalDisplayEventDailyComparing,
  } = useContext(EventContext);

  function _handleChangeSort(col) {
    setEventDailySortCol(col);
    setSortEventDailyDirection(flipSortDirection(sortEventDailyDirection));
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
            Table event Daily Data{' '}
          </Typography>
          <EventSearchBar
            searchTerm={searchEventDailyTerm}
            setSearchTerm={setSearchEventDailyTerm}
          />
        </Box>
        <Grid item xs={isCompare ? 6 : 12}>
          <Item>
            <EventDailySingleTable
              handleChangeSort={_handleChangeSort}
              data={finalDisplayEventDailyDefault}
            />
          </Item>
        </Grid>
        {isCompare && (
          <>
            <Grid item xs={6}>
              <Item>
                <EventDailySingleTable
                  handleChangeSort={_handleChangeSort}
                  data={finalDisplayEventDailyComparing}
                />
              </Item>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}

export default EventDailyTable;
