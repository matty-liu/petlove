import { connect } from 'react-redux';

import UserShowPageHeader from './user_show_page_header';
import { update, updatePic } from '../../actions/users_actions';

import { getLike, likeUser } from '../../actions/likes_action'

function mapStateToProps(state, ownProps) {

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
    getUsers: () => dispatch(getUsers()),
    getLike: (userId) => dispatch(getLike(userId)),
    likeUser: (userId) => dispatch(likeUser(userId)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserShowPageHeader)
