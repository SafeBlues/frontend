import React from "react";
import axios from "axios";
import "./Stats.css";
import { Button, TextField } from "@material-ui/core";
import PlotlyChartBucketed from "components/PlotlyChartBucketed/index";
import { withRouter } from "react-router"
// const BFF_URL = "http://localhost:8000";
// const BFF_URL = "http://130.216.216.231:8000";
var protocol = "";
var api_location = "";
if (String(window.location.hostname) === "localhost") {
  protocol = "http://";
  api_location = ":8000";
} else {
  protocol = "https://";
  api_location = "/api";
}
const BFF_URL = protocol + String(window.location.hostname) + api_location;

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participant_id: this.props.participant_id ? this.props.participant_id : "",
      hist: [],
      bin_edges: [],
      participant_hours_on_campus: 0,
      num_participants: "",
    };
    
    this.getAggregateData = this.getAggregateData.bind(this);
    this.fetchParticipantHours = this.fetchParticipantHours.bind(this);
    this.disableButtonCheck = this.disableButtonCheck.bind(this);
  }
  getAggregateData() {
    axios
      .get(BFF_URL + "/api/stats", {})
      .then((res) => {
        const data = res.data;
        this.setState({ hist: data.hist });
        this.setState({ bin_edges: data.bin_edges });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(BFF_URL + "/api/num_participants", {})
      .then((res) => {
        const data = res.data;
        this.setState({ num_participants: data.num_participants });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getAggregateData();
  }
  fetchParticipantHours() {
    axios
      .get(BFF_URL + "/api/stats/" + this.state.participant_id, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.status === 400) {
          alert("Participant_id has not been linked");
        } else {
          this.setState({
            participant_hours_on_campus: data.total_hours_on_campus,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  setter(event, key) {
    this.setState({ [key]: event.target.value });
  }
  setValue(value, key) {
    this.setState({ [key]: value });
  }

  disableButtonCheck() {
    if (this.state.participant_id.length === 10) {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={this.fetchParticipantHours}
        >
          View Hours
        </Button>
      );
    } else {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={this.fetchParticipantHours}
          disabled
        >
          Enter participant ID
        </Button>
      );
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className={"grid"}>
        <h1> Leaderboard </h1>
        <h2>View the status of the experiment here</h2>
        <p>
          We currently have <strong>{this.state.num_participants}</strong>{" "}
          participants.
        </p>
        <p>
          You can help raise this number by sharing this site with your friends!
        </p>
        <h3>Check the number of hours you have on campus here</h3>
        <div className="inputContainer">
          <TextField
            id="outlined-basic"
            label="Participant ID"
            variant="outlined"
            dense="true"
            fullWidth
            defaultValue={this.state.participant_id}
            onChange={(event) => this.setter(event, "participant_id")}
          />
          <br />
          <br />
          {this.disableButtonCheck()}
        </div>
        {/* TODO make this conditional on having submitted a participant_id */}
        <p>your hours on campus: {this.state.participant_hours_on_campus}</p>

        <div className="graphContainer">
          <PlotlyChartBucketed
            title="Hours of participants on campus"
            participant_hours_on_campus={this.state.participant_hours_on_campus}
            hist={this.state.hist}
            bin_edges={this.state.bin_edges}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(Stats);
