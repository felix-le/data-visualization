import React, { createContext, useState, useMemo } from 'react';

import {
  statsMinDate,
  statsMaxDate,
  STATS_HOURLY_SORTING_CATEGORIES,
} from '../constants';

import { getAverageCVR } from './utils/getStatsHour';

// components
import StatsModule from './StatsModule';

import getTableStatsDaily from './utils/getTableStatsDaily';
import getTableStatsHourly from './utils/getTableStatsHourly';

import { getSumStatsDaily, getStatsDataPeriod } from './utils/getStatsDaily';

import { STATS_DAILY_SORTING_CATEGORIES, SORT_DIRECTION } from '../constants';

export const StatsContext = createContext({});

const EventWithContext = ({ statsDaily, statsHourly }) => {
  const [startFirstDate, setStartFirstDate] = useState({
    firstStart: statsMinDate,
    firstEnd: statsMaxDate,
  });

  const [startComparedDate, setStartComparedDate] = useState({
    secondStart: startFirstDate.firstEnd,
    secondEnd: statsMaxDate,
  });

  const [isCompare, setIsCompare] = useState(false);

  // Default Data
  const statsDailyDefaultData = getStatsDataPeriod(
    statsDaily,
    startFirstDate.firstStart,
    startFirstDate.firstEnd
  ).map((stat) => {
    // add cr and ctr
    const newObj = {
      ...stat,
      cr: parseFloat(((stat.revenue / stat.impressions) * 100).toFixed(2)),
      ctr: parseFloat(((stat.clicks / stat.impressions) * 100).toFixed(2)),
    };
    return newObj;
  });

  const totalDailyImpressions = getSumStatsDaily(
    statsDailyDefaultData,
    'impressions'
  );
  const totalDailyClicks = getSumStatsDaily(statsDailyDefaultData, 'clicks');
  const totalDailyRevenue = getSumStatsDaily(statsDailyDefaultData, 'revenue');
  const overallDailyCTR = parseFloat(
    ((totalDailyClicks / totalDailyImpressions) * 100).toFixed(2)
  );

  const overallDailyCR = parseFloat(
    ((totalDailyRevenue / totalDailyClicks) * 100).toFixed(2)
  );

  // Comparing Data
  const statsDailyComperingData = getStatsDataPeriod(
    statsDaily,
    startComparedDate.secondStart,
    startComparedDate.secondEnd
  ).map((stat) => {
    // add cr and ctr
    const newObj = {
      ...stat,
      cr: parseFloat(((stat.revenue / stat.impressions) * 100).toFixed(2)),
      ctr: parseFloat(((stat.clicks / stat.impressions) * 100).toFixed(2)),
    };
    return newObj;
  });

  // STATS DAILY TABLE DATA
  const [statsDailyTableDataControl, setStatsDailyTableDataControl] = useState({
    sortStatsDailyCol: STATS_DAILY_SORTING_CATEGORIES.STATS_DAILY_DATE,
    sortStatsDailyDirection: SORT_DIRECTION.ASC,
  });
  const [statsDailySearch, setStatsDailySearch] = useState('');

  const finalDisplayStatsDailyCompering = useMemo(
    () =>
      getTableStatsDaily(
        statsDailyComperingData,
        statsDailySearch,
        statsDailyTableDataControl.sortStatsDailyCol,
        statsDailyTableDataControl.sortStatsDailyDirection
      ),
    [
      statsDailyComperingData,
      statsDailySearch,
      statsDailyTableDataControl.sortStatsDailyCol,
      statsDailyTableDataControl.sortStatsDailyDirection,
    ]
  );

  const totalDailyComperingImpressions = getSumStatsDaily(
    finalDisplayStatsDailyCompering,
    'impressions'
  );
  const totalDailyComperingClicks = getSumStatsDaily(
    finalDisplayStatsDailyCompering,
    'clicks'
  );
  const totalDailyComperingRevenue = getSumStatsDaily(
    finalDisplayStatsDailyCompering,
    'revenue'
  );
  const overallDailyComperingCTR =
    parseFloat(
      (
        (totalDailyComperingClicks / totalDailyComperingImpressions) *
        100
      ).toFixed(2)
    ) || 0;

  const overallDailyComperingCR =
    parseFloat(
      (totalDailyComperingRevenue / totalDailyComperingClicks) * 100
    ).toFixed(2) || 0;

  // stats daily
  const finalDisplayStatsDaily = useMemo(
    () =>
      getTableStatsDaily(
        statsDailyDefaultData,
        statsDailySearch,
        statsDailyTableDataControl.sortStatsDailyCol,
        statsDailyTableDataControl.sortStatsDailyDirection
      ),
    [
      statsDailyDefaultData,
      statsDailySearch,
      statsDailyTableDataControl.sortStatsDailyCol,
      statsDailyTableDataControl.sortStatsDailyDirection,
    ]
  );

  // ///////////// Working on Event Hourly

  const statsHourlyDefaultData = getStatsDataPeriod(
    statsHourly,
    startFirstDate.firstStart,
    startFirstDate.firstEnd
  ).map((stat) => {
    // add cr and ctr
    const newObj = {
      ...stat,
      cr: parseFloat(((stat.revenue / stat.impressions) * 100).toFixed(2)),
      ctr: parseFloat(((stat.clicks / stat.impressions) * 100).toFixed(2)),
    };
    return newObj;
  });

  const statsHourlyComperingData = getStatsDataPeriod(
    statsHourly,
    startComparedDate.secondStart,
    startComparedDate.secondEnd
  ).map((stat) => {
    // add cr and ctr
    const newObj = {
      ...stat,
      cr: parseFloat(((stat.revenue / stat.impressions) * 100).toFixed(2)),
      ctr: parseFloat(((stat.clicks / stat.impressions) * 100).toFixed(2)),
    };
    return newObj;
  });

  const [statsHourlyTableDataControl, setStatsHourlyTableDataControl] =
    useState({
      sortStatsHourlyCol: STATS_HOURLY_SORTING_CATEGORIES.STATS_HOURLY_DATE,
      sortStatsHourlyDirection: SORT_DIRECTION.ASC,
    });
  const [statsHourlySearch, setStatsHourlySearch] = useState('');
  const finalDisplayStatsHourly = useMemo(
    () =>
      getTableStatsHourly(
        statsHourlyDefaultData,
        statsHourlySearch,
        statsHourlyTableDataControl.sortStatsHourlyCol,
        statsHourlyTableDataControl.sortStatsHourlyDirection
      ),
    [
      statsHourlyDefaultData,
      statsHourlySearch,
      statsHourlyTableDataControl.sortStatsHourlyCol,
      statsHourlyTableDataControl.sortStatsHourlyDirection,
    ]
  );
  const finalDisplayStatsHourlyCompering = useMemo(
    () =>
      getTableStatsHourly(
        statsHourlyComperingData,
        statsHourlySearch,
        statsHourlyTableDataControl.sortStatsHourlyCol,
        statsHourlyTableDataControl.sortStatsHourlyDirection
      ),
    [
      statsHourlyComperingData,
      statsHourlySearch,
      statsHourlyTableDataControl.sortStatsHourlyCol,
      statsHourlyTableDataControl.sortStatsHourlyDirection,
    ]
  );
  // Get average CR each hour
  const averageCRHourlyDefault = getAverageCVR(finalDisplayStatsHourly).map(
    ({ cr }) => cr
  );

  const averageCRHourlyCompering = getAverageCVR(
    finalDisplayStatsHourlyCompering
  ).map(({ cr }) => cr);

  const crPerDay = finalDisplayStatsDaily.map(({ cr }) => cr);
  const ctrPerDay = finalDisplayStatsDaily.map(({ ctr }) => ctr);
  const dateForDiagramTimeLine = finalDisplayStatsDaily.map(({ date }) => date);

  const { Provider } = StatsContext;

  const value = {
    // default
    startFirstDate,
    setStartFirstDate,
    startComparedDate,
    setStartComparedDate,
    statsDailySearch,
    setStatsDailySearch,
    // compare
    isCompare,
    setIsCompare,
    finalDisplayStatsDaily,
    totalDailyImpressions,
    totalDailyClicks,
    totalDailyRevenue,
    overallDailyCTR,
    overallDailyCR,
    // Table
    statsDailyTableDataControl,
    setStatsDailyTableDataControl,
    finalDisplayStatsDailyCompering,
    totalDailyComperingImpressions,
    totalDailyComperingClicks,
    totalDailyComperingRevenue,
    overallDailyComperingCTR,
    overallDailyComperingCR,
    // HOURLY TABLE
    statsHourlyDefaultData,
    statsHourlyComperingData,
    statsHourlySearch,
    setStatsHourlySearch,
    finalDisplayStatsHourlyCompering,
    statsHourlyTableDataControl,
    setStatsHourlyTableDataControl,
    finalDisplayStatsHourly,

    // diagram
    averageCRHourlyDefault,
    averageCRHourlyCompering,
    crPerDay,
    ctrPerDay,
    dateForDiagramTimeLine,
  };

  return (
    <Provider value={value}>
      <StatsModule />
    </Provider>
  );
};

export default EventWithContext;
