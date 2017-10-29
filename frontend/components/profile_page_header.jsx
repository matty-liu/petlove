import React from 'react';

class ProfilePageHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageFile: null,
      imageUrl: this.props.imageUrl,
    }

    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(event) {
    let file = event.nativeEvent.target.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result})
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  handleSubmit(event) {
    let formData = new FormData();
    formData.append(this.state.imageFile)
    this.props.uploadPic(this.state.currentUser.id, formData)
  };

  render() {
    return (
      <div className="profile-header">
        <div className="profile-header-thumbnail">
          <img src={this.state.imageUrl} className="profile-header-thumbnail-pic" />
          <input type="file" id="profilepic-upload-button" className="profile-header-thumbnail-upload" onClick={this.updateFile} />
          <label htmlFor="profilepic-upload-button" className="profile-header-thumbnail-upload-label">Add</label>
        </div>
        <div className="profile-header-text">
          <div className="profile-header-text-username">{this.props.username}</div>
          <div className="profile-header-text-location">{this.props.location}</div>
        </div>
      </div>
    )
  }

}

export default ProfilePageHeader;
