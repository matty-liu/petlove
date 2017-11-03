import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-modal';

import configureStore from './store/store'
import Root from './components/root'

import { signup,login,logout } from './actions/session_actions'
import { getUsers } from './actions/users_actions'

// window.signup = signup;
// window.login = login;
// window.logout = logout;
// window.getState = store.getState;
// window.dispatch = store.dispatch;

document.addEventListener('DOMContentLoaded', () => {

  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore()
  }
  
  window.getUsers = getUsers;

  Modal.setAppElement(document.body);

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
