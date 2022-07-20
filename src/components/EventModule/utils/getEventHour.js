import { chain, maxBy } from 'lodash';

import { dateComparingFormat } from '../../constants';

function getEventsHourlyPeriodTime(eventHourly, startDate, endDate) {
  const _startDate = dateComparingFormat(startDate);

  const _endDate = dateComparingFormat(endDate);
  const _eventHourly = eventHourly.filter((event) => {
    const _eventDate = dateComparingFormat(event.date);
    return _eventDate >= _startDate && _eventDate <= _endDate;
  });

  return _eventHourly;
}

function getEventsForEachHour(eventHourly) {
  const hourClock = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  const _eventHourly = chain(eventHourly)
    .groupBy('hour')
    .map((value, key) => ({ hour: key, events: value }))
    .value()
    .map((item) => {
      const { hour, events } = item;
      return {
        hour: parseFloat(hour),
        events: events.reduce((accumulator, object) => {
          return accumulator + object?.events;
        }, 0),
      };
    });
  // compare hourClock with _eventHourly
  // if hourClock has more than _eventHourly, then add the missing hour and the events value to 0

  const _hourClock = hourClock.map((hour) => {
    const _hourClock = _eventHourly.find((item) => item.hour === hour);
    if (_hourClock) {
      return _hourClock;
    }
    return {
      hour,
      events: 0,
    };
  });

  return _hourClock;
}

function getHourWithMaxEvents(eventHourly) {
  return maxBy(eventHourly, 'events');
}

export {
  getHourWithMaxEvents,
  getEventsForEachHour,
  getEventsHourlyPeriodTime,
};
