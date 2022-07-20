import { chain, maxBy } from 'lodash';

function getEventForEachHour(eventHourly) {
  console.log(
    '🚀 ~ file: getEventHour.js ~ line 4 ~ getEventForEachHour ~ eventHourly',
    eventHourly
  );
  return (
    chain(eventHourly)
      // Group the elements of Array based on `hour` property
      .groupBy('hour')
      // `key` is group's name (hour), `value` is the array of objects
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
      })
  );
}

function getHourWithMaxEvents(eventHourly) {
  return maxBy(getEventForEachHour(eventHourly), function (o) {
    return o.events;
  });
}

export { getHourWithMaxEvents, getEventForEachHour };
