// Internal Dependencies
import {
  getRequest,
  getSuccess,
  postRequest,
  postSuccess,
  putRequest,
  putSuccess,
} from './action-creators';

// Actions
export const postUser = (changes) =>
  (dispatch) => {
    dispatch(postRequest());

    // This is where we would use any API actions we need
    // For example, we should be using an `apiPost` here
    // and pass the `response` to the success action creator
    // or catch an error and tell the user it was not successful

    return dispatch(postSuccess(changes))
  };
