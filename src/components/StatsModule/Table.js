import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableContainer,
  TableCell,
} from '@mui/material';
import { SortAscendingIcon, SortDescendingIcon } from '@heroicons/react/solid';
import { SORT_DIRECTION } from '../constants';
import { useStyles } from './styles';

import usePaginationParams from '../../hooks/usePagination';
import Pagination from '../Pagination';

function TableComponent({
  headers,
  dataBody,
  handleChangeSort,
  currentSortCol,
  currentSortDir,
  categories,
}) {
  const styles = useStyles();

  const { currentPage, rowsPerPage, handleChangePage } = usePaginationParams(
    dataBody?.length
  );

  return (
    <TableContainer className={styles.tableContainer}>
      <Table aria-label='sticky table' stickyHeader className={styles.table}>
        <TableHead className={styles.tableHead}>
          <TableRow>
            {headers.length > 0 &&
              headers.map((header) => {
                return (
                  <TableCell
                    align='center'
                    onClick={() => handleChangeSort(header.key)}
                    key={header.key}
                  >
                    <div className='thWrapper'>
                      <span>{header.label}</span>
                      {currentSortCol === categories[header.key] &&
                      currentSortDir === SORT_DIRECTION.ASC ? (
                        <SortAscendingIcon className='iconContainer' />
                      ) : (
                        <SortDescendingIcon className='iconContainer' />
                      )}
                    </div>
                  </TableCell>
                );
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataBody.length > 0 &&
            dataBody
              ?.slice(
                (currentPage - 1) * rowsPerPage,
                currentPage * rowsPerPage
              )
              .map((row, i) => {
                return (
                  <TableRow key={i}>
                    {Object.keys(row).map((key) => {
                      return (
                        <TableCell key={key} align='center'>
                          {row[key]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
        </TableBody>
      </Table>
      <Pagination
        totalItems={dataBody?.length}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
      />
    </TableContainer>
  );
}

export default TableComponent;
