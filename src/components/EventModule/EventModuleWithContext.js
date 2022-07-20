import React, { createContext, useState } from 'react';
import EventModule from './EventModule';

import {
  maxDate,
  minDate,
  dateComparingFormat,
  getDayBetween,
  MINEVENTSPERDAY,
} from '../constants';

import {
  getTotalDailyEvents,
  getMaxEventsDaily,
  getTotalDaysWithMinValues,
} from './utils/getEventDaily';

import { getHourWithMaxEvents, getHourAndEvent } from './utils/getEventHour';

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
  dayBetweenDefault: 0,
});

function getEventDailyPeriod(eventDaily, startDate, endDate) {
  const _startDate = dateComparingFormat(startDate);
  const _endDate = dateComparingFormat(endDate);
  const _eventDaily = eventDaily.filter((event) => {
    const _eventDate = dateComparingFormat(event.date);

    return _eventDate >= _startDate && _eventDate <= _endDate;
  });
  return _eventDaily;
}

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

  // get the hour with the most events
  const hourWithMaxEvents = getHourWithMaxEvents(eventHourly);

  const dayBetweenDefault = getDayBetween(
    startFirstDate.firstStart,
    startFirstDate.firstEnd
  );

  const { Provider } = EventContext;

  const value = {
    totalEvents,
    maxEvents,
    totalDaysWithMinValues,
    hourWithMaxEvents,
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
    dayBetweenDefault,
  };

  return (
    <Provider value={value}>
      <EventModule />
    </Provider>
  );
};

export default EventWithContext;
