import { connect } from 'react-redux';

import ProfilePage from './profile_page';

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
    age_range_max: state.session.currentUser.age_range_max,
    species: state.session.currentUser.species ,
    orientation: state.session.currentUser.orientation ,
    size: state.session.currentUser.size,
    weight: state.session.currentUser.weight,
    status: state.session.currentUser.status,
    look_for: state.session.currentUser.look_for,
    look_gender: state.session.currentUser.look_gender,
    diet: state.session.currentUser.diet
  }

}

export default connect(mapStateToProps)(ProfilePage)
