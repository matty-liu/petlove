import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';

import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className="header-main">
      <h1 className="header-main-title">petLove</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;
