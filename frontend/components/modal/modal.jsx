import React from 'react';

import SessionFormContainer from '../session/session_form_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);

  this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleCloseModal(e) {
    e.target.parentElement.style.animation = "fadeout 0.3s ease-out";
    setTimeout( () => this.props.closeModal(), 250)
  }

  render() {

    if (this.props.modalOpen === false) {
      return null
    } else if (this.props.modalType === 'login') {
      return (
        <div className="modal">
          <div className="modal-overlay" onClick={this.handleCloseModal}></div>
          <div className="modal-content">
            <SessionFormContainer login={true} />
          </div>
        </div>
      )
    } else if (this.props.modalType === 'signup') {
      return (
        <div className="modal">
          <div className="modal-overlay" onClick={this.handleCloseModal}></div>
          <div className="modal-content">
            <SessionFormContainer login={false} />
          </div>
        </div>
      )
    } else {
      return null
    }

  }

}

export default Modal;
