import { connect } from 'react-redux';

import UserShowPageMainEssay from './user_show_page_main_essay';

function mapStateToProps(state, ownProps) {

  if (Object.keys(state.entities.users).length === 0) {
    return {}
  } else {
    let user = state.entities.users[ownProps.userId]
    return {
      username: user.username,
      location: user.location,
      profile: user.profile,
      profile2: user.profile2,
      sex: user.sex,
      age_range_min: user.age_range_min,
      age_range_max: user.age_range_max,
      species: user.species ,
      orientation: user.orientation ,
      size: user.size,
      weight: user.weight,
      status: user.status,
      look_for: user.look_for,
      look_gender: user.look_gender,
      diet: user.diet
    }
  }

}

export default connect(mapStateToProps)(UserShowPageMainEssay)
