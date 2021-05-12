import React from "react";
import "./Login.css";
import TextInput from "components/TextInput/TextInput";
import { Button } from "@material-ui/core";
import axios from "axios";
import { getBaseURL } from "helpers/GetBaseURL.js";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: null, password: null };
    this.setter = this.setter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  setter(key, value) {
    this.setState({ [key]: value });
  }

  async handleSubmit(event) {
    const res = await axios.post(
      `${getBaseURL()}/v1/signin`,
      { email: this.state.email, password: this.state.password },
      { withCredentials: true }
    );
    if (res.data.passwords_match) {
      this.props.setLoggedIn(true);
    }
  }
  displayLoggedIn() {
    if (this.props.loggedIn) {
      return (
        <div>
          <p>Successfully logged in!</p>
          <p>
            <a href="/dashboard">view dashboard</a>
          </p>
        </div>
      );
    }
  }

  displayNotLoggedIn() {
    return (
      <div className="loginContainer">
        <h1>Login</h1>
        <p>This page allows access to the admin (non-participant) dashboard.</p>

        <div className="form">
          <TextInput
            label="Email"
            type="email"
            varname="email"
            setter={this.setter}
          />
          <TextInput
            label="Password"
            type="password"
            varname="password"
            setter={this.setter}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => this.handleSubmit(event)}
          >
            {" "}
            Submit{" "}
          </Button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.loggedIn
          ? this.displayLoggedIn()
          : this.displayNotLoggedIn()}
      </div>
    );
  }
}
export default Login;
