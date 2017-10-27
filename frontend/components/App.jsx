import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import LandingPageContainer from './landing_page_container';
import HomePageContainer from './home_page_container';

import { AuthRoute } from '../util/route_util';

const App = () => {

  return (
    <div className="body-top">

      <header className="header-main">
        <h1 className="header-main-title">{'petLo<3'}</h1>
        <GreetingContainer />
      </header>

      <div>
        <LandingPageContainer />
      </div>

      <AuthRoute path="/home" component={HomePageContainer} />

      <div className="footer-temp">
      </div>

    </div>
  )

};

export default App;
