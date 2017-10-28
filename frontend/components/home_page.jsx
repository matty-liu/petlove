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
    let file = event.currentTarget.result;
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      debugger
      this.setState(imageFile: file, imageUrl: fileReader.result)
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
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
        </div>
      )
    }
  }

}

export default HomePage;
