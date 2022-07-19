export const GET_POI = 'GET_POI';

export const getPoi = (data) => ({
  type: GET_POI,
  payload: {
    data,
  },
});
