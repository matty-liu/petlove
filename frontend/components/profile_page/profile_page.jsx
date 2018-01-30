import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

import ProfilePageHeader from './profile_page_header_container';
import ProfilePageMainEssay from './profile_page_main_essay_container';
import ProfilePageMainSidebar from './profile_page_main_sidebar_container';

import QuestionFormContainer from '../question/question_form_container';

class ProfilePage extends React.Component {

  render() {

    if (!this.props.loggedIn) {
      return (
        <Redirect to="/" />
      )
    } else {
      return (
        <div className="profile">
          <ProfilePageHeader userId={this.props.userId} />
          <div className="profile-main">
            <div className="profile-main-about">
              <ProfilePageMainEssay />
              <ProfilePageMainSidebar />
            </div>
          </div>
          <div className="profile-main-questions">
            <div className="profile-question-main">
              <div className="profile-questions-match-title">Match Questions</div>
              <QuestionFormContainer />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default ProfilePage;
