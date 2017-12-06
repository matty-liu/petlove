import { connect } from 'react-redux';

import SessionForm from './session_form';
import { signup, login } from '../actions/session_actions';

function mapStateToProps(state, ownProps) {

  let loggedIn;
  if (state.session.currentUser) {
    loggedIn = true;
  } else {
    loggedIn = false
  }

  let formType;
  if (ownProps.login) {
    formType = 'login';
  } else {
    formType = 'signup';
  }

  return {
    loggedIn: loggedIn,
    formType: formType,
    errors: state.errors.session,
  }
}

function mapDispatchToProps(dispatch, ownProps) {

  if (ownProps.login) {
    return {
      processForm: (user) => dispatch(login(user)),
      login: (user) => dispatch(login(user))
    }
  } else {
    return {
      processForm: (user) => dispatch(signup(user)),
      login: (user) => dispatch(login(user))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm)
