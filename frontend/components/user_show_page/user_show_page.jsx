import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

import UserShowPageHeader from './user_show_page_header_container';
import UserShowPageMainEssay from './user_show_page_main_essay_container';
import UserShowPageMainSidebar from './user_show_page_main_sidebar_container';

class UserShowPage extends React.Component {

  componentWillMount() {
    this.props.getUser(parseInt(this.props.match.params["id"]))
  }

  render() {
    if (!this.props.loggedIn) {
      return (
        <Redirect to="/" />
      )
    } else {
      return (
      <div className="profile">
        <UserShowPageHeader userId={this.props.userId} />
          <div className="profile-main">
            <div className="profile-main-about">
              <UserShowPageMainEssay userId={this.props.userId} />
              <UserShowPageMainSidebar userId={this.props.userId} />
            </div>
          </div>
      </div>
      )
    }
  }
}

export default UserShowPage;
