import { connect } from 'react-redux';

import UserShowPageHeader from './user_show_page_header';
import { update, updatePic } from '../actions/users_actions';

function mapStateToProps(state, ownProps) {

  debugger
  if (Object.keys(state.entities.users).length === 0) {
    return {}
  } else {
    let user = state.entities.users[ownProps.userId]
    return {
      imageUrl: user.image_url,
      username: user.username,
      location: user.location,
      userId: user.id,
    }
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserShowPageHeader)
