import { RECEIVE_UPDATE_USER, FETCH_USER, FETCH_ALL_USERS } from '../actions/users_actions';
// import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = ( state = {}, action ) => {
  let newState;
  let user;

  switch (action.type) {

    case FETCH_ALL_USERS:
      return Object.assign({},state,action.users);

    case FETCH_USER:
      user = action.users;
      newState = Object.assign({}, state, action.users);
      return newState;

    case RECEIVE_UPDATE_USER:
      user = action.user;
      newState = Object.assign({}, state, {[user.id]: action.user});
      return newState;

    default:
      return state;
  }
};

export default usersReducer
