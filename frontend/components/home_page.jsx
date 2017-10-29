import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom'

class HomePage extends React.Component {
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
    if (!this.props.loggedIn) {
      return (
        <Redirect to="/" />
      )
    } else {
      return (
        <div>
          <div> YOUR TOP MATCHES </div>
          <div> QUESTIONS </div>
        </div>
      )
    }
  }

}

export default HomePage;
