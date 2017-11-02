import { RECEIVE_UPDATE_USER, FETCH_ALL_USERS } from '../actions/users_actions';
// import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = ( state = {}, action ) => {
  let newState;
  let user;

  switch (action.type) {

    case FETCH_ALL_USERS:
      return Object.assign({},state,action.users);

    // case RECEIVE_CURRENT_USER:
    //   if (!action.currentUser) {
    //     return {user: null}
    //   } else {
    //     user = action.currentUser;
    //     newState = Object.assign({}, state, [user.id]: user);
    //     return newState;
    //   }

    case RECEIVE_UPDATE_USER:
      user = action.user;
      debugger
      newState = Object.assign({}, state, {[action.currentUser.id]: action.currentUser});

      return newState;

    default:
      return state;
  }
};

export default usersReducer
