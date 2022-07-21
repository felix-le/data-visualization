import dayjs from 'dayjs';

const maxDate = dayjs('03/11/2017').toDate();
const minDate = dayjs('01/01/2017').toDate();
const statsMinDate = dayjs('01/01/2017').toDate();
const statsMaxDate = dayjs('03/02/2017').toDate();

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

const EVENT_HOURLY_SORTING_CATEGORIES = {
  EVENT_HOURLY_DATE: 'EVENT_HOURLY_DATE',
  EVENT_HOURLY_HOURS: 'EVENT_HOURLY_HOURS',
  EVENT_HOURLY_EVENTS: 'EVENT_HOURLY_EVENTS',
};

const STATS_DAILY_SORTING_CATEGORIES = {
  // date, impressions, clicks, revenue, ctr, cr
  STATS_DAILY_DATE: 'STATS_DAILY_DATE',
  STATS_DAILY_IMPRESSIONS: 'STATS_DAILY_IMPRESSIONS',
  STATS_DAILY_CLICKS: 'STATS_DAILY_CLICKS',
  STATS_DAILY_REVENUE: 'STATS_DAILY_REVENUE',
  STATS_DAILY_CTR: 'STATS_DAILY_CTR',
  STATS_DAILY_CR: 'STATS_DAILY_CR',
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

const ROW_PER_PAGE_DEFAULT = 10;

const STATS_DAILY_TABLE_HEADER = [
  {
    key: 'STATS_DAILY_DATE',
    label: 'Date',
  },
  {
    key: 'STATS_DAILY_IMPRESSIONS',
    label: 'Impressions',
  },
  {
    key: 'STATS_DAILY_CLICKS',
    label: 'Clicks',
  },
  {
    key: 'STATS_DAILY_REVENUE',
    label: 'Revenue',
  },
  {
    key: 'STATS_DAILY_CTR',
    label: 'CR',
  },
  {
    key: 'STATS_DAILY_CR',
    label: 'CTR',
  },
];

export {
  maxDate,
  minDate,
  statsMinDate,
  statsMaxDate,
  dateComparingFormat,
  getDayBetween,
  MINEVENTSPERDAY,
  EVENT_DAILY_SORTING_CATEGORIES,
  SORT_DIRECTION,
  flipSortDirection,
  ROW_PER_PAGE_DEFAULT,
  // EVENT_HOURLY_SORTING_CATEGORIES,
  EVENT_HOURLY_SORTING_CATEGORIES,
  // STATS DAILY

  STATS_DAILY_SORTING_CATEGORIES,
  STATS_DAILY_TABLE_HEADER,
};
