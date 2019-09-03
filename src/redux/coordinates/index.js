import {
  ADD_DATA, 
  DATA_LOADED, 
  BEGIN_DATA_LOAD,
} from './types';

const INITIAL_STATE = {
  data: [],
  loaded: false,
  travelType: {
    one: 0,
    two: 0,
    three: 0,
    else: 0
  }
}

const coordinatesReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: action.payload.id,
            vehicle_model_id: action.payload.vehicle_model_id,
            travel_type_id: action.payload.travel_type_id,
            from_area_id: action.payload.from_area_id,
            to_area_id: action.payload.to_area_id,
            online_booking: !!action.payload.online_booking,
            mobile_site_booking: !!action.payload.mobile_site_booking,
            from: [action.payload.from_lat, action.payload.from_long],
            to: [action.payload.to_lat, action.payload.to_long],
            cancellation: action.payload.Car_Cancellation
          }
        ]
      }
    case BEGIN_DATA_LOAD: 
      return {
        ...state,
        loaded: false
      }
    case DATA_LOADED:
      return {
        ...state,
        loaded: true
      }
    default:
      return state;
  }
}

export default coordinatesReducer;