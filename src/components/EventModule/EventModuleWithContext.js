import React, { createContext, useState } from 'react';
import { chain, maxBy } from 'lodash';
import EventModule from './EventModule';

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

// compare here
const EventWithContext = ({ eventDaily, eventHourly }) => {
  const [isComperingMultiDays, setIsComperingMultiDays] = useState(false);

  const totalEvents = eventDaily.reduce((accumulator, object) => {
    return accumulator + object?.events;
  }, 0);

  // get the day has the most events
  const maxEvents = maxBy(eventDaily, 'events');

  // get the number days that have events < Min

  const totalDaysWithMinValues = eventDaily.reduce((accumulator, object) => {
    if (object?.events < MINEVENTSPERDAY) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);

  // get the hour with the most events
  const hourWithMaxEvents = maxBy(
    chain(eventHourly)
      // Group the elements of Array based on `hour` property
      .groupBy('hour')
      // `key` is group's name (hour), `value` is the array of objects
      .map((value, key) => ({ hour: key, events: value }))
      .value()
      .map((item) => {
        const { hour, events } = item;
        return {
          hour,
          events: events.reduce((accumulator, object) => {
            return accumulator + object?.events;
          }, 0),
        };
      }),
    function (o) {
      return o.events;
    }
  );

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
