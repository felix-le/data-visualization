import { maxBy } from 'lodash';

import { dateComparingFormat } from '../../constants';

function getSumStatsDaily(statsDaily, property) {
  return statsDaily.reduce((accumulator, object) => {
    return accumulator + object[property];
  }, 0);
}

function getMaxStatsDaily(statsDaily, property) {
  return maxBy(statsDaily, property);
}

function getStatsDataPeriod(data, startDate, endDate) {
  const _startDate = dateComparingFormat(startDate);
  const _endDate = dateComparingFormat(endDate);
  const _eventDaily = data.filter((event) => {
    const _eventDate = dateComparingFormat(event.date);

    return _eventDate >= _startDate && _eventDate <= _endDate;
  });
  return _eventDaily;
}

export { getSumStatsDaily, getStatsDataPeriod, getMaxStatsDaily };
