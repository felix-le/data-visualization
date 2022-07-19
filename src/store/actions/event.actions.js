export const GET_EVENT_HOURLY = 'GET_EVENT_HOURLY';
export const GET_EVENT_DAILY = 'GET_EVENT_DAILY';

export const getEventHourly = (data) => ({
  type: GET_EVENT_HOURLY,
  payload: {
    data,
  },
});

export const getEventDaily = (data) => ({
  type: GET_EVENT_DAILY,
  payload: {
    data,
  },
});
