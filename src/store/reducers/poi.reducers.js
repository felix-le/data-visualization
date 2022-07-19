import { GET_POI } from '../actions/poi.actions';
// import dayjs from 'dayjs';
import dayjs from 'dayjs';
const initialPoiState = {
  poi: [],
  isLoadingPois: false, // will update later
};

const reducers = (state = initialPoiState, action) => {
  switch (action.type) {
    case GET_POI:
      return {
        ...state,
        poi: action.payload.data,
      };

    default:
      return state;
  }
};

export default reducers;
