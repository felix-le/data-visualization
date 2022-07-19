import { maxBy } from 'lodash';

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

export { getTotalDailyEvents, getMaxEventsDaily, getTotalDaysWithMinValues };
