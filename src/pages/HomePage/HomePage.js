import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  getEventHourly,
  getEventDaily,
} from '../../store/actions/event.actions';
import { getEventHourlyApi, getEDailyApi } from '../../api/getEvents';

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
  return <h1>HomePage</h1>;
}

export default HomePage;
