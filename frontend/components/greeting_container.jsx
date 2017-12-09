import { connect } from 'react-redux';

import Greeting from './greeting';
import { logout } from '../actions/session_actions';

import { openModal } from '../actions/modal_action'

function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.session.currentUser,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
