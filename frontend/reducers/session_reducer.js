import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = ( state = {currentUser: null}, action ) => {
  let newState;
  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      const user = action.user;
      newState = { currentUser: action.user };
      return newState;

    default:
      return state;
  }
};

export default sessionReducer
