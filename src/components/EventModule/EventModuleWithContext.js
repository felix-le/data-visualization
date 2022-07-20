import React, { createContext, useState } from 'react';
import EventModule from './EventModule';

import { maxDate, minDate, getDayBetween, MINEVENTSPERDAY } from '../constants';

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

  const periodFirstData = getEventDailyPeriod(
    eventDaily,
    startFirstDate.firstStart,
    startFirstDate.firstEnd
  );

  const periodSecondComparingData = getEventDailyPeriod(
    eventDaily,
    startComparedDate.secondStart,
    startComparedDate.secondEnd
  );

  const totalEventsComparing = getTotalDailyEvents(periodSecondComparingData);
  const maxEventsComparing = getMaxEventsDaily(periodSecondComparingData);
  const totalDaysWithMinValuesComparing = getTotalDaysWithMinValues(
    periodSecondComparingData
  );
  const hourWithMaxEventsComparing = getHourWithMaxEvents(
    periodSecondComparingData
  );

  const finalDisplayEventDaily = periodFirstData;

  const totalEvents = getTotalDailyEvents(finalDisplayEventDaily);
  // get the day has the most events
  const maxEvents = getMaxEventsDaily(finalDisplayEventDaily);

  // get the number days that have events < Min
  const totalDaysWithMinValues = getTotalDaysWithMinValues(
    finalDisplayEventDaily,
    MINEVENTSPERDAY
  );

  const periodTimeDefault = getDayBetween(
    startFirstDate.firstStart,
    startFirstDate.firstEnd
  );
  ///////////// Working on Event Hourly

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
  const hourComparingChartData = isCompare
    ? [eventsForEachHourComparingDefault, eventsForEachHourComparingSecond]
    : [eventsForEachHourComparingDefault];
  const { Provider } = EventContext;
  console.log(
    '🚀 ~ file: EventModuleWithContext.js ~ line 133 ~ EventWithContext ~ hourComparingChartData',
    hourComparingChartData
  );

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
  };

  return (
    <Provider value={value}>
      <EventModule />
    </Provider>
  );
};

export default EventWithContext;
