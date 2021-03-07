import React from "react";
import axios from 'axios';
import './signin.css'
const BASE_URL = "http://localhost:8000"
class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state= {value: ''}
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 
  updateEmail(event){
    this.setState({email: event.target.value});
  }

  updatePassword(event){
    this.setState({password: event.target.value});
  }

  async sampleFunc(event){
    const res = await axios.get(`${BASE_URL}/v1/logged_in_test`, {withCredentials: true})
    console.log(res)
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log({'password': this.state.password, 'email': this.state.email})
    const res = await axios.post(`${BASE_URL}/v1/signin`, {"email": this.state.email, "password": this.state.password}, {withCredentials: true})
    console.log(res.data)
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
        <div className='signinContainer'>
          <h1>Sign in:</h1>
          <form className='formContainer' onSubmit={ this.handleSubmit } >
            
            <label>
              Email:
              <input type="text" onChange={this.updateEmail} name="name" />
            </label>

            <label>
              Password:
              <input type="password" id="password_input"  onChange={this.updatePassword} name="name" />
            </label>
            
            <input type="checkbox" onClick={this.showPassword}/>
            Show Password

            <input type="submit" value="Submit"/>
          </form>

          <input type="button" value="req" onClick={this.sampleFunc}/>

        </div>
      );
    } 
     else {
      return <div>You are already signed in!</div>;
    } 
  }
}
export default SignIn;
