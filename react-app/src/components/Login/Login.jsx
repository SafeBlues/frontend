import React from "react";
import "./Login.css";
import TextInput from "components/TextInput/TextInput";
import {Button } from "@material-ui/core";
import axios from "axios";
import { getBaseURL } from "helpers/GetBaseURL.js"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: null, password: null, loggedIn: false };
    this.setter = this.setter.bind(this)
  }
  setter(key, value){
    this.setState({[key]: value})
  }

  async handleSubmit(event) {
    const res = await axios.post(
      `${getBaseURL()}/v1/signin`,
      { email: this.state.email, password: this.state.password },
      { withCredentials: true }
    );
    console.log(res.data);
  }
  displayLoggedIn(){
      if (this.state.loggedIn){
          return("You are logged in!")
      } else {
          return("You are not logged in.")
      }
  }
  render() {
    return (
      <div className="content">
        <h1>Login</h1>
        <p>This page allows access to the admin (non-participant) dashboard.</p>
        
        <div className="form">
          <TextInput label="Email" type="email" varname="email" setter={this.setter}/>
          <TextInput label="Password" type="password" varname="password" setter={this.setter}/>
          <Button variant="contained" color="primary" onClick={event => this.handleSubmit(event)}> Submit </Button>
        </div>
        <p>
            {this.displayLoggedIn()}
        </p>
      </div>
    );
  }
}
export default Login;
