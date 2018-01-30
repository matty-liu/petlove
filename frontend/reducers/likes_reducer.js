import { FETCH_USER_LIKE, FETCH_USER_LIKES, RECEIVE_USER_LIKE } from '../actions/likes_action';

const likesReducer = ( state = {}, action ) => {

  switch (action.type) {

    case FETCH_USER_LIKES:
      return Object.assign({}, state, action.likes)

    case FETCH_USER_LIKE:
      return Object.assign({}, state, {[action.likes.likee_id]: action.likes})

    case RECEIVE_USER_LIKE:
      return Object.assign({}, state, {[action.likes.likee_id]: action.likes})

    default:
      return state
  }
}

export default likesReducer
