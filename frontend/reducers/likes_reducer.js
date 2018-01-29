import { FETCH_USER_LIKES } from '../actions/likes_action';

const likesReducer = ( state = {}, action ) => {

  switch (action.type) {
    case FETCH_USER_LIKES:
      return Object.assign({}, state, action.likes)
    default:
      return state
  }

}

export default likesReducer
