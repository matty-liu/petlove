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
      <div className="modal-content-login">
        <h2 className="modal-content-login-title">{this.props.formType === 'signup' ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={this.handleSubmit} className="modal-content-login-form">
          <div className="modal-content-login-form">
            <div className="modal-login-form-inputs">

              <input type="text"
                value={this.state.username}
                onChange={this.handleUsername}
                className={this.props.errors[0] ?
                  "modal-login-form-username modal-login-form-input-error" :
                  "modal-login-form-username modal-login-form-input"}
                  placeholder="Username">
              </input>
              {this.props.errors[0] ? <i className="fa fa-exclamation exclamation1" aria-hidden="true"></i> : ""}

              <input type="password"
                value={this.state.password}
                onChange={this.handlePassword}
                className={this.props.errors[0] ?
                  "modal-login-form-password modal-login-form-input-error" :
                  "modal-login-form-password modal-login-form-input"}
                  placeholder="Password">
              </input>
              {this.props.errors[0] ? <i className="fa fa-exclamation exclamation2" aria-hidden="true"></i> : ""}

            </div>

            {this.props.errors[0] ?
              <div className={"modal-login-form-errortext"}>
                <ul>{errors}</ul>
              </div> :
              ""}

            <button className="modal-login-form-button">{this.props.formType === 'signup' ? "Sign Up" : "Sign In"}</button>
            <button className="modal-login-form-button demo-login" onClick={this.handleDemoLogin}>Demo Log In</button>
          </div>
        </form>
      </div>
    )
  }
}



export default withRouter(SessionForm);
