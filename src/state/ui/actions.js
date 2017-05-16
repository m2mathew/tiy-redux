// Internal Dependencies
import { userFormUpdate } from './action-creators';

export const update = (changes) =>
  (dispatch) => {
    dispatch(userFormUpdate(changes));
  };
