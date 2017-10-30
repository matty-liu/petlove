import * as APIUtil from '../util/users_api_util';

export const RECEIVE_UPDATE_USER = "RECEIVE_UPDATE_USER"
export const RECEIVE_UPDATE_ERROR = "RECEIVE_UPDATE_ERROR"
export const FETCH_ALL_USERS = "FETCH_ALL_USERS"


export const fetchAllUsers = (users) => ({
  type: FETCH_ALL_USERS,
  users
})

export const getUsers = () => (dispatch) => {
  return APIUtil
  .getUsers()
  .then((users) => dispatch(fetchAllUsers(users)))
}

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
