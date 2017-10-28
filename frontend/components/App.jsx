import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import LandingPageContainer from './landing_page_container';
import HomePageContainer from './home_page_container';

import { AuthRoute } from '../util/route_util';

const App = () => {

  return (
    <div className="body-top">

      <nav>
        <GreetingContainer />
      </nav>

      <AuthRoute path="/home" component={HomePageContainer} />
      <Route exact path="/" component={LandingPageContainer} />

      <div className="footer-temp">
      </div>

    </div>
  )

};

export default App;
