import React from "react";
import axios from "axios";
import "./signin.css"; // TODO update to its own CSS
const BASE_URL = "http://localhost:8000";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFirstName(event) {
    this.setState({ firstName: event.target.value });
  }
  updateLastName(event) {
    this.setState({ lastName: event.target.value });
  }
  updateEmail(event) {
    this.setState({ email: event.target.value });
  }
  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  async handleSubmit(event) {
    // check password long enough/strong
    // check passwords match
    // make post request to make new user
    // display instructions on downloading the app
    // add 'send me updates' button and add that field to db
    // TODO add a handle for when user already exists
    event.preventDefault();
    console.log({ password: this.state.password, email: this.state.email });
    const res = await axios.post(
      `${BASE_URL}/v1/participants`,
      { first_name: this.state.firstName, last_name: this.state.lastName, email: this.state.email, password: this.state.password },
      { withCredentials: true }
    );
    console.log(res.data);
  }
  showPassword() {
    var x = document.getElementById("password_input");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  render() {
    if (this.props.signedIn == false) {
      return (
        <div className="signinContainer">
          <h1>Sign Up For Safe Blues:</h1>
          <form className="formContainer" onSubmit={this.handleSubmit}>
          <label>
              First Name:
              <input type="text" onChange={this.updateFirstName} name="first name" />
            </label>
            <label>
              last Name:
              <input type="text" onChange={this.updateLastName} name="last name" />
            </label>
            <label>
              Email:
              <input type="text" onChange={this.updateEmail} name="email" />
            </label>

            <label>
              Password:
              <input
                type="password"
                id="password_input"
                onChange={this.updatePassword}
                name="name"
              />
            </label>
            <label>
              Password Confirmation:
              <input
                type="password"
                id="password_input"
                onChange={this.updatePassword}
                name="name"
              />
            </label>
            <label>
              Show Password
              <input type="checkbox" onClick={this.showPassword} />
            </label>
              <input type="submit" value="Create user" />
          </form>

          <input type="button" value="test login" onClick={this.sampleFunc} />
          <input type="button" value="test admin" onClick={this.testAdmin} />
        </div>
      );
    } else {
      return <div>You are already signed in!</div>;
    }
  }
}
export default SignUp;
