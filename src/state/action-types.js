// Action types are considered global such that any state subtree's reducer can
// react to any action types dispatched through the system. The file should
// remain alphabetized, and we recommend suffixing the verb so that all actions
// within the same domain scope are in relative proximity. For example, rather
// than naming your actions FETCH_POSTS and RECEIVE_POSTS, you should name them
// POSTS_FETCH and POSTS_RECEIVE.

// Any new action type should be added to the set of exports below, with the
// value mirroring its exported name.

// Unsure how to name an action type? Refer to our guidelines:
// https://wpcalypso.wordpress.com/devdocs/docs/our-approach-to-data.md#actions

// Broadcasts
export const USER_FORM_UPDATE = 'USER_FORM_UPDATE';
export const USER_GET_REQUEST = 'USER_GET_REQUEST';
export const USER_GET_SUCCESS = 'USER_PUT_SUCCESS';
export const USER_POST_REQUEST = 'USER_POST_REQUEST';
export const USER_POST_SUCCESS = 'USER_POST_SUCCESS';
export const USER_PUT_REQUEST = 'USER_PUT_REQUEST';
export const USER_PUT_SUCCESS = 'USER_PUT_SUCCESS';
