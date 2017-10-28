import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom'

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageFile: null,
      imageUrl: null,
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
    console.log(this.props);
    if (!this.props.loggedIn) {
      return (
        <Redirect to="/" />
      )
    } else {
      return (
        <div className="profile">
          <div className="profile-header">
            <img src={this.props.imageUrl} className="profile-header-pic"/>
            <div className="profile-header-text">
              <h2>{this.props.username}</h2>
              <h4>{this.props.location}</h4>
            </div>
            <input type="file" onChange={this.updateFile} />
          </div>
          <div className="profile-content">
            <div className="profile-content-essay"></div>
              <h3>Profile</h3>
              <p>{this.props.profile}</p>
            <div className="profile-content-sidebar">

            </div>
          </div>
        </div>
      )
    }
  }

}

export default HomePage;
