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

    this.handleDemoLogin = this.handleDemoLogin.bind(this)
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

  handleDemoLogin(e) {
    e.preventDefault()
    const user = Object.assign({},this.state);
    this.props.login({username: "demo", password: "password"});
  }


  render() {
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map( (error,index) => (
        <li key={index}>{error}</li>
      ))
    };
    return (
      <div className="modal-login-inner">
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
          <ul className="modal-login-error">{errors}</ul>
          <button className="modal-login-form-button">{this.props.formType === 'signup' ? "Sign Up" : "Sign In"}</button>
          <button className="modal-login-form-b`utton demo-login" onClick={this.handleDemoLogin}>Demo Log In</button>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
