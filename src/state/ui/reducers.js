// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import { createReducer } from '../create-reducer';
import { USER_FORM_UPDATE } from '../action-types';

// Reducers
export const form = createReducer({}, {
  [USER_FORM_UPDATE]: (state, action) => ({
    ...state,
    ...action.form,
  }),
});


export default combineReducers({
  form,
});
