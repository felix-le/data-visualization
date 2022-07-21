import React, { createContext, useState, useMemo } from 'react';
import EventModule from './EventModule';

import { maxDate, minDate, getDayBetween, MINEVENTSPERDAY } from '../constants';

import getTableEventDaily from './utils/getTableEventDaily';
import getTableEventHourly from './utils/getTableEventHourly';

import {
  getTotalDailyEvents,
  getMaxEventsDaily,
  getTotalDaysWithMinValues,
  getEventDailyPeriod,
} from './utils/getEventDaily';

import {
  getHourWithMaxEvents,
  getEventsHourlyPeriodTime,
  getEventsForEachHour,
} from './utils/getEventHour';

import {
  EVENT_DAILY_SORTING_CATEGORIES,
  SORT_DIRECTION,
  EVENT_HOURLY_SORTING_CATEGORIES,
} from '../constants';

export const EventContext = createContext({
  isComperingMultiDays: false,
  totalEvents: 0,
  maxEvents: {},
  totalDaysWithMinValues: 0,
  hourWithMaxEvents: {},
  MINEVENTSPERDAY: 0,
  setIsComperingMulDays: () => {},
  startFirstDate: '',
  setStartFirstDate: () => {},
  isCompare: false,
  setIsCompare: () => {},
  totalEventsComparing: 0,
  maxEventsComparing: {},
  totalDaysWithMinValuesComparing: 0,
  hourWithMaxEventsComparing: {},
  periodTimeDefault: 0,
});

