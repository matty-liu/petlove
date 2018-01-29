import { connect } from 'react-redux';

import ProfilePageHeader from './profile_page_header';
import { update, updatePic } from '../../actions/users_actions';

function mapStateToProps(state, ownProps) {


  // if (parseInt(ownProps.match.params.id)) {
  //   return {
  //     id: parseInt(ownProps.match.params.id)
  //   }
  // }

  return {
    userId: ownProps.userId,
    imageUrl: state.session.currentUser.image_url,
    username: state.session.currentUser.username,
    location: state.session.currentUser.location,
    userId: state.session.currentUser.id,
  }

}

function mapDispatchToProps(dispatch, ownProps) {

  return {
    updatePic: (formData, userId) => (dispatch(updatePic(formData, userId))),
    // update: (formData) => (dispatch(update(formData)))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePageHeader)
