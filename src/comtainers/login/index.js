import React from 'react';
import { connect } from 'react-redux';
import { callLogin } from '../../store/actions/auth';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };
  submit = event => {
    const { username, password } = this.state;
    event.preventDefault();
    this.props.callLogin({ username, password });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label>Username: </label>
          <input
            type="text"
            name="txtName"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <label>Password</label>
          <input
            type="password"
            name="txtPass"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { callLogin }
)(Login);
