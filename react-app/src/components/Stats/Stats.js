import React from "react";
import axios from "axios";
import "./Stats.css";
import { Button, TextField } from "@material-ui/core";
import ParticipantBarGraph from "components/ParticipantBarGraph";
import ParticipantChart from "components/ParticipantChart";
import PlotlyChart from "components/PlotlyChart/index";
import { Bar, Line } from "react-chartjs-2";
// import ParticipantBarGraph from "../ParticipantBarGraph/ParticipantBarGraph"
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
      participant_id: "example",
      hours_on_campus_list: [],
      hist: [],
      bin_edges: [],
      participant_hours_on_campus: 0,
    };
    this.getAggregateData = this.getAggregateData.bind(this);
    this.fetchParticipantHours = this.fetchParticipantHours.bind(this);
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
      .get(BFF_URL + "/api/rawstats", {})
      .then((res) => {
        const data = res.data;
        this.setState({ hours_on_campus_list: data.hours_on_campus_list });
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
        this.setState({
          participant_hours_on_campus: data.total_hours_on_campus,
        });
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

  render() {
    return (
      <div className={"grid"}>
        <h1>Participant Statistics</h1>
        <p>
          This page lets you view your overall hours on campus, and lets you see
          how you compare against other participants in the experiment.
        </p>
        <div className="inputContainer">
        <TextField
          id="outlined-basic"
          label="Participant ID"
          variant="outlined"
          dense="true"
          fullWidth
          onChange={(event) => this.setter(event, "participant_id")}
          />
          <br/>
          <br/>
        <Button
          variant="contained"
          color="primary"
          onClick={this.fetchParticipantHours}
          >
          Submit participant_id
        </Button>
        </div>
        <p>your hours on campus: {this.state.participant_hours_on_campus}</p>
        <div className="graphContainer">
          <PlotlyChart
            participant_hours_on_campus={this.state.participant_hours_on_campus}
            hist={this.state.hist}
            bin_edges={this.state.bin_edges}
            hours_on_campus_list={this.state.hours_on_campus_list}
          />
        </div>
      </div>
    );
  }
}
export default Stats;
