import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';

import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className="header-main">
      <h1 className="header-main-title">{'petLo<3'}</h1>
      <GreetingContainer />
    </header>

    <div className="home-top">
      <button className="header-main-greeting-signup">Sign up</button>
    </div>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;
