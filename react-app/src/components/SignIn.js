import React from "react";
import axios from "axios";
import "./signin.css";
const BASE_URL = "http://localhost:8000";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  async sampleFunc(event) {
    event.preventDefault();
    const res = await axios.get(`${BASE_URL}/v1/logged_in_test`, {
      withCredentials: true,
    });
    console.log(res);
  }
  testAdmin(event) {
    event.preventDefault();
    console.log("testing admin");
    const res = axios
      .get(`${BASE_URL}/v1/participants`, { withCredentials: true })
      .then((res) => {
        alert("Login success!");
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 401) {
          alert("Wrong credentials.");
        } else {
          throw error;
        }
      });
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log({ password: this.state.password, email: this.state.email });
    const res = await axios.post(
      `${BASE_URL}/v1/signin`,
      { email: this.state.email, password: this.state.password },
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
          <h1>Sign in:</h1>
          <form className="formContainer" onSubmit={this.handleSubmit}>
            <label>
              Email:
              <input type="text" onChange={this.updateEmail} name="name" />
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
            Show Password
            <input type="checkbox" onClick={this.showPassword} />
          </label>
            <input type="submit" value="Sign in" />
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
export default SignIn;
