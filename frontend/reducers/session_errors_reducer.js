import { RECEIVE_CURRENT_USER , RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

export const sessionErrorsReducer = (state=[], action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.error;
    default:
      return state;
  }
};
