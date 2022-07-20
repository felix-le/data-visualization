import {
  STATS_DAILY_SORTING_CATEGORIES,
  SORT_DIRECTION,
} from '../../constants';

const {
  STATS_DAILY_DATE,
  STATS_DAILY_IMPRESSIONS,
  STATS_DAILY_CLICKS,
  STATS_DAILY_REVENUE,
  STATS_DAILY_CTR,
  STATS_DAILY_CR,
} = STATS_DAILY_SORTING_CATEGORIES;

const { ASC } = SORT_DIRECTION;

const getSearchedStatsDaily = (statsDaily, searchTerm) => {
  if (!searchTerm) {
    return statsDaily;
  }
  return statsDaily.filter((stats) => {
    return stats.date.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

const getSortedStatsDaily = (statsDaily, sortCol, sortDirection) => {
  if (!sortCol || !sortDirection) {
    return statsDaily;
  }

  return statsDaily.sort(function (a, b) {
    // if value is a number, we have to use sort type a - b
    if (sortCol === STATS_DAILY_IMPRESSIONS) {
      return sortDirection === ASC
        ? a.impressions - b.impressions
        : b.impressions - a.impressions;
    }
    // if value is a string, we have to use sort type localeCompare
    if (sortCol === STATS_DAILY_DATE) {
      return sortDirection === ASC
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date);
    }
    if (sortCol === STATS_DAILY_CLICKS) {
      return sortDirection === ASC ? a.clicks - b.clicks : b.clicks - a.clicks;
    }

    if (sortCol === STATS_DAILY_REVENUE) {
      return sortDirection === ASC
        ? a.revenue - b.revenue
        : b.revenue - a.revenue;
    }
    if (sortCol === STATS_DAILY_CTR) {
      return sortDirection === ASC ? a.ctr - b.ctr : b.ctr - a.ctr;
    }
    if (sortCol === STATS_DAILY_CR) {
      return sortDirection === ASC ? a.cr - b.cr : b.cr - a.cr;
    }
    return statsDaily;
  });
};

const getTableStatsDaily = (statsDaily, searchTerm, sortCol, sortDirection) => {
  const searchedStatsDaily = getSearchedStatsDaily(statsDaily, searchTerm);
  // const selectedStatsDaily = getSelectedStatsDaily(searchedStatsDaily, StatsDailyelection);
  const sortedStatsDaily = getSortedStatsDaily(
    searchedStatsDaily,
    sortCol,
    sortDirection
  );
  return sortedStatsDaily;
};

export default getTableStatsDaily;
