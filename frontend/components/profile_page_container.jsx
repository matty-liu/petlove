import { connect } from 'react-redux';

import ProfilePage from './profile_page';

function mapStateToProps(state, ownProps) {

  let loggedIn;
  if (state.session.currentUser) {
    loggedIn = true
  } else {
    loggedIn = false
  }

  let userId = parseInt(ownProps.match.params.id)
  if (userId) {
    userId: userId;
  }

  return {
    loggedIn: loggedIn,
    userId: userId,
    errors: state.errors.session,
  }

}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
