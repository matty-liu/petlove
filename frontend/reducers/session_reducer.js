import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = ( state = {currentUser: null}, action ) => {
  let newState;
  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      const user = action.currentUser;
      newState = { currentUser: action.currentUser };
      return newState;

    default:
      return state;
  }
};

export default sessionReducer
