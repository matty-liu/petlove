import React from 'react';

import SessionFormContainer from '../session_form_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: this.props.modalOpen
    }
  }

  closeModal() {
    this.props.closeModal()
  }

  render() {

    if (this.props.modalOpen === false) {
      return null
    } else {
      let modalStyle = {
        position: 'absolute',
        zIndex: '9999',
        top: '25%',
      }

      let backdropStyle = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9998',
        background: 'rgba(0, 0, 0, 0.3)'
      }

      debugger
      return (
        <div className="modal">
          <div style={modalStyle}>
            <SessionFormContainer />
          </div>
          <div style={backdropStyle} onClick={(e) => this.closeModal(e)}></div>
        </div>
      )
    }

  }

}

export default Modal;
