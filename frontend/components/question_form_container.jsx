import { connect } from 'react-redux';

import { submitAnswer } from '../util/response_api_util'
import QuestionForm from './question_form';
// import { submit } from '../actions/questions_actions';
//
// function mapStateToProps(state, ownProps) {
// }
//
function mapDispatchToProps(dispatch, ownProps) {
  processForm: (user) => dispatch(login(user))
}

export default connect(null,null)(QuestionForm)
