import { connect } from 'react-redux';

import HomePage from './home_page';
import { getUsers } from '../actions/users_actions';

function mapStateToProps(state, ownProps) {
  let loggedIn;

  if (state.session.currentUser) {
    loggedIn = true
  } else {
    loggedIn = false
  }

  let users;
  if (Object.keys(state.entities.users).length > 1) {
    users = Object.values(state.entities.users)
  }


  return {
    users: users,
    loggedIn: loggedIn,
    errors: state.errors.session
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getUsers: () => dispatch(getUsers())
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)
