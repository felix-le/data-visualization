import React, { useContext } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from '@mui/material';
import { EventContext } from './EventModuleWithContext';
import { EVENT_DAILY_SORTING_CATEGORIES, SORT_DIRECTION } from '../constants';
import { useStyles } from './styles';
import { SortAscendingIcon, SortDescendingIcon } from '@heroicons/react/solid';

import usePaginationParams from '../../hooks/usePagination';
import Pagination from '../Pagination';

function EventDailySingleTable({ data, handleChangeSort }) {
  const styles = useStyles();
  const {
    // Compare data
    sortEventDailyCol,
    sortEventDailyDirection,
  } = useContext(EventContext);
  const { currentPage, rowsPerPage, handleChangePage } = usePaginationParams(
    data?.length
  );

  return (
    <TableContainer className={styles.tableContainer}>
      <Table aria-label='sticky table' stickyHeader className={styles.table}>
        <TableHead className={styles.tableHead}>
          <TableRow>
            <TableCell
              align='center'
              onClick={() =>
                handleChangeSort(
                  EVENT_DAILY_SORTING_CATEGORIES.EVENT_DAILY_DATE
                )
              }
            >
              <div className='thWrapper'>
                <span>Date</span>
                {sortEventDailyCol ===
                  EVENT_DAILY_SORTING_CATEGORIES.EVENT_DAILY_DATE &&
                sortEventDailyDirection === SORT_DIRECTION.ASC ? (
                  <SortAscendingIcon className='iconContainer' />
                ) : (
                  <SortDescendingIcon className='iconContainer' />
                )}
              </div>
            </TableCell>
            <TableCell
              align='center'
              onClick={() =>
                handleChangeSort(
                  EVENT_DAILY_SORTING_CATEGORIES.EVENT_DAILY_EVENTS
                )
              }
            >
              <div className='thWrapper'>
                <span>Events</span>
                {sortEventDailyCol ===
                  EVENT_DAILY_SORTING_CATEGORIES.EVENT_DAILY_EVENTS &&
                sortEventDailyDirection === SORT_DIRECTION.ASC ? (
                  <SortAscendingIcon className='iconContainer' />
                ) : (
                  <SortDescendingIcon className='iconContainer' />
                )}
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 &&
            data
              ?.slice(
                (currentPage - 1) * rowsPerPage,
                currentPage * rowsPerPage
              )
              .map((event, i) => (
                <TableRow key={i}>
                  <TableCell align='center'>{event.date}</TableCell>
                  <TableCell align='center'>{event.events}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>

      <Pagination
        totalItems={data?.length}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
      />
    </TableContainer>
  );
}

export default EventDailySingleTable;
