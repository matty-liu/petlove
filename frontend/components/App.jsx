import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './nav_bar_container';
import LandingPageContainer from './landing_page_container';
import HomePageContainer from './home_page_container';
import ProfilePageContainer from './profile_page_container';
import UserShowPageContainer from './user_show_page_container';

import { AuthRoute } from '../util/route_util';

const App = () => {

  return (
    <div className="page">

      <script>
        { document.body.style.backgroundColor = "#104da1" }
      </script>

      <NavBar className="navbar"/>

      <div className="app-content">
        <Switch>
          <Route exact path="/" component={LandingPageContainer} />
          <AuthRoute exact path="/home" component={HomePageContainer} />
          <AuthRoute exact path="/profile/:id" component={UserShowPageContainer} />
          <AuthRoute exact path="/profile" component={ProfilePageContainer} />
        </Switch>
      </div>

      <div className="footer">

        <div className="footer-logos">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </div>

        <div className="footer-references">
          <a href="" className="references-link">Apps</a>
          <a href="" className="references-link">Press</a>
          <a href="" className="references-link">Ad Choices</a>
          <a href="" className="references-link">About</a>
          <a href="" className="references-link">Careers</a>
          <a href="" className="references-link">Support</a>
          <a href="" className="references-link">Privacy Policy</a>
          <a href="" className="references-link">Terms and Conditions</a>
          <a href="" className="references-link">Dating Safety Tips</a>
        </div>

        <div className="footer-name">petLove 2017</div>
      </div>

  </div>
  )

};

export default App;
