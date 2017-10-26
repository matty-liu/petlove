import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';

import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="body-top">

    <header className="header-main">
      <h1 className="header-main-title">{'petLo<3'}</h1>
      <GreetingContainer />
    </header>

    <div className="main">
      <div className="main-top">
        <div className="main-top-left">
          <div className="main-top-phrase">
            SUBSTANCE,
            <br/>
            NOT JUST SELFIES
          </div>
          <div className="main-top-description">
            There are many types of dating apps. But there is only one that can show the real animal in you
          </div>
        </div>
        <div className="main-top-right">
          <div className="main-top-right-image"></div>
        </div>
      </div>
    </div>

    <div className= "footer-temp">

    </div>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;