const EventWithContext = ({ eventDaily, eventHourly }) => {
  const [startFirstDate, setStartFirstDate] = useState({
    firstStart: minDate,
    firstEnd: maxDate,
  });

  const [startComparedDate, setStartComparedDate] = useState({
    secondStart: startFirstDate.firstEnd,
    secondEnd: maxDate,
  });

  const [isCompare, setIsCompare] = useState(false);

  const periodEventDailyFirstData = getEventDailyPeriod(
    eventDaily,
    startFirstDate.firstStart,
    startFirstDate.firstEnd
  );

  const periodComparingEventDailyData = getEventDailyPeriod(
    eventDaily,
    startComparedDate.secondStart,
    startComparedDate.secondEnd
  );

  const finalPeriodComparingDataDisplay = periodComparingEventDailyData;

  const totalEventsComparing = getTotalDailyEvents(
    finalPeriodComparingDataDisplay
  );
  const maxEventsComparing = getMaxEventsDaily(finalPeriodComparingDataDisplay);
  const totalDaysWithMinValuesComparing = getTotalDaysWithMinValues(
    finalPeriodComparingDataDisplay
  );
  const hourWithMaxEventsComparing = getHourWithMaxEvents(
    finalPeriodComparingDataDisplay
  );
  // EVENT DAILY TABLE DATA

  const [sortEventDailyCol, setEventDailySortCol] = useState(
    EVENT_DAILY_SORTING_CATEGORIES.EVENT_DAILY_DATE
  );

  const [sortEventDailyDirection, setSortEventDailyDirection] = useState(
    SORT_DIRECTION.ASC
  );
  const [searchEventDailyTerm, setSearchEventDailyTerm] = useState('');

  // /////

  // Event daily
  const finalDisplayEventDailyDefault = useMemo(
    () =>
      getTableEventDaily(
        periodEventDailyFirstData,
        searchEventDailyTerm,
        sortEventDailyCol,
        sortEventDailyDirection
      ),
    [
      periodEventDailyFirstData,
      searchEventDailyTerm,
      sortEventDailyCol,
      sortEventDailyDirection,
    ]
  );

  const finalDisplayEventDailyComparing = useMemo(
    () =>
      getTableEventDaily(
        periodComparingEventDailyData,
        searchEventDailyTerm,
        sortEventDailyCol,
        sortEventDailyDirection
      ),
    [
      periodComparingEventDailyData,
      searchEventDailyTerm,
      sortEventDailyCol,
      sortEventDailyDirection,
    ]
  );

  const totalEvents = getTotalDailyEvents(finalDisplayEventDailyDefault);
  // get the day has the most events
  const maxEvents = getMaxEventsDaily(finalDisplayEventDailyDefault);

  // get the number days that have events < Min
  const totalDaysWithMinValues = getTotalDaysWithMinValues(
    finalDisplayEventDailyDefault,
    MINEVENTSPERDAY
  );

  const periodTimeDefault = getDayBetween(
    startFirstDate.firstStart,
    startFirstDate.firstEnd
  );
  ///////////// Working on Event Hourly

  // EVENT HOURLY TABLE DATA
  const [sortEventHourlyCol, setEventHourlySortCol] = useState(
    EVENT_HOURLY_SORTING_CATEGORIES.EVENT_HOURLY_DATE
  );

  const [sortEventHourlyDirection, setSortEventHourlyDirection] = useState(
    SORT_DIRECTION.ASC
  );
  const [searchEventHourlyTerm, setSearchEventHourlyTerm] = useState('');

  // get the hour with the most events
  const periodHourlyDefaultData = getEventsHourlyPeriodTime(
    eventHourly,
    startFirstDate.firstStart,
    startFirstDate.firstEnd
  );

  const periodHourlyComparingData = getEventsHourlyPeriodTime(
    eventHourly,
    startComparedDate.secondStart,
    startComparedDate.secondEnd
  );
  const finalDisplayEventHourlyDefault = useMemo(
    () =>
      getTableEventHourly(
        periodHourlyDefaultData,
        searchEventHourlyTerm,
        sortEventHourlyCol,
        sortEventHourlyDirection
      ),
    [
      periodHourlyDefaultData,
      searchEventHourlyTerm,
      sortEventHourlyCol,
      sortEventHourlyDirection,
    ]
  );

  const finalDisplayEventHourlyComparing = useMemo(
    () =>
      getTableEventHourly(
        periodHourlyComparingData,
        searchEventHourlyTerm,
        sortEventHourlyCol,
        sortEventHourlyDirection
      ),
    [
      periodHourlyComparingData,
      searchEventHourlyTerm,
      sortEventHourlyCol,
      sortEventHourlyDirection,
    ]
  );

  // Working on Event Hourly Table Data

  // Get hour with max events
  const hourWithMaxDefaultEvents = getHourWithMaxEvents(
    periodHourlyDefaultData
  );

  const hourWithMaxCompareEvents = getHourWithMaxEvents(
    periodHourlyComparingData
  );

  // genarate comparing chart data for hourly
  const eventsForEachHourComparingDefault = {
    name: 'Based period',
    type: 'column',
    data: getEventsForEachHour(periodHourlyDefaultData).map(
      ({ events }) => events
    ),
  };
  const eventsForEachHourComparingSecond = {
    name: 'Coparing period',
    type: 'line',
    data: getEventsForEachHour(periodHourlyComparingData).map(
      ({ events }) => events
    ),
  };
  const hourComparingChartData = [eventsForEachHourComparingDefault];

  const { Provider } = EventContext;

  const value = {
    totalEvents,
    maxEvents,
    totalDaysWithMinValues,
    hourWithMaxDefaultEvents,
    startFirstDate,
    setStartFirstDate,
    setIsCompare,
    isCompare,
    startComparedDate,
    setStartComparedDate,
    // compare data
    totalEventsComparing,
    maxEventsComparing,
    totalDaysWithMinValuesComparing,
    hourWithMaxEventsComparing,
    periodTimeDefault,
    hourWithMaxCompareEvents,
    hourComparingChartData,
    finalDisplayEventDailyDefault,
    // Table data
    sortEventDailyCol,
    setEventDailySortCol,
    sortEventDailyDirection,
    setSortEventDailyDirection,
    // search data
    searchEventDailyTerm,
    setSearchEventDailyTerm,
    finalDisplayEventDailyComparing,
    // Hourly
    finalDisplayEventHourlyDefault,
    finalDisplayEventHourlyComparing,
    sortEventHourlyCol,
    setEventHourlySortCol,
    sortEventHourlyDirection,
    setSortEventHourlyDirection,
    searchEventHourlyTerm,
    setSearchEventHourlyTerm,

    // diagram
    eventsForEachHourComparingDefault,
    eventsForEachHourComparingSecond,
  };

  return (
    <Provider value={value}>
      <EventModule />
    </Provider>
  );
};

export default EventWithContext;
