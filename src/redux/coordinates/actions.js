import {ADD_DATA, DATA_LOADED, BEGIN_DATA_LOAD} from './types';

export const addData = (data) => ({
  type: ADD_DATA,
  payload: data
})

export const dataLoaded = () => ({
  type: DATA_LOADED
})

export const beginDataLoad = () => ({
  type: BEGIN_DATA_LOAD
})