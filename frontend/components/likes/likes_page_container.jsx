import { connect } from 'react-redux';

import LikesPage from './likes_page';
import { getLikes } from '../../actions/likes_action';

function mapStateToProps(state, ownProps) {
  let likes = {};
  if (state.entities.likes) {
    likes = state.entities.likes
  }
  
  return {
    likes: likes,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getLikes: () => dispatch(getLikes())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LikesPage)
