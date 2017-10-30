import * as APIUtil from '../util/edit_user_api_util';

export const RECEIVE_UPDATE_USER = "RECEIVE_UPDATE_USER"
export const RECEIVE_UPDATE_ERROR = "RECEIVE_UPDATE_ERROR"

export const receiveUpdateUser = currentUser => ({
  type: RECEIVE_UPDATE_USER,
  currentUser: currentUser,
})

export const receiveUpdateErrors = user => ({
  type: RECEIVE_UPDATE_ERROR,
  error: [error.responseText]
})

export const update = (user) => (dispatch) => {
  return APIUtil
    .update(user)
    .then(
      (user) => dispatch(receiveUpdateUser(user)),
      (error) => dispatch(receiveUpdateError(error))
    )
}
