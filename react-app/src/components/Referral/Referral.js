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
                  this.setState({response: `Your referral code is ${this.state.referral_code}`});
              }
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render() {
        return (
            <div className={"referralContainer"}>
              <Header title="Refer a Friend"/>
                <p>
                    You can refer a friend to participate in the Safe Blues campus experiment by
                    having them use your referral code when registering. This will give both you
                    and your friend additional campus hours, increasing your chances of winning
                    prizes.
                </p>
                <h2>Get your referral code:</h2>
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