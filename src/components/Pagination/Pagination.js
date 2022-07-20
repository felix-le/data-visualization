import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const paginationStyles = makeStyles({
  paginationWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    listStyle: 'none',

    '& li': {
      listStyle: 'none',
      marginRight: '10px',
      '&:last-child': {
        marginRight: '0px',
      },
    },

    '& .isDisabled': {
      cursor: 'notAllowed',
      opacity: 0.5,
    },
    '& .highlightCurrent': {
      backgroundColor: '#4CAF50',
    },
    '& .inputPageNumber': {
      maxWidth: '150px',
      padding: '10px',
      fontSize: '18px',
    },
    '& button.disabled': {
      backgroundColor: '#f5f5f5',
      borderColor: ' #ddd',
      color: 'black',
    },
  },
});

const Pagination = ({
  totalItems,
  rowsPerPage,
  handleChangePage,
  currentPage,
}) => {
  const classes = paginationStyles();
  const [firstPage, setFirstPage] = useState(false);
  const [lastPage, setLastPage] = useState(false);
  const numberPage = Math.ceil(totalItems / rowsPerPage);

  useEffect(() => {
    if (currentPage === 1) {
      setFirstPage(true);
    } else {
      setFirstPage(false);
    }
    if (currentPage === numberPage) {
      setLastPage(true);
    } else {
      setLastPage(false);
    }
  }, [currentPage, numberPage]);

  const [goPage, setGoPage] = useState('');
  function _handleKeyDown(e) {
    const { value } = e.target;
    if (!value) {
      return;
    } else {
      if (value > 0 && value <= numberPage) {
        setGoPage(value);
      } else {
        setGoPage(numberPage);
      }
    }
  }
  function _handleKeyPress(e) {
    const code = e.keyCode || e.which;
    if (code === 13) {
      if (!goPage) {
        e.preventDefault();
      } else {
        handleChangePage(e, goPage);
        setGoPage('');
      }
    }
  }

  return (
    <div
      className='card-footer bg-white d-sm-flex justify-content-sm-between align-items-sm-center mt-4'
      style={{ minHeight: '60px' }}
    >
      {numberPage > 1 ? (
        <>
          <div className='showingPage'>
            Page {parseFloat(currentPage)} / {numberPage} Pages
          </div>
          <nav>
            <ul className={`${classes.paginationWrapper} pagination`}>
              <li className='page-item'>
                <Button
                  variant='contained'
                  onClick={(e) => handleChangePage(e, 1)}
                  disabled={firstPage ? 'disabled' : null}
                >
                  First
                </Button>
              </li>
              {currentPage > 1 ? (
                <>
                  <li className='page-item'>
                    <Button
                      variant='contained'
                      onClick={(e) =>
                        handleChangePage(e, parseFloat(currentPage) - 1)
                      }
                    >
                      Back
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li className='page-item'>
                    <Button
                      variant='contained'
                      onClick={(e) => e.preventDefault()}
                      disabled={firstPage ? 'disabled' : null}
                    >
                      Back
                    </Button>
                  </li>
                </>
              )}
              <li className='page-item'>
                <form noValidate>
                  <input
                    type='number'
                    className='page-link inputPageNumber'
                    placeholder={`${parseFloat(currentPage)}/${numberPage}`}
                    onKeyPress={_handleKeyPress}
                    onChange={(e) => _handleKeyDown(e)}
                    value={goPage}
                  />
                </form>
              </li>
              {currentPage < numberPage ? (
                <>
                  <li className='page-item ml-3'>
                    <Button
                      variant='contained'
                      color='secondary'
                      onClick={(e) =>
                        handleChangePage(e, parseFloat(currentPage) + 1)
                      }
                    >
                      Next
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li className='page-item ml-3'>
                    <Button
                      variant='contained'
                      color='secondary'
                      onClick={(e) => e.preventDefault()}
                      disabled={lastPage ? 'disabled' : null}
                    >
                      Next
                    </Button>
                  </li>
                </>
              )}
              <li className='page-item ml-3 '>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={(e) => handleChangePage(e, numberPage)}
                  disabled={lastPage ? 'disabled' : null}
                >
                  Last
                </Button>
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </div>
  );
};

export default Pagination;
