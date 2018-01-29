import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

export const receiveSessionErrors = error => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    error: error.responseJSON
  }
}
// export const receiveSessionErrors = errors => ({
//   type: RECEIVE_SESSION_ERRORS,
//   errors: errors,
// });

export const signup = (user) => (dispatch) => {
  return APIUtil
    .signup(user)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
      (error) => dispatch(receiveSessionErrors(error))
    )
}

export const login = (user) => (dispatch) => {
  return APIUtil
    .login(user)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
      (error) => dispatch(receiveSessionErrors(error))
    )
}

export const logout = () => (dispatch) => {
  return APIUtil
    .logout()
    .then(
      () => dispatch(receiveCurrentUser(null)),
      (error) => dispatch(receiveSessionErrors(error))
    )
}
