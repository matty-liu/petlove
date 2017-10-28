import { connect } from 'react-redux';

import HomePage from './home_page';

function mapStateToProps(state, ownProps) {
  let loggedIn;
  let imageUrl = "";
  if (state.session.currentUser) {
    loggedIn = true
    imageUrl = state.session.currentUser.image_url
  } else {
    loggedIn = false
  }

  return {
    loggedIn: loggedIn,
    errors: state.errors.session,
    imageUrl: imageUrl
  }

}

export default connect(mapStateToProps)(HomePage)
