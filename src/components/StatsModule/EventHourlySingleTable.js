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
import { EVENT_HOURLY_SORTING_CATEGORIES, SORT_DIRECTION } from '../constants';
import { useStyles } from './styles';
import { SortAscendingIcon, SortDescendingIcon } from '@heroicons/react/solid';

import usePaginationParams from '../../hooks/usePagination';
import Pagination from '../Pagination';

function EventHourlySingleTable({ data, handleChangeSort }) {
  const styles = useStyles();
  const {
    // Compare data
    sortEventHourlyCol,
    sortEventHourlyDirection,
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
                  EVENT_HOURLY_SORTING_CATEGORIES.EVENT_HOURLY_DATE
                )
              }
            >
              <div className='thWrapper'>
                <span>Date</span>
                {sortEventHourlyCol ===
                  EVENT_HOURLY_SORTING_CATEGORIES.EVENT_HOURLY_DATE &&
                sortEventHourlyDirection === SORT_DIRECTION.ASC ? (
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
                  EVENT_HOURLY_SORTING_CATEGORIES.EVENT_HOURLY_HOURS
                )
              }
            >
              <div className='thWrapper'>
                <span>Hour</span>
                {sortEventHourlyCol ===
                  EVENT_HOURLY_SORTING_CATEGORIES.EVENT_HOURLY_HOURS &&
                sortEventHourlyDirection === SORT_DIRECTION.ASC ? (
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
                  EVENT_HOURLY_SORTING_CATEGORIES.EVENT_HOURLY_EVENTS
                )
              }
            >
              <div className='thWrapper'>
                <span>Events</span>
                {sortEventHourlyCol ===
                  EVENT_HOURLY_SORTING_CATEGORIES.EVENT_HOURLY_EVENTS &&
                sortEventHourlyDirection === SORT_DIRECTION.ASC ? (
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
                  <TableCell align='center'>{event.hour}</TableCell>
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

export default EventHourlySingleTable;
