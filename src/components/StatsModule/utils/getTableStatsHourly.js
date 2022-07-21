import {
  STATS_HOURLY_SORTING_CATEGORIES,
  SORT_DIRECTION,
} from '../../constants';

const {
  STATS_HOURLY_DATE,
  STATS_HOURLY_HOUR,
  STATS_HOURLY_IMPRESSIONS,
  STATS_HOURLY_CLICKS,
  STATS_HOURLY_REVENUE,
  STATS_HOURLY_CTR,
  STATS_HOURLY_CR,
} = STATS_HOURLY_SORTING_CATEGORIES;

const { ASC } = SORT_DIRECTION;

const getSearchedStatsHourly = (statsHourly, searchTerm) => {
  if (!searchTerm) {
    return statsHourly;
  }
  return statsHourly.filter((stats) => {
    return stats.date.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

const getSortedStatsHourly = (statsHourly, sortCol, sortDirection) => {
  if (!sortCol || !sortDirection) {
    return statsHourly;
  }

  return statsHourly.sort(function (a, b) {
    // if value is a number, we have to use sort type a - b
    if (sortCol === STATS_HOURLY_IMPRESSIONS) {
      return sortDirection === ASC
        ? a.impressions - b.impressions
        : b.impressions - a.impressions;
    }
    if (sortCol === STATS_HOURLY_HOUR) {
      return sortDirection === ASC ? a.hour - b.hour : b.hour - a.hour;
    }
    // if value is a string, we have to use sort type localeCompare
    if (sortCol === STATS_HOURLY_DATE) {
      return sortDirection === ASC
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date);
    }
    if (sortCol === STATS_HOURLY_CLICKS) {
      return sortDirection === ASC ? a.clicks - b.clicks : b.clicks - a.clicks;
    }

    if (sortCol === STATS_HOURLY_REVENUE) {
      return sortDirection === ASC
        ? a.revenue - b.revenue
        : b.revenue - a.revenue;
    }
    if (sortCol === STATS_HOURLY_CTR) {
      return sortDirection === ASC ? a.ctr - b.ctr : b.ctr - a.ctr;
    }
    if (sortCol === STATS_HOURLY_CR) {
      return sortDirection === ASC ? a.cr - b.cr : b.cr - a.cr;
    }
    return statsHourly;
  });
};

const getTableStatsHourly = (
  statsHourly,
  searchTerm,
  sortCol,
  sortDirection
) => {
  const searchedStatsHourly = getSearchedStatsHourly(statsHourly, searchTerm);

  // const selectedStatsHourly = getSelectedStatsHourly(searchedStatsHourly, StatsHourlyelection);
  const sortedStatsHourly = getSortedStatsHourly(
    searchedStatsHourly,
    sortCol,
    sortDirection
  );
  return sortedStatsHourly;
};

export default getTableStatsHourly;
