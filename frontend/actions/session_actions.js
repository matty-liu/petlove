import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors,
});

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors)
  )
}

export const login = (user) => (dispatch) => {
  return APIUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors)
  )
}

export const logout = () => (dispatch) => {
  return APIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null)),
    (errors) => dispatch(receiveErrors)
  )
}
