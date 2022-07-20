import { maxBy } from 'lodash';

import { dateComparingFormat } from '../../constants';

function getTotalDailyEvents(eventDaily) {
  return eventDaily.reduce((accumulator, object) => {
    return accumulator + object?.events;
  }, 0);
}

function getMaxEventsDaily(eventDaily) {
  return maxBy(eventDaily, 'events');
}

function getTotalDaysWithMinValues(eventDaily, MINEVENTSPERDAY) {
  return eventDaily.reduce((accumulator, object) => {
    if (object?.events < MINEVENTSPERDAY) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);
}

function getEventDailyPeriod(eventDaily, startDate, endDate) {
  const _startDate = dateComparingFormat(startDate);
  const _endDate = dateComparingFormat(endDate);
  const _eventDaily = eventDaily.filter((event) => {
    const _eventDate = dateComparingFormat(event.date);

    return _eventDate >= _startDate && _eventDate <= _endDate;
  });
  return _eventDaily;
}
export {
  getTotalDailyEvents,
  getMaxEventsDaily,
  getTotalDaysWithMinValues,
  getEventDailyPeriod,
};
