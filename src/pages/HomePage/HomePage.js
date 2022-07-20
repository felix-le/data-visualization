import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container } from '@mui/system';
// Api
import { getEventHourlyApi, getEDailyApi } from '../../api/getEvents';

import { getStatsHourlyApi, getStatsDailyApi } from '../../api/getStats';

import { getPoiApi } from '../../api/getPoiApi';

// Redux
import {
  getEventHourly,
  getEventDaily,
} from '../../store/actions/event.actions';

import {
  getStatsHourly,
  getStatsDaily,
} from '../../store/actions/stats.actions';

import { getPoi } from '../../store/actions/poi.actions';

//Components

import Navbar from '../../components/NavBar';

function HomePage() {
  const dispatch = useDispatch();

  // Events
  const _getEventHourly = useCallback(async () => {
    const response = await getEventHourlyApi();
    dispatch(getEventHourly(response));
  }, [dispatch]);

  const _getEventDaily = useCallback(async () => {
    const response = await getEDailyApi();
    dispatch(getEventDaily(response));
  }, [dispatch]);

  // Stats
  const _getStatsHourly = useCallback(async () => {
    const response = await getStatsHourlyApi();
    dispatch(getStatsHourly(response));
  }, [dispatch]);

  const _getStatsDaily = useCallback(async () => {
    const response = await getStatsDailyApi();
    dispatch(getStatsDaily(response));
  }, [dispatch]);

  // POI
  const _getPoi = useCallback(async () => {
    const response = await getPoiApi();
    dispatch(getPoi(response));
  }, [dispatch]);

  useEffect(() => {
    _getPoi();
  }, [_getPoi]);

  useEffect(() => {
    _getEventHourly();
    _getEventDaily();
  }, [_getEventHourly, _getEventDaily]);

  useEffect(() => {
    _getStatsHourly();
    _getStatsDaily();
  }, [_getStatsHourly, _getStatsDaily]);

  return (
    <>
      <Navbar />

      <Container>
        <h1>Thank you for giving me a chance to join your team</h1>
        <p>Please check answers</p>
        <div className='question-wrapper'>
          <Link to='/events'>
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
