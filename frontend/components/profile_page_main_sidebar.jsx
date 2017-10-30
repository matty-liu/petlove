import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import editModalStyle from './modal/edit_modal.js'
import EditFormContainer from './edit_form_container';

class ProfilePageMainSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
      <div className="profile-content-sidebar">


        <div onClick={this.handleEdit} className="profile-content-sidebar1">
          <i className="fa fa-address-card-o"></i>
          <div className="profile-content-sidebar-details1">
            <span>{this.props.status}, {this.props.sex}, {this.props.species}.</span>
            <br/>
            <span>Edit relationship status, sex, species &nbsp;<i className="fa fa-pencil" aria-hidden="true"></i></span>
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

        <div onClick={this.handleEdit} className="profile-content-sidebar2">
          <i className="fa fa-address-card-o"></i>
          <div onClick={this.handleEdit} className="profile-content-sidebar-details2">
            <span>Looking for {this.props.look_gender} {this.props.look_for}, between
              {this.props.age_range_min}&nbsp; and {this.props.age_range_max} old, {this.props.look_for}</span>
            <br/>
            <span>Edit dating prefernces &nbsp;<i className="fa fa-pencil" aria-hidden="true"></i></span>
          </div>
        </div>

      </div>
    )
  }

}

export default ProfilePageMainSidebar;
