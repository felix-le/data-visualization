import { GET_STATS_HOURLY, GET_STATS_DAILY } from '../actions/stats.actions';
// import dayjs from 'dayjs';
import dayjs from 'dayjs';
const initialStatsState = {
  statsHourly: [],
  statsDaily: [],
  isLoadingStats: false, // will update later
};

const reducers = (state = initialStatsState, action) => {
  switch (action.type) {
    case GET_STATS_DAILY:
      return {
        ...state,
        statsDaily: action.payload.data.map((item) => {
          const newObj = {
            ...item,
            date: dayjs(item.date).format('MM/DD/YYYY'),
            impressions: parseInt(item.impressions),
            clicks: parseInt(item.clicks),
            revenue: parseFloat(parseFloat(item.revenue).toFixed(2)),
          };
          return newObj;
        }),
      };
    case GET_STATS_HOURLY:
      return {
        ...state,
        statsHourly: action.payload.data.map((item) => {
          const newObj = {
            ...item,
            date: dayjs(item.date).format('MM/DD/YYYY'),
            revenue: parseFloat(parseFloat(item.revenue).toFixed(2)),
          };
          return newObj;
        }),
      };
    default:
      return state;
  }
};

export default reducers;
