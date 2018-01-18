import * as APIUtil from '../util/likes_api_util';

export const FETCH_USER_LIKES = "FETCH_USER_LIKES"

export const fetchUserLikes = (likes) => ({
  type: FETCH_USER_LIKES,
  likes
})

export const getLikes = () => (dispatch) => {
  return APIUtil
    .getLikes()
    .then((likes) => dispatch(fetchUserLikes(likes)))
}
