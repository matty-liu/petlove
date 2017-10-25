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
      <div>
        <h2>{this.props.formType === 'signup' ? "Sign Up" : "Login"}</h2>
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
            <input type="password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </label>
          <button>{this.props.formType === 'signup' ? "Sign Up" : "Login"}</button>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
