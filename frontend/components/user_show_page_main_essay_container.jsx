import { connect } from 'react-redux';

import UserShowPageMainEssay from './user_show_page_main_essay';

function mapStateToProps(state, ownProps) {

  debugger
  return {
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

export default connect(mapStateToProps)(UserShowPageMainEssay)
