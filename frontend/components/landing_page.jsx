import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
    }
  }

}

export default LandingPage;
