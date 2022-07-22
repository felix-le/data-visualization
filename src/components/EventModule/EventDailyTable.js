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
import { dateComparingFormat } from '../constants';
import EventDailySingleTable from './EventDailySingleTable';
import { flipSortDirection } from '../constants';

const useStyles = makeStyles({
  root: {
    margin: 0,
    width: '100%',
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function EventDailyTable() {
  const classes = useStyles();
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

    startFirstDate,
    startComparedDate,
  } = useContext(EventContext);

  function _handleChangeSort(col) {
    setEventDailySortCol(col);
    setSortEventDailyDirection(flipSortDirection(sortEventDailyDirection));
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
        <Box component='span' sx={{ textAlign: 'center', width: '100%' }}>
          <Typography variant='h5' align='center' sx={{ mb: 2 }}>
            {' '}
            Table event Daily Data{' '}
          </Typography>
          <SearchBar
            searchTerm={searchEventDailyTerm}
            setSearchTerm={setSearchEventDailyTerm}
          />
        </Box>
        <Grid item xs={isCompare ? 6 : 12} sx={{ mt: 3 }}>
          <Item>
            <EventDailySingleTable
              handleChangeSort={_handleChangeSort}
              data={finalDisplayEventDailyDefault}
              title={title}
            />
          </Item>
        </Grid>
        {isCompare && (
          <>
            <Grid item xs={6} sx={{ mt: 3 }}>
              <Item>
                <EventDailySingleTable
                  handleChangeSort={_handleChangeSort}
                  data={finalDisplayEventDailyComparing}
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

export default EventDailyTable;
