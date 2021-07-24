import Header from "../Header/Header";
import React from "react";
import axios from "axios";
import "./Referral.css";
import { Button, TextField } from "@material-ui/core";
import { BACKEND_URL, STATIC_URL } from "../../constants";

class Referral extends React.Component {
    constructor(props) {
        super(props);
        this.setter = this.setter.bind(this);
        this.setValue = this.setValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            participant_id: "",
            referral_code: "",
            response: ""
        };
    }

    setter(event, key) {
        this.setState({ [key]: event.target.value });
      }

    setValue(value, key) {
        this.setState({ [key]: value });
      }

    handleSubmit(event) {
        axios
          .get(`${BACKEND_URL}/v3/referral/${this.state.participant_id}`, {})
          .then((res) => {
              const data = res.data;
              if (data.status === 400) {
                 this.setState({response: "Unrecognised participant ID"});
              } else {
                  this.setState({referral_code: data.referral_code});
                  this.setState({response: `Your invite code is ${this.state.referral_code}`});
              }
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render() {
        return (
            <div className={"referralContainer"}>
              <Header title="Invite a Friend"/>
              <h2>How does it work?</h2>
                <p>
                    If you are already participating in the Safe Blues experiment, you can get more eligible hours for the prize draws by inviting friends to participate. The full details of how inviting friends helps increase your chances are <a href="https://safeblues.org/prizes">here</a>. In a nutshell, the more people that you invite (as long as they occasionally attend campus), the higher your chances of winning!
                    <br></br>
                    The invite a friend mechanism works by asking your friends to join, giving them your personal <b>invite code</b>, and having them register using your code when <a href="https://safeblues.org/join">joining</a>.
                    Your friends are rewarded too, with bonus eligible hours and a higher chance of winning.
                </p>
                <h2>Get your invite code:</h2>
                <TextField
                  id="outlined-basic"
                  label="Participant ID"
                  variant="outlined"
                  dense="true"
                  fullWidth
                  onChange={(event) => this.setter(event, "participant_id")}
                />
                <center>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button> 
                </center>
                <p>{this.state.response}</p>
            </div>
        );
    }
}

export default Referral;
