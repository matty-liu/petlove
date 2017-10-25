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
    e.preventDefault()
    this.setState(username: e.target.value)
  }

  handlePassword(e) {
    e.preventDefault()
    this.setState(password: e.target.password)
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({},this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          Welcome to petLove!
          <br />
          <label>
            Username:
            <input type="text"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </label>
          <label>
            Password:
            <input type="text"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </label>
          <button>{this.props.formType === 'signup' ? "Sign Up" : "Log In"}</button>
        </form>
      </div>
    )
  }


}
