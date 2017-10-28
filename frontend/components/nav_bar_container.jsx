import { connect } from 'react-redux';

import NavBar from './nav_bar';
import { logout } from '../actions/session_actions';

function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.session.currentUser
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    logout: () => dispatch(logout())
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
