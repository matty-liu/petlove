import { connect } from 'react-redux';

import UserShowPage from './user_show_page';

import { getUser, getUsers } from '../../actions/users_actions'
import { getLike, likeUser } from '../../actions/likes_action'


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

  return {
    getUser: (userId) => dispatch(getUser(userId)),
    getUsers: () => dispatch(getUsers()),
    getLike: (userId) => dispatch(getLike(userId)),
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(UserShowPage)
