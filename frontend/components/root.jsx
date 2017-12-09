import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Landing from './Landing';
import { AuthRoute } from '../util/route_util';

import RootModal from './modal/modal_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <div className="body-page">
        <Switch>
          <Route exact path="/" component={Landing} />
          <AuthRoute path="/" component={App} />
        </Switch>
        <RootModal />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
