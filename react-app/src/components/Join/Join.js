import React from "react";
import axios from "axios";
import "./Join.css";
import { Button, TextField } from "@material-ui/core";
import googleplay from "./googleplay.png";

// const BFF_URL = "http://localhost:8000";
// const BFF_URL = "http://130.216.216.231:8000";
var protocol = ''
var api_location = ''
if (String(window.location.hostname) === 'localhost') {
  protocol = "http://"
  api_location = ":8000"
} else {
  protocol = "https://"
  api_location = "/api"
}
const BFF_URL = protocol + String(window.location.hostname) + api_location
const safebluesurl = "http://safeblues.org"; // for older static content on non-subdomain

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
    if (this.state.consented === true) {
      console.log("submitting...");
      const res = await axios
        .post(
          `${BFF_URL}/v2/participants`,
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
    return (
      <div className={"joinContainer"}>
        <h1>Joining The Safe Blues 2021 Experiment</h1>
        <form className="formContainer">
          <p>
            Thank you for your interest in joining the Safe Blues campus
            experiment. If you are over 16, plan to attend the University of
            Auckland city campus during parts of 2021, and have an Android
            mobile device you are welcomed to join. You are advised to first
            read the online{" "}
            <a href={safebluesurl + "/participant-information-sheet/"}>
              participant information sheet
            </a>
            .{/* TODO  add the link and recreate the information sheet*/}
          </p>
          <h2>Follow these 5 steps to join:</h2>
          <ol>
            <li>
              Download the Safe Blues App to your Android phone:
              <br />
              <center>
                <div className="img-container">
                  <a href="https://play.google.com/store/apps/details?id=org.safeblues.mobile">
                    <img
                      src={googleplay}
                      alt="Google Play"
                      style={{ width: "150px" }}
                    ></img>
                  </a>
                </div>
              </center>
              <p>
                The app provides you with your unique private 10 digit{" "}
                <b>participant id</b> which you can write down or see whenever
                you launch the app.
              </p>
            </li>
            <li>
              <p>Enter your Participant ID to link it to your email address.</p>
              {/* TODO add validation to the user input, eg add 'error' to the
               TextField class when the input is invalid, or come back from the 
              backend as invalid. */}
              <TextField
                id="outlined-basic"
                label="Participant ID"
                variant="outlined"
                dense="true"
                fullWidth
                onChange={(event) => this.setter(event, "participant_id")}
              />
            </li>
            <li>
              <p>
                Enter your email <br />
              </p>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                onChange={(event) => this.setter(event, "email")}
                dense="true"
              />
            </li>
            <li>
              Read the{" "}
              <a
                href={
                  safebluesurl +
                  "/participant-information-sheet/SafeBlues-PIS.pdf"
                }
              >
                participant information sheet
              </a>{" "}
              and the{" "}
              <a
                href={
                  safebluesurl +
                  "/participant-information-sheet/SafeBlues-Consent.pdf"
                }
              >
                consent form
              </a>
              . If you agree, tick the box below:
              <br />
              <p>
              <input
                type="checkbox"
                onChange={(event) =>
                  this.setValue(event.target.checked, "consented")
                }
              ></input>
              I have read the participant information sheet and the consent
              form. I am over 16 years of age and I agree with all of the terms.
              </p>
            </li>
            <center>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </center>
          </ol>
          <p>
          Note that by default by joining you will also enter the prize draws.
          If you wish to join but wish to be excluded from the prize draws
          e-mail the Safe Blues team to let us know at <a href="mailto:contact@safeblues.org?subject=Withdraw from prizes">contact@safeblues.org</a>.
          </p>
        </form>
      </div>
    );
  }
}
export default Join;
