import { RECEIVE_UPDATE_USER } from '../actions/edit_user_action';

const userReducer = ( state = {currentUser: null}, action ) => {
  let newState;
  switch (action.type) {

    case RECEIVE_UPDATE_USER:
      const user = action.currentUser;
      newState = { currentUser: user };
      return newState;

    default:
      return state;
  }
};

export default userReducer
