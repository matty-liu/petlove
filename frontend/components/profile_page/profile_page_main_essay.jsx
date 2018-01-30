import React from 'react'
import Modal from 'react-modal';

import editModalStyle from '../modal/edit_modal.js'
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
        <h2 className="profile-main-essay-title">My self summary
          &nbsp;<i className="fa fa-pencil" aria-hidden="true" onClick={this.handleEdit}></i>
        </h2>
        <div className="profile-main-essay-summary">
          {this.props.profile}
        </div>

        <div className="profile-main-essay-cont2">
          <h2 className="profile-main-essay-title">You should send me a message if...
            &nbsp;<i className="fa fa-pencil" aria-hidden="true" onClick={this.handleEdit}></i>
          </h2>
          <div className="profile-main-essay-cont1-summary-text">
            {this.props.profile2}
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
