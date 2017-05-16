// Internal Dependencies
import { userFormUpdate } from './action-creators';
import { postUser } from '../users/actions';

export const add = () =>
  (dispatch, getState) => {
    const { form } = getState().ui;

    console.log(form);

    // This is a good place to do form validation before sending to backend
    // If errors persist, let the user know and don't send to API

    return dispatch(postUser(form));
  };

export const update = (changes) =>
  (dispatch) => {
    // Do validation on the field being updated and display error message

    dispatch(userFormUpdate(changes));
  };

export default {
  add,
  update,
};
