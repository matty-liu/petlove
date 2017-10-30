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

        <div onClick={this.handleEdit}>
          <span>I am a {this.props.status}, {this.props.sex}, {this.props.species}.</span>
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

        <button className="profile-content-sidebar-button2">
          <table>
            <tbody>
              <tr className="profile-content-sidebar-button2-row">
                <td>Looking for someone between {this.props.age_range_min}&nbsp;
                   and {this.props.age_range_max} old, {this.props.look_for}
                  and {this.props.look_gender}
                </td>
              </tr>
            </tbody>
          </table>
        </button>
      </div>
    )
  }

}

export default ProfilePageMainSidebar;
