// Internal Dependencies
import {
  USER_FORM_UPDATE,
} from '../action-types';

// Action Creators
export const userFormUpdate = form => ({
  type: USER_FORM_UPDATE,
  form,
});
