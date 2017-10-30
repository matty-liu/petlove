import { connect } from 'react-redux';

import HomePage from './home_page';
import { getUsers } from '../actions/users_actions';

function mapStateToProps(state, ownProps) {
  let loggedIn;
  console.log(state)

  if (state.session.currentUser) {
    loggedIn = true
  } else {
    loggedIn = false
  }

  return {
    users: state.entities.users.values,
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
