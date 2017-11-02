import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_UPDATE_USER } from '../actions/users_actions';

const sessionReducer = ( state = {currentUser: null}, action ) => {
  let newState;
  switch (action.type) {

    case RECEIVE_UPDATE_USER:
      
      if (action.user) {
        const user = action.user;
        newState = { currentUser: user };
        return newState;
      } else {
        return { currentUser: null}
      }
    // what was i thinking??

    case RECEIVE_CURRENT_USER:

      const user = action.currentUser;
      newState = { currentUser: user };
      return newState;

    default:
      return state;
  }
};

export default sessionReducer
