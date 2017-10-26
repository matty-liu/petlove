import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  };

  handleUsername(e) {
    this.setState({username: e.target.value})
  }

  handlePassword(e) {
    this.setState({password: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({},this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div className="modal-login">
        <h2 className="modal-login-title">{this.props.formType === 'signup' ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={this.handleSubmit} className="modal-login-form">
          <br />
          <label className="modal-login-form-username">
            <input type="text"
              value={this.state.username}
              onChange={this.handleUsername}
              className="modal-login-form-input"
              placeholder="Username"/>
            </label>
            <label className="modal-login-form-password">
            <input type="password"
              value={this.state.password}
              onChange={this.handlePassword}
              className="modal-login-form-input"
              placeholder="Password"/>
            </label>
          <button className="modal-login-form-button">{this.props.formType === 'signup' ? "Sign Up" : "Sign In"}</button>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
