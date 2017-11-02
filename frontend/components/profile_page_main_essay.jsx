import React from 'react'
import Modal from 'react-modal';

import editModalStyle from './modal/edit_modal.js'
import EditFormContainer from './edit_form_container';

class ProfilePageMainEssay extends React.Component {

  constructor(props) {
    super(props);

    this.state= {
      modalOpen: false,
    }

    this.onModalOpen = this.onModalOpen.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  onModalOpen() {
    editModalStyle.content.opacity = 100;
    editModalStyle.overlay.opacity = 100;
  }

  closeModal() {
    editModalStyle.overlay.opacity = 0;
    this.setState({modalOpen: false});
  }

  handleEdit(e) {
    this.setState({modalOpen: true});
  }

  render() {

    return (
      <div className="profile-main-essay">
        <div className="profile-main-essay-cont1">
          <span className="profile-main-essay-cont1-summary">My self summary
          &nbsp;<i className="fa fa-pencil" aria-hidden="true" onClick={this.handleEdit}></i></span>

          <div className="profile-main-essay-cont1-summary-text">
            {this.props.profile}
          </div>

        </div>

        <div className="profile-main-essay-cont2">
          <span className="profile-main-essay-cont1-summary">You should send me a message if...
          &nbsp;<i className="fa fa-pencil" aria-hidden="true" onClick={this.handleEdit}></i> </span>
          <div className="profile-main-essay-cont1-summary-text">
            You play well others! I enjoy meeting new animals and am
            excited to play!
          </div>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.onModalOpen}
          onRequestClose={this.closeModal}
          style={editModalStyle}>
          <div className="modal-edit1">
            <EditFormContainer closeModal={this.closeModal}/>
          </div>
        </Modal>
      </div>
    )
  }

}

export default ProfilePageMainEssay;
