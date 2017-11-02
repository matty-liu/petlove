import { connect } from 'react-redux';

import { update } from '../actions/users_actions';
import QuestionForm from './question_form';

// let user = state.entities.users[ownProps.userId]
function mapStateToProps(state, ownProps) {

  return {
    id: state.session.currentUser.id
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    update: (user) => dispatch(update(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuestionForm)
