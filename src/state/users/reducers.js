// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import { createReducer } from '../create-reducer';
import {
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_PUT_REQUEST,
  USER_PUT_SUCCESS,
} from '../action-types';

// Local Variables
const apiDataDefault = {
  Items: [
    { firstName: 'Caitlin' },
    { firstName: 'Michael' },
    { firstName: 'Eric' },
    { firstName: 'Doug' },
  ],
};

// Reducers
export const apiData = createReducer(apiDataDefault, {
  [USER_POST_SUCCESS]: (state, action) => ({
    ...state,
    Items: [
      ...state.Items,
      ...action.changes,
    ],
  }),
});

export const isGetting = createReducer(false, {
  [USER_GET_REQUEST]: (state, action) => true,
  [USER_GET_SUCCESS]: (state, action) => false,
});

export const isPosting = createReducer(false, {
  [USER_POST_REQUEST]: (state, action) => true,
  [USER_POST_SUCCESS]: (state, action) => false,
});

export const isPutting = createReducer(false, {
  [USER_PUT_REQUEST]: (state, action) => true,
  [USER_PUT_SUCCESS]: (state, action) => false,
});

export default combineReducers({
  apiData,
  isGetting,
  isPosting,
  isPutting,
});
