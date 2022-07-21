import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

// Api
import { getEventHourlyApi, getEDailyApi } from '../../api/getEvents';

import { getStatsHourlyApi, getStatsDailyApi } from '../../api/getStats';

import { getPoiApi } from '../../api/getPoiApi';

import { useStyles } from './styles';
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

import video from './homepageVideo.mp4';

function HomePage() {
  const dispatch = useDispatch();
  const classes = useStyles();
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
      <div className={classes.homeHero}>
        <video
          className={classes.homeHeroVideo}
          loop
          muted
          autoPlay
          controls=''
        >
          <source src={video} type='video/mp4' />
        </video>
        <div className={classes.overlay}></div>
        <div className={classes.heroContent}>
          <Typography variant='h1'>We will make it together</Typography>
          <Typography variant='h3' style={{ fontWeight: 'normal' }}>
            Welcome to <strong>home</strong>, my <strong>teammate!</strong>
          </Typography>
          <Typography variant='h5'>Click to checkout our reports</Typography>
          <div className={classes.questionWrapper}>
            <Button variant='contained' color='primary'>
              <Link to='/events'>
                {' '}
                <Typography variant='h5'> Events </Typography>
              </Link>{' '}
            </Button>
            <br />
            <Button variant='contained' color='primary'>
              <Link to='/stats'>
                {' '}
                <Typography variant='h5'> stats </Typography>
              </Link>{' '}
            </Button>
            <br />
            <Button variant='contained' color='primary'>
              <Link to='/geo'>
                {' '}
                <Typography variant='h5'> Geo </Typography>
              </Link>{' '}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
