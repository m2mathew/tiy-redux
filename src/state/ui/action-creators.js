import {
  USER_FORM_UPDATE,
} from '../action-types';

export const userFormUpdate = form => ({
  type: USER_FORM_UPDATE,
  form,
});
