import {
  EVENT_DAILY_SORTING_CATEGORIES,
  SORT_DIRECTION,
} from '../../constants';

const { EVENT_DAILY_DATE, EVENT_DAILY_EVENTS } = EVENT_DAILY_SORTING_CATEGORIES;

const { ASC } = SORT_DIRECTION;

const getSearchedEventDaily = (eventDaily, searchTerm) => {
  if (!searchTerm) {
    return eventDaily;
  }
  return eventDaily.filter((event) => {
    return event.date.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

const getSortedEventDaily = (eventDaily, sortCol, sortDirection) => {
  if (!sortCol || !sortDirection) {
    return eventDaily;
  }

  return eventDaily.sort(function (a, b) {
    // if value is a string, we have to use sort type localeCompare

    // if value is a number, we have to use sort type a - b
    if (sortCol === EVENT_DAILY_EVENTS) {
      return sortDirection === ASC ? a.events - b.events : b.events - a.events;
    }

    if (sortCol === EVENT_DAILY_DATE) {
      return sortDirection === ASC
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date);
    }
    return eventDaily;
  });
};

const getTableEventDaily = (eventDaily, searchTerm, sortCol, sortDirection) => {
  const searchedeventDaily = getSearchedEventDaily(eventDaily, searchTerm);
  // const selectedeventDaily = getSelectedeventDaily(searchedeventDaily, eventDailyelection);
  const sortedEventDaily = getSortedEventDaily(
    searchedeventDaily,
    sortCol,
    sortDirection
  );
  return sortedEventDaily;
};

export default getTableEventDaily;
