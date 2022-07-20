import dayjs from 'dayjs';

const maxDate = dayjs('03/11/2017').toDate();
const minDate = dayjs('01/01/2017').toDate();

const dateComparingFormat = (date) => dayjs(date).format('MM/DD/YYYY');

// get the day between start and end date
const getDayBetween = (startDate, endDate) => {
  const _startDate = dateComparingFormat(startDate);
  const _endDate = dateComparingFormat(endDate);
  const _dayBetween = dayjs(_endDate).diff(_startDate, 'day');
  return _dayBetween;
};
const MINEVENTSPERDAY = 15;

const EVENT_DAILY_SORTING_CATEGORIES = {
  EVENT_DAILY_DATE: 'EVENT_DAILY_DATE',
  EVENT_DAILY_EVENTS: 'EVENT_DAILY_EVENTS',
};
const SORT_DIRECTION = {
  ASC: 'ASCENDING',
  DESC: 'DESCENDING',
};
const flipSortDirection = (oldDirection) => {
  return oldDirection === SORT_DIRECTION.ASC
    ? SORT_DIRECTION.DESC
    : SORT_DIRECTION.ASC;
};

export {
  maxDate,
  minDate,
  dateComparingFormat,
  getDayBetween,
  MINEVENTSPERDAY,
  EVENT_DAILY_SORTING_CATEGORIES,
  SORT_DIRECTION,
  flipSortDirection,
};
