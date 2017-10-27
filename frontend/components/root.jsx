import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import HomePageContainer from './home_page_container'

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <div>
        <Route path="/" component={App} />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
