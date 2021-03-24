import React from "react";
import axios from "axios";
import "./Join.css";
const BASE_URL = "http://localhost:8000"; // TODO pass in the base url as prop

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.setter = this.setter.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {email: '', participant_id: ''}
  }
  setter(event, key) {
    this.setState({[key]: event.target.value});

  }
  async handleSubmit(event) {
    event.preventDefault();
    console.log("submitting...")
    const res = await axios.post(
      `${BASE_URL}/v2/participants`,
      { email: this.state.email, participant_id: this.state.participant_id },
      { withCredentials: true }
    ).then(response => {
      console.log(response)
      alert("Successfully connected participant_id and email.")
    })
    .catch((error) => {
      if( error.response ){
          alert(error.response.data.detail[0].msg)
          console.log(error.response.data); // => the response payload 
      }
  });
  }

render() {
  const {participant_id, email} = this.state
  return (
    <div className={"joinContainer"}>
      <h1>Joining The Safe Blues 2021 Experiment</h1>
      <form className="formContainer" onSubmit={this.handleSubmit}>

      <p>
        Thank you for your interest in joining the Safe Blues campus experiment.
        If you are over 16, plan to attend the University of Auckland city
        campus during parts of 2021, and have an Android mobile device you are
        welcomed to join. You are advised to first read the online participant
        information sheet. 
        {/* TODO  add the link and recreate the information sheet*/}
      </p>
      <h2>
          Follow these 5 steps to join:
      </h2>
      <ol>
          <li>
              Download the Safe Blues app from Google Play Store.

              The app provides you with your unique private 10 digit <strong>Participant ID</strong> which you can write down or see whenever you launch the app.
          </li>
          <li>
            Enter your Participant ID to link it to your email address.
            <input type="text" name="participant_id" value={participant_id}  onChange={(event)=> this.setter(event, "participant_id")}/>
          </li>
          <li>
            Enter your email
            <input type="text" name="email" value={email}  onChange={(event)=> this.setter(event, "email")} />
          </li>
          <input type="submit" value="Submit"  />
      </ol>
      </form>
    </div>
  
  );
}
}
export default Join;