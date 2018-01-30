import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import NavBar from './nav_bar_container';
import LandingPageContainer from './landing_page/landing_page_container';
import HomePageContainer from './home_page/home_page_container';
import ProfilePageContainer from './profile_page/profile_page_container';
import UserShowPageContainer from './user_show_page/user_show_page_container';
import UsersPageContainer from './user_show_page/browse_users_container';
import LikesPageContainer from './likes/likes_page_container';

import { AuthRoute } from '../util/route_util';

const App = () => {

  return (
    <div id="app">

      <script>
        { document.body.style.backgroundColor = "#104da1" }
      </script>

      <NavBar className="navbar"/>

      <div className="content">
        <Switch>
          <Route exact path="/" component={LandingPageContainer} />
          <AuthRoute exact path="/home" component={HomePageContainer} />
          <AuthRoute exact path="/profile/:id" component={UserShowPageContainer} />
          <AuthRoute exact path="/profile" component={ProfilePageContainer} />
          <AuthRoute exact path="/users" component={UsersPageContainer} />
          <AuthRoute exact path="/likes" component={LikesPageContainer} />
        </Switch>
      </div>

      <div className="footer">

        <div className="footer-logos">
          <a className="fa fa-github" aria-hidden="true" href="https://github.com/matty-liu"></a>
          <a className="fa fa-linkedin-square" aria-hidden="true" href="https://www.linkedin.com/in/matthew-liuu"></a>
          <a className="fa fa-envelope" aria-hidden="true" href="mailto:mattkliu@gmail.com"></a>
        </div>

          <div className="footer-references">
            <a href="http://mattyliu.com/" className="references-link">About Me</a>
            <a className="references-link" href="https://github.com/matty-liu">Github</a>
            <a className="references-link" href="https://www.linkedin.com/in/matthew-liuu">LinkedIn</a>
            <a className="references-link" href="mailto:mattkliu@gmail.com">E-Mail</a>
          </div>

        <div className="footer-name">petLove 2017</div>
      </div>

  </div>
  )

};



export default App;
