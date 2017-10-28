import { connect } from 'react-redux';

import HomePage from './home_page';

function mapStateToProps(state, ownProps) {
  let loggedIn;
  let imageUrl = "";
  console.log(state.session)
  if (state.session.currentUser) {
    loggedIn = true,
    imageUrl = state.session.currentUser.image_url
  } else {
    loggedIn = false
  }

  return {
    loggedIn: loggedIn,
    errors: state.errors.session,
    imageUrl: imageUrl,
    username: state.session.currentUser.username,
    location: state.session.currentUser.location,
    profile: state.session.currentUser.profile,
    sex: state.session.currentUser.sex,
    age_range_min: state.session.currentUser.age_range_min,
    age_range_max: state.session.currentUser.age_range_max
  }

}

export default connect(mapStateToProps)(HomePage)
