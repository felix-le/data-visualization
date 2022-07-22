import React, { useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
// Context
import { EventContext } from './EventModuleWithContext';

// components
import Box from '@mui/material/Box';
import SearchBar from '../SearchBar';

import EventHourlySingleTable from './EventHourlySingleTable';
import { flipSortDirection } from '../constants';
import { dateComparingFormat } from '../constants';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  root: {
    margin: 0,
    width: '100%',
  },
});

function EventHourlyTable() {
  const classes = useStyles();
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
    startFirstDate,
    startComparedDate,
  } = useContext(EventContext);

  function _handleChangeSort(col) {
    setEventHourlySortCol(col);
    setSortEventHourlyDirection(flipSortDirection(sortEventHourlyDirection));
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
        sx={{ my: 5, mx: 0 }}
        className={classes.root}
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
              title={title}
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

export default EventHourlyTable;
