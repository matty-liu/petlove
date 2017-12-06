import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: this.props.modalOpen
    }
  }

  openModal() {
    this.setState({modalOpen: true})
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  componentWillReceiveProps() {
    this.setState({modalOpen: this.props.modalOpen})
  }

  render() {


    if (this.state.modalOpen === false)
      return null

    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    }

    let backdropStyle = {
      position: 'fixed',
      width: '10000vw',
      height: '10000vh',
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

export default Modal
