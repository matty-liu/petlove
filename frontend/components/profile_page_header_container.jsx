import { connect } from 'react-redux';

import ProfilePageHeader from './profile_page_header';

function mapStateToProps(state, ownProps) {

  return {
    errors: state.errors.session,
    imageUrl: state.session.currentUser.image_url,
    username: state.session.currentUser.username,
    location: state.session.currentUser.location,
  }

}

export default connect(mapStateToProps)(ProfilePageHeader)
