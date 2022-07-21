import React, { createContext, useState, useMemo } from 'react';

import { statsMinDate, statsMaxDate, getDayBetween } from '../constants';

import StatsModule from './StatsModule';

import getTableStatsDaily from './utils/getTableStatsDaily';
// import getTableEventHourly from './utils/getTableEventHourly';

import {
  // getTotalDailyEvents,
  // getMaxEventsDaily,
  // getTotalDaysWithMinValues,
  getSumStatsDaily,
  getStatsDailyPeriod,
} from './utils/getStatsDaily';

// import {
//   getHourWithMaxEvents,
//   getEventsHourlyPeriodTime,
//   getEventsForEachHour,
// } from './utils/getEventHour';

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
  const statsDailyDefaultData = getStatsDailyPeriod(
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
  const statsDailyComperingData = getStatsDailyPeriod(
    statsDaily,
    startComparedDate.secondStart,
    startComparedDate.secondEnd
  );

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
  // parseFloat(((stat.revenue / stat.impressions) * 100).toFixed(2))
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

  const defaultPeriod = getDayBetween(
    startFirstDate.firstStart,
    startFirstDate.firstEnd
  );

  // ///////////// Working on Event Hourly

  // // EVENT HOURLY TABLE DATA
  // const [sortEventHourlyCol, setEventHourlySortCol] = useState(
  //   EVENT_HOURLY_SORTING_CATEGORIES.EVENT_HOURLY_DATE
  // );

  // const [sortEventHourlyDirection, setSortEventHourlyDirection] = useState(
  //   SORT_DIRECTION.ASC
  // );
  // const [searchEventHourlyTerm, setSearchEventHourlyTerm] = useState('');

  // // get the hour with the most events
  // const periodHourlyDefaultData = getEventsHourlyPeriodTime(
  //   eventHourly,
  //   startFirstDate.firstStart,
  //   startFirstDate.firstEnd
  // );

  // const periodHourlyComparingData = getEventsHourlyPeriodTime(
  //   eventHourly,
  //   startComparedDate.secondStart,
  //   startComparedDate.secondEnd
  // );
  // const finalDisplayEventHourlyDefault = useMemo(
  //   () =>
  //     getTableEventHourly(
  //       periodHourlyDefaultData,
  //       searchEventHourlyTerm,
  //       sortEventHourlyCol,
  //       sortEventHourlyDirection
  //     ),
  //   [
  //     periodHourlyDefaultData,
  //     searchEventHourlyTerm,
  //     sortEventHourlyCol,
  //     sortEventHourlyDirection,
  //   ]
  // );

  // const finalDisplayEventHourlyComparing = useMemo(
  //   () =>
  //     getTableEventHourly(
  //       periodHourlyComparingData,
  //       searchEventHourlyTerm,
  //       sortEventHourlyCol,
  //       sortEventHourlyDirection
  //     ),
  //   [
  //     periodHourlyComparingData,
  //     searchEventHourlyTerm,
  //     sortEventHourlyCol,
  //     sortEventHourlyDirection,
  //   ]
  // );

  // // Working on Event Hourly Table Data

  // // Get hour with max events
  // const hourWithMaxDefaultEvents = getHourWithMaxEvents(
  //   periodHourlyDefaultData
  // );

  // const hourWithMaxCompareEvents = getHourWithMaxEvents(
  //   periodHourlyComparingData
  // );

  // // genarate comparing chart data for hourly
  // const eventsForEachHourComparingDefault = {
  //   name: 'Based period',
  //   type: 'column',
  //   data: getEventsForEachHour(periodHourlyDefaultData).map(
  //     ({ events }) => events
  //   ),
  // };
  // const eventsForEachHourComparingSecond = {
  //   name: 'Coparing period',
  //   type: 'line',
  //   data: getEventsForEachHour(periodHourlyComparingData).map(
  //     ({ events }) => events
  //   ),
  // };
  // const hourComparingChartData = isCompare
  //   ? [eventsForEachHourComparingDefault, eventsForEachHourComparingSecond]
  //   : [eventsForEachHourComparingDefault];

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
  };
  console.log(
    '🚀 ~ file: StatsModuleWithContext.js ~ line 238 ~ EventWithContext ~ finalDisplayStatsDaily',
    finalDisplayStatsDaily
  );

  return (
    <Provider value={value}>
      <StatsModule />
    </Provider>
  );
};

export default EventWithContext;
