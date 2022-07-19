export const GET_STATS_HOURLY = 'GET_STATS_HOURLY';
export const GET_STATS_DAILY = 'GET_STATS_DAILY';

export const getStatsHourly = (data) => ({
  type: GET_STATS_HOURLY,
  payload: {
    data,
  },
});

export const getStatsDaily = (data) => ({
  type: GET_STATS_DAILY,
  payload: {
    data,
  },
});
