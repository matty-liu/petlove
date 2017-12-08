import React from 'react';

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
    }
    else {
      let modalStyle = {
        position: 'fixed',
        zIndex: '9999',
        background: '#fff'
      }

      let backdropStyle = {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: '0px',
        left: '0px',
        zIndex: '9998',
        background: 'rgba(0, 0, 0, 0.3)'
      }

      return (
        <div>
          <div style={modalStyle}>{this.props.children}</div>
          <div style={backdropStyle} onClick={(e) => this.closeModal(e)}></div>
        </div>
      )
    }

  }

}

export default Modal;
