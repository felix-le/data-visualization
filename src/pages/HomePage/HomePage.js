import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container } from '@mui/system';
// Api
import { getEventHourlyApi, getEDailyApi } from '../../api/getEvents';

// Redux
import {
  getEventHourly,
  getEventDaily,
} from '../../store/actions/event.actions';

//Components

import Navbar from '../../components/NavBar';

function HomePage() {
  const dispatch = useDispatch();
  // useCallback for _getEventHourly
  const _getEventHourly = useCallback(async () => {
    const response = await getEventHourlyApi();

    dispatch(getEventHourly(response));
  }, [dispatch]);

  const _getEventDaily = useCallback(async () => {
    const response = await getEDailyApi();
    dispatch(getEventDaily(response));
  }, [dispatch]);

  useEffect(() => {
    _getEventHourly();
    _getEventDaily();
  }, [_getEventHourly, _getEventDaily]);
  return (
    <>
      <Navbar />

      <Container>
        <h1>Thank you for giving me a chance to join your team</h1>
        <p>Please check answers</p>
        <div className='question-wrapper'>
          <Link to='/chart'>
            {' '}
            Question 1: Client-side general chart visualizations
          </Link>{' '}
          <br />
          <Link to='/table'> Question 2: Client-side data table</Link>
          <br />
          <Link to='/geo'>Question 3: Geo</Link>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
