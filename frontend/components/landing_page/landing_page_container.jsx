import { connect } from 'react-redux';

import LandingPage from './landing_page';

function mapStateToProps(state, ownProps) {

  let loggedIn;
  if (state.session.currentUser) {
    loggedIn = true;
  } else {
    loggedIn = false
  }

  return {
    loggedIn: loggedIn,
    errors: state.errors.session,
  }
}

export default connect(mapStateToProps)(LandingPage)
