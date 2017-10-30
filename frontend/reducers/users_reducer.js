import { RECEIVE_UPDATE_USER } from '../actions/users_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = ( state = {user: null}, action ) => {
  let newState;
  let user;


  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      if (!action.currentUser) {
        return {user: null}
      } else {
        user = action.currentUser;
        newState = { [user.id]: user };
        return newState;
      }

    case RECEIVE_UPDATE_USER:
      user = action.currentUser;
      newState = { [user.id]: user };
      return newState;

    default:
      return state;
  }
};

export default usersReducer
