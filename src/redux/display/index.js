import {DISPLAY_CHART, DISPLAY_MAP} from './types';

const INITIAL_STATE = {
  map: false,
  chart: false
}

const displayReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case DISPLAY_CHART:
      return {
        ...state,
        chart: true,
        map: false
      }
    case DISPLAY_MAP:
      return {
        ...state,
        map: true,
        chart: false
      }
    default:
      return state;
  }
}

export default displayReducer;