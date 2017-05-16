// External Dependencies
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

// Internal Dependencies
import users from './users/reducers';
import ui from './ui/reducers';


const reducers = {
  users,
  ui,
};

// Create the root reducer
const reducer = combineReducers(reducers);

// Include middleware here
const storeEnhancer = compose(applyMiddleware(ReduxThunk));

// Creates a redux store
export const initializeStore = initialState =>
  createStore(reducer, initialState, storeEnhancer);
