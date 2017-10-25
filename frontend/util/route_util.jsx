import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

const Auth = ({component: Component, path, loggedIn}) => {

  return (
    <Route path={path} render={ (props) => {

        if (!loggedIn) {
          return <Component {...props} />
        } else {
          return <Redirect to="/" />
        }
      }
    } />
  )
}

function mapStateToProps(state, ownProps) {
  return {
    loggedIn: Boolean(state.session.currentUser)
  }
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))
