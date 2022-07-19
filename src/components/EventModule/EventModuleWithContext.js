import React, { createContext, useState } from 'react';
import EventModule from './EventModule';
import {
  getTotalDailyEvents,
  getMaxEventsDaily,
  getTotalDaysWithMinValues,
} from './utils/getEventDaily';

import { getHourWithMaxEvents } from './utils/getEventHour';

export const EventContext = createContext({
  isComperingMultiDays: false,
  totalEvents: 0,
  maxEvents: {},
  totalDaysWithMinValues: 0,
  hourWithMaxEvents: {},
  MINEVENTSPERDAY: 0,
  setIsComperingMulDays: () => {},
});

const MINEVENTSPERDAY = 15;

const EventWithContext = ({ eventDaily, eventHourly }) => {
  const [isComperingMultiDays, setIsComperingMultiDays] = useState(false);

  const totalEvents = getTotalDailyEvents(eventDaily);
  // get the day has the most events
  const maxEvents = getMaxEventsDaily(eventDaily);

  // get the number days that have events < Min
  const totalDaysWithMinValues = getTotalDaysWithMinValues(
    eventDaily,
    MINEVENTSPERDAY
  );

  // get the hour with the most events
  const hourWithMaxEvents = getHourWithMaxEvents(eventHourly);

  const { Provider } = EventContext;

  const value = {
    totalEvents,
    maxEvents,
    totalDaysWithMinValues,
    hourWithMaxEvents,
    isComperingMultiDays,
    setIsComperingMultiDays,
  };

  return (
    <Provider value={value}>
      <EventModule />
    </Provider>
  );
};

export default EventWithContext;
