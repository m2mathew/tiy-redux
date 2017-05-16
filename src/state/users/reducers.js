// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import { createReducer } from '../create-reducer';
import {
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_PUT_REQUEST,
  USER_PUT_SUCCESS,
} from '../action-types';

// Local Variables
const apiDataDefault = {};

// Reducers
export const apiData = createReducer(apiDataDefault, {
  [USER_GET_SUCCESS]: (state, action) => ({
    ...action.apiData,
  }),
});

export const isGetting = createReducer(false, {
  [USER_GET_REQUEST]: (state, action) => true,
  [USER_GET_SUCCESS]: (state, action) => false,
});

export const isPutting = createReducer(false, {
  [USER_PUT_REQUEST]: (state, action) => true,
  [USER_PUT_SUCCESS]: (state, action) => false,
});

export default combineReducers({
  apiData,
  isGetting,
  isPutting,
});
