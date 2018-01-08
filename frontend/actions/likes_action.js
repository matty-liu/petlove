import * as APIUtil from '../util/likes_api_util';

export const FETCH_USER_LIKES = "FETCH_ALL_USERS"

export const fetchUserLikes = (likes) => ({
  type: FETCH_USER_LIKES,
  likes
})

export const getLikes = () => {
  return APIUtil
  .getLikes()
  .then((likes) => dispatch(fetchUserLikes(likes)))
}
