import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom'

class ProfilePage extends React.Component {
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
    console.log(this.props);
    if (!this.props.loggedIn) {
      return (
        <Redirect to="/" />
      )
    } else {
      return (
        <div className="profile">

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

          <div className="profile-main">

            <div className="profile-main-about">

              <div className="profile-main-essay">

                <div className="profile-main-essay-cont1">
                  <span className="profile-main-essay-cont1-summary">My self summary</span>

                  <div className="profile-main-essay-cont1-summary-text">
                    Curious individual who likes to play around.
                    Interested in trying new things and looking for a
                    friend! {this.props.profile}
                  </div>
                </div>

                <div className="profile-main-essay-cont2">
                  <span className="profile-main-essay-cont1-summary">You should send me a message if...</span>
                  <div className="profile-main-essay-cont1-summary-text">
                    You play well others! I enjoy meeting new animals and am
                    excited to play!
                  </div>
                </div>

              </div>

              <div className="profile-content-sidebar">

                <button className="profile-content-sidebar-button1">
                  <table>
                    <tbody>
                      <tr className = "profile-content-sidebar-button1-row">
                        <td>I am a</td>
                        <td>{this.props.status}</td>
                        <td>{this.props.sex}</td>
                        <td>{this.props.species}</td>
                      </tr>
                    </tbody>
                  </table>
                </button>

                <button className="profile-content-sidebar-button2">
                  <table>
                    <tbody>
                      <tr className="profile-content-sidebar-button2-row">
                        <td>{this.props.age_range_min}</td>
                        <td>{this.props.age_range_max}</td>
                        <td>{this.props.look_for}</td>
                        <td>{this.props.look_gender}</td>
                      </tr>
                    </tbody>
                  </table>
                </button>
              </div>

            </div>


          </div>

        </div>
      )
    }
  }

}

export default ProfilePage;
