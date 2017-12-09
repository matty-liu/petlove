import { connect } from 'react-redux';

import Modal from './modal';
import { openModal, closeModal } from '../../actions/modal_action'

function mapStateToProps(state, ownProps) {

  return {
    modalOpen: state.ui.modal.modalOpen,
    modalType: state.ui.modal.modalType
  }

}

function mapDispatchToProps(dispatch, ownProps) {

  return {
    closeModal: () => dispatch(closeModal()),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
