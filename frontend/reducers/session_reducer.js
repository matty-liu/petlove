import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_UPDATE_USER } from '../actions/users_actions';

const sessionReducer = ( state = {currentUser: null}, action ) => {
  let newState;
  switch (action.type) {

    // case RECEIVE_UPDATE_USER:
    //   
    //   if (!action.currentUser) {
    //     return { currentUser: null}
    //   } else {
    //     const user = action.currentUser;
    //     newState = { currentUser: user };
    //     return newState;
    //   }
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
