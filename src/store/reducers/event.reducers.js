import { GET_EVENT_HOURLY, GET_EVENT_DAILY } from '../actions/event.actions';
import dayjs from 'dayjs';
const initialEventState = {
  eventHourly: [],
  eventDaily: [],
  isLoadingEvent: false, // will update later
};

const reducers = (state = initialEventState, action) => {
  switch (action.type) {
    case GET_EVENT_HOURLY:
      const data = action.payload.data;
      return {
        ...state,
        eventHourly: data.map((item) => {
          const newObj = {
            ...item,
            date: dayjs(item.date).format('YYYY-MM-DD'),
          };
          return newObj;
        }),
      };
    case GET_EVENT_DAILY:
      return {
        ...state,
        eventDaily: action.payload.data.map((item) => {
          const newObj = {
            ...item,
            date: dayjs(item.date).format('YYYY-MM-DD'),
            events: parseInt(item.events),
          };
          return newObj;
        }),
      };
    default:
      return state;
  }
};

export default reducers;
