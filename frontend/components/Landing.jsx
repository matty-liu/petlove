import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import LandingPageContainer from './landing_page_container';

import { AuthRoute } from '../util/route_util';

const Landing = () => {

  return (

    <div className="body-top">

      <script>
        { document.body.style.backgroundColor = "#4fc5d0" }
      </script>

      <GreetingContainer />

      <Route exact path="/" component={LandingPageContainer} />

      <div className="footer-temp"></div>

    </div>
  )

};

export default Landing;
