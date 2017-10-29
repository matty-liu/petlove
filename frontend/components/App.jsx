import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './nav_bar_container';
import LandingPageContainer from './landing_page_container';
import HomePageContainer from './home_page_container';
import ProfilePageContainer from './profile_page_container';

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
          <AuthRoute exact path="/profile" component={ProfilePageContainer} />
        </Switch>

      </div>

      <div className="footer-temp"></div>

  </div>
  )

};

export default App;
