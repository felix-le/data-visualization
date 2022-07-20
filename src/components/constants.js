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
export {
  maxDate,
  minDate,
  dateComparingFormat,
  getDayBetween,
  MINEVENTSPERDAY,
};
