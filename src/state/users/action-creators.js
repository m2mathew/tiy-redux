// Internal Dependencies
import {
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_PUT_REQUEST,
  USER_PUT_SUCCESS,
} from '../action-types';

// Action Creators
export const getRequest = () => ({
  type: USER_GET_REQUEST,
});

export const getSuccess = () => ({
  type: USER_GET_SUCCESS,
});

export const postRequest = () => ({
  type: USER_POST_REQUEST,
});

export const postSuccess = () => ({
  type: USER_POST_SUCCESS,
});
});

export const putRequest = () => ({
  type: USER_PUT_REQUEST,
});

export const putSuccess = () => ({
  type: USER_PUT_SUCCESS,
});
