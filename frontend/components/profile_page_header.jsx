import React from 'react';

class ProfilePageHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageUrl: this.props.imageUrl,
      userId: this.props.userId,
    }

    this.updateFile = this.updateFile.bind(this);
  }

  // works for preview but can't upload photo
  // updateFile(event) {
  //   let file = event.nativeEvent.target.files[0];
  //
  //   let fileReader = new FileReader();
  //   fileReader.onload = () => {
  //     this.setState({imageFile: file, imageUrl: fileReader.result})
  //   };
  //
  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //   }
  // };

  updateFile(event) {
    let file = event.nativeEvent.target.files[0];

    let fileReader = new FileReader();
    fileReader.onload = (file) => {
      this.setState({imageUrl: fileReader.result})
    };

    let userId = this.state.userId
    if (file) {
      let formData = new FormData();
      formData.append("user[id]", userId)
      formData.append("user[image]", file)
      this.props.updatePic(formData, userId)
    }

    if (file) {
      fileReader.readAsDataURL(file)
    }

    // if (file) {
    //   fileReader.onload = (file,userId) => {
    //     let formData = new FormData();
    //     formData.append("user[id]", userId)
    //     formData.append("user[image]", file)
    //
    //     this.props.update(formData)
    //   }
    // }
  };


  // handleSubmit(event) {
  //   let formData = new FormData();
  //   formData.append(this.state.imageFile)
  //   this.props.updatePic(this.props.userId, formData)
  // };

  render() {
    return (
      <div className="profile-header">
        <div className="profile-header-thumbnail">
          <img src={this.state.imageUrl} className="profile-header-thumbnail-pic" />
          <input type="file"  className="profile-header-thumbnail-upload" />
            <input className="profile-header-thumbnail-upload"
              id="profilepic-upload-button"
              type="file"
              onChange={this.updateFile} />

          <label htmlFor="profilepic-upload-button"
            className="profile-header-thumbnail-upload-label"
            onChange={this.updateFile}>Add</label>
        </div>
        <div className="profile-header-text">
          <div className="profile-header-text-username">{this.props.username}</div>
          <div className="profile-header-text-location">{this.props.location}</div>
        </div>
      </div>
    )
  }

}

// (e)=>this.updateFile(e)

export default ProfilePageHeader;
