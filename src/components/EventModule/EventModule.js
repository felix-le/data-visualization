import React, { useContext, useState } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useStyles } from './styles';

// Context
import { EventContext } from './EventModuleWithContext';

// components
import Box from '@mui/material/Box';
import EventSearchBar from './/EventSearchBar';
// sections
import CompareSection from './CompareSection';
import EventSummarySection from './EventSummarySection';
import DiagramSection from './DiagramSection';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function EventModule() {
  const {
    totalEvents,
    totalDaysWithMinValues,
    startFirstDate,
    // Compare data
    isCompare,
    startComparedDate,
    totalEventsComparing,
    periodTimeDefault,
    hourComparingChartData,

    finalDisplayEventDaily,
    sortEventDailyCol,
    setEventDailySortCol,
    sortEventDailyDirection,
    setSortEventDailyDirection,
    searchEventDailyTerm,
    setSearchEventDailyTerm,
  } = useContext(EventContext);

  const styles = useStyles();

  return (
    <Container maxWidth='xl'>
      <Typography variant='h4' align='center' sx={{ mb: 5 }}>
        Hi, Please check report from 01/01/2017 to 03/11/2017
      </Typography>
      <CompareSection />
      <Grid container spacing={3}>
        <EventSummarySection />

        <Grid
          container
          rowSpacing={1}
          sx={{ my: 5 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Box
            component='span'
            sx={{ p: 2, textAlign: 'center', width: '100%' }}
          >
            <Typography variant='h5' align='center'>
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
              <TableContainer className={styles.tableContainer}>
                <Table
                  aria-label='sticky table'
                  stickyHeader
                  className={styles.table}
                >
                  <TableHead className={styles.tableHead}>
                    <TableRow>
                      <TableCell align='center'>Date</TableCell>
                      <TableCell align='center'>Events</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {finalDisplayEventDaily.length > 0 &&
                      finalDisplayEventDaily.map((event, i) => (
                        <TableRow key={i}>
                          <TableCell align='center'>{event.date}</TableCell>
                          <TableCell align='center'>{event.events}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                {/* 
          {!finalDisplayedTeams.length && <NoTeamsFound />}

          <Pagination
            count={finalDisplayedTeams?.length}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          /> */}
              </TableContainer>
            </Item>
          </Grid>
          {/* <Grid item xs={6}>
            <Item>2</Item>
          </Grid> */}
        </Grid>
        {/* Compare for daily events */}
        <DiagramSection />
      </Grid>
    </Container>
  );
}

export default EventModule;
