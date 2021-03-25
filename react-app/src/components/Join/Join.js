import React from "react";
import axios from "axios";
import "./Join.css";
import googleplay from "./googleplay.png"
const BASE_URL = "http://localhost:8000"; // TODO pass in the base url as prop

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.setter = this.setter.bind(this);
    this.setValue = this.setValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { email: "", participant_id: "", consented: false };
  }
  setter(event, key) {
    this.setState({ [key]: event.target.value });
  }
  setValue(value, key) {
    this.setState({ [key]: value });
  }
  async handleSubmit(event) {
    event.preventDefault();
    if (this.state.consented === true) {
      console.log("submitting...");
      const res = await axios
        .post(
          `${BASE_URL}/v2/participants`,
          {
            email: this.state.email,
            participant_id: this.state.participant_id,
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response);
          alert("Successfully connected participant_id and email.");
        })
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.detail[0].msg);
            console.log(error.response.data); // => the response payload
          }
        });
    } else {
      alert("You must consent to the terms to continue");
    }
  }

  render() {
    const { participant_id, email } = this.state;
    return (
      <div className={"joinContainer"}>
        <h1>Joining The Safe Blues 2021 Experiment</h1>
        <form className="formContainer" onSubmit={this.handleSubmit}>
          <p>
            Thank you for your interest in joining the Safe Blues campus
            experiment. If you are over 16, plan to attend the University of
            Auckland city campus during parts of 2021, and have an Android
            mobile device you are welcomed to join. You are advised to first
            read the online participant information sheet.
            {/* TODO  add the link and recreate the information sheet*/}
          </p>
          <h2>Follow these 5 steps to join:</h2>
          <ol>
            <li>
              Download the Safe Blues App to your Android phone:
              <br />
              <center>
                <a href="https://play.google.com/store/apps/details?id=org.safeblues.mobile">
                  <img
                    src={googleplay}
                    alt="Google Play"
                    style={{width: '150px'}}
                  ></img>
                </a>
              </center>
              <br />
              The app provides you with your unique private 10 digit{" "}
              <b>participant id</b> which you can write down or see whenever you
              launch the app.
            </li>
            <li>
              Enter your Participant ID to link it to your email address. <br />
              <input
                type="text"
                name="participant_id"
                value={participant_id}
                onChange={(event) => this.setter(event, "participant_id")}
              />
            </li>
            <li>
              Enter your email <br />
              <input
                type="text"
                name="email"
                value={email}
                onChange={(event) => this.setter(event, "email")}
              />
            </li>
            <li>
              <input
                type="checkbox"
                onChange={(event) =>
                  this.setValue(event.target.checked, "consented")
                }
              ></input>
              I have read the participant information sheet and the consent
              form.
            </li>

            <input type="submit" value="Submit" />
          </ol>
        </form>
      </div>
    );
  }
}
export default Join;
