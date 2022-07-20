import {
  EVENT_HOURLY_SORTING_CATEGORIES,
  SORT_DIRECTION,
} from '../../constants';

const { EVENT_HOURLY_DATE, EVENT_HOURLY_EVENTS, EVENT_HOURLY_HOURS } =
  EVENT_HOURLY_SORTING_CATEGORIES;

const { ASC } = SORT_DIRECTION;

const getSearchedEventHourly = (eventHourly, searchTerm) => {
  if (!searchTerm) {
    return eventHourly;
  }
  return eventHourly.filter((event) => {
    return event.date.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

const getSortedEventHourly = (eventHourly, sortCol, sortDirection) => {
  if (!sortCol || !sortDirection) {
    return eventHourly;
  }

  return eventHourly.sort(function (a, b) {
    // if value is a number, we have to use sort type a - b
    if (sortCol === EVENT_HOURLY_EVENTS) {
      return sortDirection === ASC ? a.events - b.events : b.events - a.events;
    }
    // if value is a number, we have to use sort type a - b
    if (sortCol === EVENT_HOURLY_HOURS) {
      return sortDirection === ASC ? a.hour - b.hour : b.hour - a.hour;
    }

    // if value is a string, we have to use sort type localeCompare
    if (sortCol === EVENT_HOURLY_DATE) {
      return sortDirection === ASC
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date);
    }
    return eventHourly;
  });
};

const getTableEventHourly = (
  eventHourly,
  searchTerm,
  sortCol,
  sortDirection
) => {
  const searchedeventHourly = getSearchedEventHourly(eventHourly, searchTerm);
  // const selectedeventHourly = getSelectedeventHourly(searchedeventHourly, eventHourlyelection);
  const sortedEventHourly = getSortedEventHourly(
    searchedeventHourly,
    sortCol,
    sortDirection
  );
  return sortedEventHourly;
};

export default getTableEventHourly;
