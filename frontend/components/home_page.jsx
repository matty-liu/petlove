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
        <div>
          <p>Home Page coming soon....</p>
          <img src={this.props.imageUrl} className="pet-profile-pic"/>
          <input type="file" onChange={this.updateFile} />
          <img src={this.state.imageUrl} className="pet-profile-pic"/>
        </div>
      )
    }
  }

}

export default HomePage;
