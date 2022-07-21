import { chain } from 'lodash';

function getAverageCVR(data) {
  const hourClock = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  const _eventHourly = chain(data)
    .groupBy('hour')
    .map((value, key) => ({ hour: key, cr: value }))
    .value()
    .map((item) => {
      const { hour, cr } = item;
      return {
        hour: parseFloat(hour),
        cr: cr.reduce((accumulator, object) => {
          return (accumulator + object?.cr) / cr.length;
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
      cr: 0,
    };
  });

  return _hourClock.map((item) => {
    return { ...item, cr: parseFloat((item.cr * 100).toFixed(2)) };
  });
}

export { getAverageCVR };
