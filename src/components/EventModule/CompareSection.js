import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useStyles } from './styles';
import { EventContext } from './EventModuleWithContext';
import DatePicker from 'react-datepicker';
import Switch from '@mui/material/Switch';
import { minDate, maxDate } from '../constants';

function CompareSection() {
  const styles = useStyles();

  const {
    startFirstDate,
    setStartFirstDate,
    setIsCompare,
    // Compare data
    isCompare,
    startComparedDate,
    setStartComparedDate,
  } = useContext(EventContext);

  return (
    <>
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography variant='h5' className='text-center'>
          Compare
        </Typography>
        <Switch
          checked={isCompare}
          onChange={() => setIsCompare(!isCompare)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </Box>
      <div className={styles.comparedWrapper}>
        <Typography variant='h5'>From</Typography>
        <DatePicker
          selected={startFirstDate.firstStart}
          onChange={(date) =>
            setStartFirstDate({ ...startFirstDate, firstStart: date })
          }
          minDate={minDate}
          maxDate={maxDate}
        />

        <Typography variant='h5'>To</Typography>
        <DatePicker
          selected={startFirstDate.firstEnd}
          onChange={(date) =>
            setStartFirstDate({ ...startFirstDate, firstEnd: date })
          }
          minDate={startFirstDate.firstStart}
          maxDate={maxDate}
        />

        {isCompare && (
          <>
            <Box sx={{ m: 2 }} />
            <Typography variant='h5' className='mx-5 text-red'>
              Compare
            </Typography>
            <Box sx={{ m: 2 }} />
            <Typography variant='h5'>From</Typography>
            <DatePicker
              selected={startComparedDate.secondStart}
              onChange={(date) =>
                setStartComparedDate({
                  ...startComparedDate,
                  secondStart: date,
                })
              }
              minDate={startFirstDate.firstEnd}
              maxDate={maxDate}
            />

            <Typography variant='h5'>To</Typography>
            <DatePicker
              selected={startComparedDate.secondEnd}
              defaultValue={maxDate}
              onChange={(date) =>
                setStartComparedDate({
                  ...startComparedDate,
                  secondEnd: date,
                })
              }
              minDate={startComparedDate.secondStart}
              maxDate={maxDate}
            />
          </>
        )}
      </div>
    </>
  );
}

export default CompareSection;
