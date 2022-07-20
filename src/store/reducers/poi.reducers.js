import { GET_POI } from '../actions/poi.actions';
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
