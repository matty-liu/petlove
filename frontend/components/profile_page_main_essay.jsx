import React from 'react'

class ProfilePageMainEssay extends React.Component {

  render() {

    return (
      <div className="profile-main-essay">
        <div className="profile-main-essay-cont1">
          <span className="profile-main-essay-cont1-summary">My self summary
          &nbsp;<i className="fa fa-pencil" aria-hidden="true"></i></span>

          <div className="profile-main-essay-cont1-summary-text">
            {this.props.profile}
          </div>

        </div>

        <div className="profile-main-essay-cont2">
          <span className="profile-main-essay-cont1-summary">You should send me a message if...
          &nbsp;<i className="fa fa-pencil" aria-hidden="true"></i> </span>
          <div className="profile-main-essay-cont1-summary-text">
            You play well others! I enjoy meeting new animals and am
            excited to play!
          </div>
        </div>
      </div>
    )
  }

}

export default ProfilePageMainEssay;
