import React from "react";
import axios from "axios";
import "./signin.css"; // TODO update to its own CSS
const BASE_URL = "http://localhost:8000";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "first name here" };
    this.setter = this.setter.bind(this)
  }

  // updateFirstName(event) {
  //   this.setState({ firstName: event.target.value });
  // }
  // 
  updateLastName(event) { 
    this.setState({ lastName: event.target.value });
  }
  updateEmail(event) {
    this.setState({ email: event.target.value });
  }
  updatePassword(event) {
    this.setState({ password: event.target.value });
  }
  setter(event, key) {
    this.setState({[key]: event.target.value})
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
    const {firstName, lastName, email} = this.state // do this all the time
    const {setter} = this // generally don't bother doing this
    if (this.props.signedIn === false) {
      return (
        <div className="signinContainer">
          <h1>Sign Up For Safe Blues:</h1>
          <form className="formContainer" onSubmit={this.handleSubmit}>
          <label>
              First Name:
              {/* <input type="text" onChange={this.updateFirstName} name="first name" /> */}
              <input type="text" value={firstName}  onChange={(event)=> setter(event, "firstName")} name="first name" />
            </label>
            <label>
              last Name:
              <input type="text" value={lastName} onChange={(event)=> setter(event, "lastName")} name="last name" />
            </label>
            <label>
              Email:
              <input type="text" value={email} onChange={(event)=> setter(event, "email")} name="email" />
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
