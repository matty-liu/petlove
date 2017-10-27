import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom'

import HomePageContainer from './home_page_container'

class LandingPage extends React.Component {

  render() {
    if (!this.props.loggedIn) {
      return (
        <div className="main">
          <div className="main-top">
            <div className="main-top-left">
              <div className="main-top-phrase">
                SUBSTANCE,
                <br/>
                NOT JUST SELFIES
              </div>
              <div className="main-top-description">
                There are many types of dating apps. But there is only one that can show the real animal in you.
              </div>
            </div>
            <div className="main-top-right">
              <div className="main-top-right-image"></div>
            </div>
          </div>
        </div>
      )
    } else {
      return (<Redirect to="/home" />)
    }
  }

}

export default LandingPage;
