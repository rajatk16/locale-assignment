import {combineReducers} from 'redux';

import coordinatesReducer from './coordinates';
import displayReducer from './display';

const rootReducer = combineReducers({
  coordinates: coordinatesReducer,
  display: displayReducer
})

export default rootReducer;