import { GET_EVENT_HOURLY, GET_EVENT_DAILY } from '../actions/event.actions';

const initialEventState = {
  eventHourly: [],
  eventDaily: [],
};

const reducers = (state = initialEventState, action) => {
  switch (action.type) {
    case GET_EVENT_HOURLY:
      return {
        ...state,
        eventHourly: [...state.eventHourly, action.payload.data],
      };
    case GET_EVENT_DAILY:
      return {
        ...state,
        eventDaily: [...state.eventDaily, action.payload.data],
      };
    default:
      return state;
  }
};

export default reducers;
