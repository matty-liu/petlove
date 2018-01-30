import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

import ProfilePageHeader from './profile_page_header_container';
import ProfilePageMainEssay from './profile_page_main_essay_container';
import ProfilePageMainSidebar from './profile_page_main_sidebar_container';



class ProfilePage extends React.Component {

  render() {

    if (!this.props.loggedIn) {
      return (
        <Redirect to="/" />
      )
    } else {
      return (
        <div className="profile">
          <div className="profile-header-container">
            <ProfilePageHeader userId={this.props.userId} />
          </div>
          <div className="profile-main">
            <div className="profile-main-about">
              <ProfilePageMainEssay />
              <ProfilePageMainSidebar />
            </div>
          </div>

        </div>
      )
    }
  }
}

export default ProfilePage;
