import * as APIUtil from '../util/likes_api_util';

export const FETCH_USER_LIKES = "FETCH_USER_LIKES"
export const RECEIVE_USER_LIKE = "RECEIVE_USER_LIKE"

export const fetchUserLikes = (likes) => ({
  type: FETCH_USER_LIKES,
  likes
})

export const receiveUserLike = (like) => ({
  type: RECEIVE_USER_LIKE,
  likes: like,
});

export const getLikes = () => (dispatch) => {
  return APIUtil
    .getLikes()
    .then(
      (likes) => dispatch(fetchUserLikes(likes))
    )
}

export const likeUser = (userId) => (dispatch) => {
  return APIUtil
    .likeUser(userId)
    .then(
      (like) => dispatch(receiveUserLike(like)),
    )
}
